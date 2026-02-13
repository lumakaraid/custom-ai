# Alternative: Deploy Langsung dari Vercel

Karena ada issue dengan Git credentials, kamu bisa deploy langsung dari Vercel tanpa push ke GitHub dulu.

## Option 1: Vercel CLI (Tercepat!)

### Install Vercel CLI
```bash
npm install -g vercel
```

### Deploy
```bash
cd D:\01-lumaverse\luma-carousel-custom-gpt
vercel login
# Login dengan email: lumakara.id@gmail.com

vercel
# Follow prompts:
# - Link to existing project? No
# - Project name: custom-ai
# - Directory: ./
# - Override settings? No

# Deploy!
```

Vercel CLI akan:
1. Upload files langsung
2. Build & deploy
3. Kasih URL production
4. Auto-link ke GitHub repo (optional)

### Commands
```bash
# Deploy to production
vercel --prod

# Check deployment
vercel ls

# View logs
vercel logs
```

## Option 2: Drag & Drop di Vercel

1. Buka: https://vercel.com/new
2. Pilih tab "Import from folder"
3. Drag folder: `D:\01-lumaverse\luma-carousel-custom-gpt`
4. Deploy!

## Option 3: GitHub Upload Manual

1. Buka: https://github.com/lumakaraid/custom-ai
2. Klik "Add file" → "Upload files"
3. Drag semua files dari: `D:\01-lumaverse\luma-carousel-custom-gpt`
4. Commit
5. Balik ke Vercel → Deploy

## Recommended: Vercel CLI

Paling cepat dan simple:

```bash
# Install
npm install -g vercel

# Deploy
cd D:\01-lumaverse\luma-carousel-custom-gpt
vercel login
vercel --prod
```

Done! Dapat URL langsung.

## After Deploy

Test endpoints:
```bash
# Replace dengan URL kamu
export URL="https://custom-ai-xxx.vercel.app"

# Health check
curl $URL/health

# Knowledge list
curl $URL/api/knowledge

# Get specific file
curl $URL/api/knowledge/01_LUMAKARA_BRAND_CHARACTER

# Search
curl "$URL/api/search?q=vitamin"
```

## Next Steps

1. ✅ Deploy API ke Vercel
2. ⬜ Setup Custom GPT dengan knowledge files
3. ⬜ Deploy MCP server ke Railway (untuk Gemini)
4. ⬜ Import n8n workflow
5. ⬜ Test end-to-end

Mau coba Vercel CLI?
