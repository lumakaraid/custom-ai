# Push ke GitHub - Manual Steps

## Problem
Git masih authenticated sebagai user `raymaizing-id`, perlu switch ke `lumakaraid`.

## Solution 1: Clear Git Credentials (Recommended)

### Windows Credential Manager
1. Tekan `Win + R`
2. Ketik: `control /name Microsoft.CredentialManager`
3. Klik "Windows Credentials"
4. Cari "git:https://github.com"
5. Klik → Remove
6. Kemudian push lagi:

```bash
git push -u origin main
```

Akan muncul prompt login - login dengan account `lumakaraid`.

## Solution 2: GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com/
2. Install & login dengan account `lumakaraid`
3. Add repository: `D:\01-lumaverse\luma-carousel-custom-gpt`
4. Publish repository ke `lumakaraid/custom-ai`

## Solution 3: Personal Access Token

1. Generate token di: https://github.com/settings/tokens
   - Login sebagai `lumakaraid`
   - Generate new token (classic)
   - Select scopes: `repo` (full control)
   - Copy token

2. Push dengan token:
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/lumakaraid/custom-ai.git
git push -u origin main
```

## Solution 4: Upload via GitHub Web

1. Buka: https://github.com/lumakaraid/custom-ai
2. Klik "uploading an existing file"
3. Drag & drop semua files dari: `D:\01-lumaverse\luma-carousel-custom-gpt`
4. Commit

## After Push Success

Setelah berhasil push, refresh Vercel dashboard dan klik **Deploy**.

Vercel akan:
1. Detect repo changes
2. Build & deploy automatically
3. Kasih URL: `https://custom-ai-xxx.vercel.app`

## Test Deployment

```bash
# Health check
curl https://custom-ai-xxx.vercel.app/health

# List knowledge
curl https://custom-ai-xxx.vercel.app/api/knowledge

# Search
curl "https://custom-ai-xxx.vercel.app/api/search?q=vitamin"
```

## Current Status

✅ Files ready to push:
- Knowledge base (15 files)
- MCP server
- REST API
- n8n workflows
- Documentation
- Vercel config

⏳ Waiting: Push to GitHub
⏳ Waiting: Deploy to Vercel

## Quick Command (After fixing credentials)

```bash
git push -u origin main
```

That's it!
