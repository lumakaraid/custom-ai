// Vercel Serverless Function - Knowledge Base API
import { readFileSync } from 'fs';
import { join } from 'path';

// Simple in-memory cache
const knowledgeBaseCache = {};

// Knowledge base files list
const knowledgeFiles = [
  '01_LUMAKARA_BRAND_CHARACTER.md',
  '02_LUMAKARA_SERVICES.md',
  '03_CONTENT_TOPICS_LIBRARY.md',
  '04_INDONESIAN_CALENDAR_2026.md',
  '05_CONTENT_STRATEGY.md',
  '06_TARGET_AUDIENCE_GEN_Z.md',
  '07_TARGET_AUDIENCE_MILLENNIAL.md',
  '08_TARGET_AUDIENCE_GEN_X.md',
  '09_VISUAL_PROMPT_GUIDE.md',
  '10_BRAND_VOICE_EXAMPLES.md',
  '11_CONTENT_STRUCTURE_GUIDE.md',
  '12_CHARACTER_COUNT_RULES.md',
  '13_PHP_OUTPUT_FORMAT.md',
  '14_IMPORT_INSTRUCTIONS.md',
  '15_QUALITY_CHECKLIST.md'
];

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  // Health check
  if (pathname === '/api' || pathname === '/api/health') {
    return res.status(200).json({
      status: 'ok',
      service: 'Lumakara Knowledge Base API',
      endpoints: {
        health: '/api/health',
        list: '/api/knowledge',
        get: '/api/knowledge/:filename',
        all: '/api/knowledge/all'
      }
    });
  }

  // List all knowledge files
  if (pathname === '/api/knowledge') {
    return res.status(200).json({
      files: knowledgeFiles.map(f => ({
        filename: f,
        url: `https://raw.githubusercontent.com/lumakaraid/custom-ai/main/knowledge-base/${f}`,
        apiUrl: `/api/knowledge/${f}`
      }))
    });
  }

  // Get all knowledge base combined
  if (pathname === '/api/knowledge/all') {
    try {
      const allContent = knowledgeFiles.map(file => {
        const url = `https://raw.githubusercontent.com/lumakaraid/custom-ai/main/knowledge-base/${file}`;
        return `\n## ${file}\n\nURL: ${url}\n`;
      }).join('\n---\n');

      return res.status(200).json({
        message: 'All knowledge base files',
        files: knowledgeFiles,
        baseUrl: 'https://raw.githubusercontent.com/lumakaraid/custom-ai/main/knowledge-base/',
        content: allContent
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Get specific knowledge file
  const fileMatch = pathname.match(/^\/api\/knowledge\/(.+)$/);
  if (fileMatch) {
    const filename = fileMatch[1];
    
    if (!knowledgeFiles.includes(filename)) {
      return res.status(404).json({ 
        error: 'File not found',
        availableFiles: knowledgeFiles
      });
    }

    const githubUrl = `https://raw.githubusercontent.com/lumakaraid/custom-ai/main/knowledge-base/${filename}`;
    
    return res.status(200).json({
      filename,
      githubUrl,
      message: 'Fetch content from GitHub URL',
      note: 'Use the githubUrl to get the actual content'
    });
  }

  // 404
  return res.status(404).json({ 
    error: 'Not found',
    availableEndpoints: [
      '/api/health',
      '/api/knowledge',
      '/api/knowledge/:filename',
      '/api/knowledge/all'
    ]
  });
}
