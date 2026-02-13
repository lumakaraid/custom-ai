import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.API_PORT || 3001;
const KNOWLEDGE_BASE_PATH = path.join(__dirname, '../knowledge-base');

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Lumakara Knowledge Base API' });
});

// Get all knowledge files list
app.get('/api/knowledge', async (req, res) => {
  try {
    const files = await fs.readdir(KNOWLEDGE_BASE_PATH);
    const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md');
    
    const fileList = mdFiles.map(f => ({
      id: f.replace('.md', ''),
      filename: f,
      name: f.replace(/^\d+_/, '').replace('.md', '').replace(/_/g, ' ')
    }));
    
    res.json({ files: fileList });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get specific knowledge file
app.get('/api/knowledge/:fileId', async (req, res) => {
  try {
    const { fileId } = req.params;
    const files = await fs.readdir(KNOWLEDGE_BASE_PATH);
    const targetFile = files.find(f => f.includes(fileId) && f.endsWith('.md'));
    
    if (!targetFile) {
      return res.status(404).json({ error: 'File not found' });
    }
    
    const content = await fs.readFile(
      path.join(KNOWLEDGE_BASE_PATH, targetFile),
      'utf-8'
    );
    
    res.json({
      id: fileId,
      filename: targetFile,
      content
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search across knowledge base
app.get('/api/search', async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }
    
    const files = await fs.readdir(KNOWLEDGE_BASE_PATH);
    const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md');
    
    const results = [];
    const queryLower = q.toLowerCase();
    
    for (const file of mdFiles) {
      const content = await fs.readFile(
        path.join(KNOWLEDGE_BASE_PATH, file),
        'utf-8'
      );
      
      if (content.toLowerCase().includes(queryLower)) {
        const lines = content.split('\n');
        const matchingLines = lines
          .map((line, index) => ({ line, index }))
          .filter(({ line }) => line.toLowerCase().includes(queryLower))
          .slice(0, 3);
        
        results.push({
          file,
          matches: matchingLines.map(m => ({
            line: m.line.trim(),
            lineNumber: m.index + 1
          }))
        });
      }
    }
    
    res.json({
      query: q,
      resultCount: results.length,
      results
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Generate content endpoint (integrate dengan AI)
app.post('/api/generate', async (req, res) => {
  try {
    const { topic, audience, slideCount, tone } = req.body;
    
    // Validation
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }
    
    // TODO: Integrate dengan Custom GPT atau Gemini API
    // Untuk sekarang return mock response
    
    res.json({
      message: 'Content generation endpoint - integrate dengan AI API',
      input: { topic, audience, slideCount, tone },
      note: 'Implement AI integration here'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Lumakara Knowledge Base API running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API docs: http://localhost:${PORT}/api/knowledge`);
});
