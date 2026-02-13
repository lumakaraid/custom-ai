# Deployment Guide - Lumakara Content AI

## Quick Start

### 1. Git Setup
```bash
git add .
git commit -m "Initial setup: Knowledge base + MCP + API + n8n workflows"
git remote add origin https://github.com/yourusername/lumakara-content-ai.git
git push -u origin main
```

### 2. Deploy MCP Server

#### Option A: Railway (Recommended)
```bash
cd mcp-server
npm install

# Deploy
railway login
railway init
railway up
```

#### Option B: Google Cloud Run
```bash
cd mcp-server
gcloud run deploy lumakara-mcp \
  --source . \
  --platform managed \
  --region asia-southeast2 \
  --allow-unauthenticated
```

#### Option C: Render
1. Connect GitHub repo
2. Select `mcp-server` folder
3. Build command: `npm install`
4. Start command: `npm start`

### 3. Deploy REST API (Optional)

Same steps as MCP server, tapi untuk folder `api/`

### 4. Setup Custom GPT

Follow: `custom-gpt/SETUP.md`

1. Buka ChatGPT → Create GPT
2. Upload semua file dari `knowledge-base/`
3. Copy instructions dari `CUSTOM-GPT-CONFIG.md`
4. Test & publish

### 5. Setup Gemini Gem

Follow: `gemini-gem/SETUP.md`

1. Buka Google AI Studio
2. Create new Gem
3. Connect MCP server (deployed URL)
4. Test & share

### 6. Import n8n Workflow

1. Buka n8n instance
2. Import `n8n-workflows/lumakara-content-generator.json`
3. Setup credentials (OpenAI/Gemini API key)
4. Activate workflow

## Architecture

```
┌─────────────────┐
│  Knowledge Base │ (GitHub)
│   (Markdown)    │
└────────┬────────┘
         │
         ├──────────────┐
         │              │
    ┌────▼────┐    ┌────▼────┐
    │ Custom  │    │ Gemini  │
    │   GPT   │    │   Gem   │
    └────┬────┘    └────┬────┘
         │              │
         │         ┌────▼────┐
         │         │   MCP   │
         │         │  Server │
         │         └────┬────┘
         │              │
         └──────┬───────┘
                │
           ┌────▼────┐
           │   n8n   │
           │Workflow │
           └────┬────┘
                │
           ┌────▼────┐
           │WordPress│
           │  Import │
           └─────────┘
```

## Environment Variables

### MCP Server
```env
PORT=3000
KNOWLEDGE_BASE_PATH=../knowledge-base
```

### REST API
```env
API_PORT=3001
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=...
```

### n8n
Setup di n8n credentials:
- OpenAI API Key
- Google AI API Key

## Testing

### Test MCP Server
```bash
cd mcp-server
npm install
npm start

# Di terminal lain
echo '{"jsonrpc":"2.0","method":"tools/list","id":1}' | node index.js
```

### Test REST API
```bash
cd api
npm install
npm start

# Test endpoints
curl http://localhost:3001/health
curl http://localhost:3001/api/knowledge
curl "http://localhost:3001/api/search?q=vitamin"
```

### Test n8n Workflow
```bash
curl -X POST https://your-n8n.com/webhook/generate-content \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Test Topic",
    "audience": "millennial",
    "slideCount": 5
  }'
```

## Monitoring

### MCP Server
- Check logs di Railway/Cloud Run dashboard
- Monitor response time
- Track error rate

### Custom GPT
- OpenAI usage dashboard
- Conversation logs
- User feedback

### Gemini Gem
- Google AI Studio dashboard
- API usage metrics
- Error logs

### n8n
- Workflow execution history
- Error notifications
- Performance metrics

## Maintenance

### Update Knowledge Base
```bash
# Edit files di knowledge-base/
git add knowledge-base/
git commit -m "Update: [description]"
git push

# Re-upload ke Custom GPT (manual)
# MCP server auto-reload (kalau setup hot-reload)
```

### Update MCP Server
```bash
cd mcp-server
# Edit code
git commit -am "Update MCP server"
git push

# Railway/Cloud Run auto-deploy
```

### Update n8n Workflow
1. Edit di n8n UI
2. Export JSON
3. Commit ke repo
4. Backup

## Backup Strategy

### Daily
- Git commit knowledge base changes
- Export n8n workflows

### Weekly
- Backup generated content files
- Review API logs

### Monthly
- Review & optimize prompts
- Update knowledge base
- Performance audit

## Security

### API Keys
- Store di environment variables
- Never commit to Git
- Rotate regularly

### Access Control
- Custom GPT: Private/Team only
- Gemini Gem: Restricted access
- n8n: Authentication enabled
- MCP Server: API key protection

## Cost Optimization

### OpenAI (Custom GPT)
- Monitor token usage
- Set spending limits
- Use GPT-4 Turbo (cheaper)

### Google AI (Gemini)
- Free tier: 60 requests/minute
- Monitor quota
- Upgrade kalau perlu

### Infrastructure
- Railway: Free tier available
- Cloud Run: Pay per use
- n8n: Self-hosted = free

## Troubleshooting

### MCP Server tidak connect
```bash
# Check logs
railway logs

# Test locally
cd mcp-server
npm start
```

### Custom GPT tidak baca knowledge
- Re-upload files
- Check file size limits
- Verify format (.md)

### n8n workflow error
- Check credentials
- Verify API endpoints
- Review error logs

### Output format salah
- Review knowledge base
- Update examples
- Strengthen instructions

## Support

Issues? Check:
1. GitHub Issues
2. Documentation files
3. Test scripts
4. Error logs

## Next Steps

1. ✅ Setup Git repo
2. ✅ Deploy MCP server
3. ✅ Create Custom GPT
4. ✅ Create Gemini Gem
5. ✅ Import n8n workflow
6. ⬜ Test end-to-end
7. ⬜ Train team
8. ⬜ Go live!
