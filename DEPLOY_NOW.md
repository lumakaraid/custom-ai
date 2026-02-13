# 🚀 Deploy Sekarang - 3 Langkah

## Masalah Git Credentials

Git masih authenticated sebagai user lain. Solusi tercepat:

## ✅ SOLUSI: Upload Manual ke GitHub

### Step 1: Upload Files (5 menit)

1. **Buka GitHub repo:**
   https://github.com/lumakaraid/custom-ai

2. **Klik "Add file" → "Upload files"**

3. **Drag & drop semua files dari:**
   ```
   D:\01-lumaverse\luma-carousel-custom-gpt
   ```
   
   Atau klik "choose your files" dan select all.

4. **Commit:**
   - Commit message: "Initial commit: Knowledge base + API + n8n workflows"
   - Klik "Commit changes"

### Step 2: Deploy ke Vercel (2 menit)

1. **Di Vercel dashboard yang sudah kamu buka:**
   - Refresh page
   - Klik "Import" atau "Deploy"
   - Select repo: `lumakaraid/custom-ai`
   - Klik "Deploy"

2. **Wait for deployment** (1-2 menit)

3. **Get URL:**
   - Vercel kasih URL: `https://custom-ai-xxx.vercel.app`
   - Test: `https://custom-ai-xxx.vercel.app/health`

### Step 3: Import n8n Workflow (3 menit)

1. **Buka n8n instance kamu**

2. **Import workflow:**
   - Menu → Workflows → Import from File
   - Upload: `n8n-workflows/lumakara-simple.json`
   - (File ada di: `D:\01-lumaverse\luma-carousel-custom-gpt\n8n-workflows\lumakara-simple.json`)

3. **Setup OpenAI credentials:**
   - Klik node "OpenAI"
   - Add credential
   - Paste OpenAI API key
   - Save

4. **Activate workflow:**
   - Toggle "Active" di kanan atas
   - Copy webhook URL

5. **Test:**
   ```bash
   curl -X POST https://your-n8n.com/webhook/lumakara-generate \
     -H "Content-Type: application/json" \
     -d '{"topic":"Test","audience":"millennial","slideCount":5}'
   ```

## ✅ Done!

Sekarang kamu punya:
- ✅ Knowledge base di GitHub
- ✅ API di Vercel
- ✅ n8n workflow running
- ✅ Ready to generate content!

## Test End-to-End

```bash
# Call n8n webhook
curl -X POST https://your-n8n.com/webhook/lumakara-generate \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Manfaat Vitamin C untuk Kulit",
    "audience": "gen_z",
    "slideCount": 5,
    "tone": "casual"
  }'
```

Expected response:
```json
{
  "success": true,
  "filename": "2026-02-13-manfaat-vitamin-c-untuk-kulit.php",
  "content": "$carousel_data = array(...);",
  "topic": "Manfaat Vitamin C untuk Kulit",
  "audience": "gen_z",
  "slideCount": 5,
  "generatedAt": "2026-02-13T10:30:00.000Z"
}
```

## Files to Upload ke GitHub

Semua files di folder:
```
D:\01-lumaverse\luma-carousel-custom-gpt
```

Including:
- ✅ knowledge-base/ (15 files)
- ✅ api/ (REST API)
- ✅ mcp-server/ (untuk Gemini nanti)
- ✅ n8n-workflows/ (workflow JSON)
- ✅ custom-gpt/ (setup guide)
- ✅ gemini-gem/ (setup guide)
- ✅ All documentation
- ✅ vercel.json
- ✅ package.json

## Alternative: Vercel CLI

Kalau mau lebih cepat:

```bash
npm install -g vercel
cd D:\01-lumaverse\luma-carousel-custom-gpt
vercel login
# Login dengan: lumakara.id@gmail.com
vercel --prod
```

Done! Dapat URL langsung.

## Summary

1. Upload files ke GitHub (manual drag & drop)
2. Deploy ke Vercel (klik Deploy)
3. Import n8n workflow (upload JSON)
4. Test!

Total time: ~10 menit

Mau mulai sekarang?
