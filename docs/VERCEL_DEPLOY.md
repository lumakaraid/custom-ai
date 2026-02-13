# Deploy ke Vercel

## Quick Deploy (5 menit)

### Option 1: Via Vercel Dashboard (Recommended)

1. **Buka Vercel**
   - Go to: https://vercel.com/new
   - Login dengan GitHub

2. **Import Repository**
   - Select: `lumakaraid/custom-ai`
   - Framework Preset: Other
   - Root Directory: `./`
   - Klik **Deploy**

3. **Wait for Deployment** (1-2 menit)
   - Vercel auto-detect `vercel.json`
   - Build & deploy API

4. **Get URL**
   - Deployment URL: `https://custom-ai-xxx.vercel.app`
   - Test: `https://custom-ai-xxx.vercel.app/api/health`

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## API Endpoints

Setelah deploy, API available di:

### Health Check
```
GET https://custom-ai-xxx.vercel.app/api/health
```

Response:
```json
{
  "status": "ok",
  "service": "Lumakara Knowledge Base API",
  "endpoints": {
    "health": "/api/health",
    "list": "/api/knowledge",
    "get": "/api/knowledge/:filename",
    "all": "/api/knowledge/all"
  }
}
```

### List Knowledge Files
```
GET https://custom-ai-xxx.vercel.app/api/knowledge
```

Response:
```json
{
  "files": [
    {
      "filename": "01_LUMAKARA_BRAND_CHARACTER.md",
      "url": "https://raw.githubusercontent.com/...",
      "apiUrl": "/api/knowledge/01_LUMAKARA_BRAND_CHARACTER.md"
    },
    ...
  ]
}
```

### Get Specific File Info
```
GET https://custom-ai-xxx.vercel.app/api/knowledge/01_LUMAKARA_BRAND_CHARACTER.md
```

Response:
```json
{
  "filename": "01_LUMAKARA_BRAND_CHARACTER.md",
  "githubUrl": "https://raw.githubusercontent.com/lumakaraid/custom-ai/main/knowledge-base/01_LUMAKARA_BRAND_CHARACTER.md",
  "message": "Fetch content from GitHub URL"
}
```

### Get All Knowledge Base Info
```
GET https://custom-ai-xxx.vercel.app/api/knowledge/all
```

## Use in n8n

Di n8n workflow, ganti URL ke Vercel:

```javascript
// Instead of direct GitHub URLs
const apiUrl = 'https://custom-ai-xxx.vercel.app/api/knowledge/all';

// Fetch knowledge base info
const response = await fetch(apiUrl);
const data = await response.json();
```

## Environment Variables (Optional)

Kalau mau add API key protection:

1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add: `API_KEY=your_secret_key`
3. Update `api/index.js` untuk check API key

## Custom Domain (Optional)

1. Vercel Dashboard → Project → Settings → Domains
2. Add custom domain: `api.lumakara.id`
3. Update DNS records
4. Done!

## Troubleshooting

### Deployment Failed
- Check `vercel.json` syntax
- Verify `api/index.js` exists
- Review build logs

### API Returns 404
- Check endpoint URL
- Verify route in `vercel.json`
- Test with `/api/health`

### CORS Error
- API already has CORS enabled
- Check browser console for details

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test API endpoints
3. ✅ Update n8n workflow with Vercel URL
4. ✅ Test end-to-end

## Cost

- Vercel Free Tier:
  - 100GB bandwidth/month
  - Unlimited API requests
  - Perfect untuk project ini!
