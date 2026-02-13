# Deploy ke Vercel

## Setup

Repo sudah ready untuk deploy ke Vercel. Files yang sudah disiapkan:
- `vercel.json` - Vercel configuration
- `package.json` - Root package.json untuk Vercel
- `api/index.js` - Vercel serverless entry point
- `api/server.js` - Updated untuk support Vercel

## Deploy Steps

### 1. Di Vercel Dashboard (yang sudah kamu buka)

Kamu sudah di halaman "New Project" di Vercel. Tinggal:

1. **Root Directory**: Biarkan default `/`
2. **Framework Preset**: Pilih "Other"
3. **Build Command**: Kosongkan (tidak perlu build)
4. **Output Directory**: Kosongkan
5. Klik **Deploy**

### 2. Environment Variables (Optional)

Kalau mau add environment variables:
- `OPENAI_API_KEY` - untuk Custom GPT integration
- `GEMINI_API_KEY` - untuk Gemini integration

Tapi untuk sekarang tidak wajib, karena API hanya serve knowledge base.

### 3. Setelah Deploy

Vercel akan kasih URL seperti: `https://custom-ai-xxx.vercel.app`

Test endpoints:
```bash
# Health check
curl https://custom-ai-xxx.vercel.app/health

# List knowledge files
curl https://custom-ai-xxx.vercel.app/api/knowledge

# Get specific file
curl https://custom-ai-xxx.vercel.app/api/knowledge/01_LUMAKARA_BRAND_CHARACTER

# Search
curl "https://custom-ai-xxx.vercel.app/api/search?q=vitamin"
```

## Troubleshooting

### Error: Permission denied to push
Kamu perlu authenticate Git dengan GitHub:

```bash
# Option 1: HTTPS dengan token
git remote set-url origin https://YOUR_TOKEN@github.com/lumakaraid/custom-ai.git

# Option 2: SSH
git remote set-url origin git@github.com:lumakaraid/custom-ai.git
```

Atau push manual dari GitHub Desktop / VS Code.

### Vercel Build Error
Check logs di Vercel dashboard. Common issues:
- Missing dependencies
- Wrong Node version
- Path issues

## Alternative: Push Manual

Karena ada permission issue, kamu bisa:

1. **Copy files manual ke repo**:
   - Buka folder: `D:\01-lumaverse\luma-carousel-custom-gpt`
   - Copy semua files
   - Paste ke folder repo GitHub kamu
   - Commit & push dari GitHub Desktop

2. **Atau fix Git authentication**:
   ```bash
   # Generate GitHub token di: https://github.com/settings/tokens
   # Kemudian:
   git remote set-url origin https://YOUR_TOKEN@github.com/lumakaraid/custom-ai.git
   git push -u origin main
   ```

## What's Deployed

Vercel akan deploy:
- REST API (`/api/*` endpoints)
- Knowledge base files (accessible via API)
- Health check endpoint

**Note:** MCP server tidak bisa di Vercel (butuh long-running process). Deploy MCP server ke Railway atau Cloud Run.

## Next Steps

1. ✅ Deploy API ke Vercel
2. ⬜ Deploy MCP server ke Railway (untuk Gemini Gem)
3. ⬜ Setup Custom GPT dengan knowledge files
4. ⬜ Test integration

## URLs After Deploy

- **API**: `https://custom-ai-xxx.vercel.app`
- **Health**: `https://custom-ai-xxx.vercel.app/health`
- **Knowledge**: `https://custom-ai-xxx.vercel.app/api/knowledge`
- **Search**: `https://custom-ai-xxx.vercel.app/api/search?q=query`

Setelah deploy, URL ini bisa dipakai untuk:
- n8n workflows
- Custom integrations
- External applications
