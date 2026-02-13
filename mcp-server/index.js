import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KNOWLEDGE_BASE_PATH = path.join(__dirname, '../knowledge-base');

class LumakaraKnowledgeServer {
  constructor() {
    this.server = new Server(
      {
        name: 'lumakara-knowledge-base',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    this.server.onerror = (error) => console.error('[MCP Error]', error);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'get_brand_character',
          description: 'Get Lumakara brand character and voice guidelines',
          inputSchema: { type: 'object', properties: {} }
        },
        {
          name: 'get_services',
          description: 'Get Lumakara services and products information',
          inputSchema: { type: 'object', properties: {} }
        },
        {
          name: 'get_content_topics',
          description: 'Get content topics library',
          inputSchema: { type: 'object', properties: {} }
        },
        {
          name: 'get_calendar',
          description: 'Get Indonesian calendar 2026 with holidays',
          inputSchema: { type: 'object', properties: {} }
        },
        {
          name: 'get_content_strategy',
          description: 'Get content strategy guidelines',
          inputSchema: { type: 'object', properties: {} }
        },
        {
          name: 'get_target_audience',
          description: 'Get target audience information',
          inputSchema: {
            type: 'object',
            properties: {
              segment: {
                type: 'string',
                enum: ['gen_z', 'millennial', 'gen_x'],
                description: 'Target audience segment'
              }
            },
            required: ['segment']
          }
        },
        {
          name: 'get_visual_guide',
          description: 'Get visual prompt guide for image generation',
          inputSchema: { type: 'object', properties: {} }
        },
        {
          name: 'get_all_knowledge',
          description: 'Get all knowledge base files combined',
          inputSchema: { type: 'object', properties: {} }
        },
        {
          name: 'search_knowledge',
          description: 'Search across all knowledge base files',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Search query'
              }
            },
            required: ['query']
          }
        }
      ]
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'get_brand_character':
            return await this.readKnowledgeFile('01_LUMAKARA_BRAND_CHARACTER.md');
          case 'get_services':
            return await this.readKnowledgeFile('02_LUMAKARA_SERVICES.md');
          case 'get_content_topics':
            return await this.readKnowledgeFile('03_CONTENT_TOPICS_LIBRARY.md');
          case 'get_calendar':
            return await this.readKnowledgeFile('04_INDONESIAN_CALENDAR_2026.md');
          case 'get_content_strategy':
            return await this.readKnowledgeFile('05_CONTENT_STRATEGY.md');
          case 'get_target_audience':
            return await this.getTargetAudience(args.segment);
          case 'get_visual_guide':
            return await this.readKnowledgeFile('09_VISUAL_PROMPT_GUIDE.md');
          case 'get_all_knowledge':
            return await this.getAllKnowledge();
          case 'search_knowledge':
            return await this.searchKnowledge(args.query);
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [{ type: 'text', text: `Error: ${error.message}` }],
          isError: true
        };
      }
    });
  }

  async readKnowledgeFile(filename) {
    const filePath = path.join(KNOWLEDGE_BASE_PATH, filename);
    const content = await fs.readFile(filePath, 'utf-8');
    const parsed = matter(content);
    
    return {
      content: [{
        type: 'text',
        text: parsed.content
      }]
    };
  }

  async getTargetAudience(segment) {
    const fileMap = {
      'gen_z': '06_TARGET_AUDIENCE_GEN_Z.md',
      'millennial': '07_TARGET_AUDIENCE_MILLENNIAL.md',
      'gen_x': '08_TARGET_AUDIENCE_GEN_X.md'
    };
    
    return await this.readKnowledgeFile(fileMap[segment]);
  }

  async getAllKnowledge() {
    const files = await fs.readdir(KNOWLEDGE_BASE_PATH);
    const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md');
    
    let combined = '# Lumakara Complete Knowledge Base\n\n';
    
    for (const file of mdFiles.sort()) {
      const content = await fs.readFile(path.join(KNOWLEDGE_BASE_PATH, file), 'utf-8');
      const parsed = matter(content);
      combined += `\n## ${file}\n\n${parsed.content}\n\n---\n`;
    }
    
    return {
      content: [{ type: 'text', text: combined }]
    };
  }

  async searchKnowledge(query) {
    const files = await fs.readdir(KNOWLEDGE_BASE_PATH);
    const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md');
    
    let results = [];
    const queryLower = query.toLowerCase();
    
    for (const file of mdFiles) {
      const content = await fs.readFile(path.join(KNOWLEDGE_BASE_PATH, file), 'utf-8');
      const parsed = matter(content);
      
      if (parsed.content.toLowerCase().includes(queryLower)) {
        const lines = parsed.content.split('\n');
        const matchingLines = lines.filter(line => 
          line.toLowerCase().includes(queryLower)
        );
        
        results.push({
          file,
          matches: matchingLines.slice(0, 5)
        });
      }
    }
    
    const resultText = results.length > 0
      ? results.map(r => `\n### ${r.file}\n${r.matches.join('\n')}`).join('\n\n')
      : 'No results found';
    
    return {
      content: [{ type: 'text', text: `# Search Results for: "${query}"\n${resultText}` }]
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Lumakara Knowledge Base MCP server running on stdio');
  }
}

const server = new LumakaraKnowledgeServer();
server.run().catch(console.error);
