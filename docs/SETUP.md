# Setup Guide - Lumakara Content AI

## 🎯 3 Platform, 1 Knowledge Base

Setup untuk Custom GPT, Gemini Gem, dan n8n menggunakan knowledge base yang sama.

---

## 1️⃣ Custom GPT Setup (15 menit)

### Step 1: Create GPT
1. Buka https://chat.openai.com/gpts/editor
2. Klik "Create"

### Step 2: Configure
- **Name:** Lumakara Content Creator
- **Description:** AI untuk generate konten carousel Instagram Lumakara

### Step 3: Instructions
Copy-paste isi file `CUSTOM-GPT-CONFIG.md` ke Instructions box

### Step 4: Upload Knowledge Base
Upload semua 15 files dari folder `knowledge-base/`:
- 01_LUMAKARA_BRAND_CHARACTER.md
- 02_LUMAKARA_SERVICES.md
- ... (semua files)
- 15_QUALITY_CHECKLIST.md

### Step 5: Capabilities
- ✅ Web Browsing
- ✅ DALL-E Image Generation
- ❌ Code Interpreter

### Step 6: Test
```
Buatkan konten carousel tentang "Double Cleansing" untuk Millennial, 7 slide
```

### Step 7: Publish
- Save & Publish
- Choose visibility (Private/Team/Public)

---

## 2️⃣ Gemini Gem Setup (15 menit)

### Step 1: Create Gem
1. Buka https://aistudio.google.com/
2. Klik "Create new Gem"

### Step 2: Configure
- **Name:** Lumakara Content Creator
- **Description:** AI untuk generate konten carousel Instagram Lumakara

### Step 3: System Instructions
Copy-paste isi file `CUSTOM-GPT-CONFIG.md` ke System Instructions

### Step 4: Knowledge Base
**Option A:** Upload files (jika tersedia)
- Upload semua 15 files dari `knowledge-base/`

**Option B:** Reference GitHub URLs
Tambahkan di System Instructions:
```
Knowledge Base URLs:
https://raw.githubusercontent.com/lumakaraid/custom-ai/main/knowledge-base/01_LUMAKARA_BRAND_CHARACTER.md
https://raw.githubusercontent.com/lumakaraid/custom-ai/main/knowledge-base/02_LUMAKARA_SERVICES.md
... (dst untuk semua files)
```

### Step 5: Test
```
Buatkan konten carousel tentang "Manfaat Vitamin C" untuk Gen Z, 5 slide
```

### Step 6: Share
- Save Gem
- Set visibility
- Copy link

---

## 3️⃣ n8n Workflow Setup (10 menit)

### Step 1: Import Workflow
1. Buka n8n instance
2. Menu → Workflows → Import from File
3. Upload `n8n-workflow.json`

### Step 2: Setup OpenAI Credentials
1. Klik node "OpenAI"
2. Add credential
3. Paste OpenAI API Key (dari https://platform.openai.com/api-keys)
4. Save

### Step 3: Activate
- Toggle "Active" di kanan atas
- Copy webhook URL

### Step 4: Test
```bash
curl -X POST https://your-n8n.com/webhook/lumakara \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Sunscreen Importance",
    "audience": "gen_z",
    "slideCount": 5,
    "tone": "casual"
  }'
```

### Expected Response
```json
{
  "success": true,
  "filename": "2026-02-13-sunscreen-importance.php",
  "content": "$carousel_data = array(...);",
  "topic": "Sunscreen Importance",
  "audience": "gen_z",
  "slideCount": 5,
  "generatedAt": "2026-02-13T10:30:00.000Z"
}
```

---

## 4️⃣ GitHub Setup (5 menit)

### Upload Knowledge Base
1. Buka https://github.com/lumakaraid/custom-ai
2. Klik "Add file" → "Upload files"
3. Drag & drop folder `knowledge-base/` (15 files)
4. Commit: "Add knowledge base"

### Files to Upload
- ✅ knowledge-base/ (15 files)
- ✅ CUSTOM-GPT-CONFIG.md
- ✅ n8n-workflow.json
- ✅ README.md
- ✅ SETUP.md (this file)

---

## 📊 Comparison

| Feature | Custom GPT | Gemini Gem | n8n |
|---------|-----------|------------|-----|
| Setup Time | 15 min | 15 min | 10 min |
| Cost | $20/mo + usage | Free tier | API cost only |
| Rate Limit | 40 msg/3h | 60 req/min | Unlimited |
| Best For | Manual use | Manual use | Automation |
| Knowledge Base | Upload files | Upload/URL | GitHub URLs |

---

## 🎯 Usage Examples

### Custom GPT / Gemini Gem
```
Buatkan konten carousel tentang "Double Cleansing untuk Kulit Berminyak" untuk Millennial, 7 slide, tone educational
```

### n8n Webhook
```bash
curl -X POST https://your-n8n.com/webhook/lumakara \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Double Cleansing untuk Kulit Berminyak",
    "audience": "millennial",
    "slideCount": 7,
    "tone": "educational"
  }'
```

### JavaScript Integration
```javascript
const response = await fetch('https://your-n8n.com/webhook/lumakara', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    topic: 'Manfaat Niacinamide',
    audience: 'gen_z',
    slideCount: 5,
    tone: 'casual'
  })
});

const data = await response.json();
console.log(data.content); // PHP array
```

---

## 🔧 Troubleshooting

### Custom GPT tidak baca knowledge base
- Re-upload files
- Check file size (max 512MB total)
- Verify .md format

### Gemini Gem output tidak sesuai
- Strengthen system instructions
- Add more examples
- Reference GitHub URLs explicitly

### n8n workflow error
- Check OpenAI API key
- Verify webhook URL
- Review error logs
- Test with simple prompt first

---

## ✅ Checklist

### Custom GPT
- [ ] Create GPT
- [ ] Upload knowledge base (15 files)
- [ ] Copy instructions
- [ ] Test
- [ ] Publish

### Gemini Gem
- [ ] Create Gem
- [ ] Add system instructions
- [ ] Upload/reference knowledge base
- [ ] Test
- [ ] Share

### n8n
- [ ] Import workflow
- [ ] Add OpenAI credentials
- [ ] Activate
- [ ] Test webhook
- [ ] Integrate to app

### GitHub
- [ ] Upload knowledge base
- [ ] Upload config files
- [ ] Commit & push

---

## 🚀 Next Steps

1. Setup Custom GPT (tercepat untuk testing)
2. Upload knowledge base ke GitHub
3. Setup Gemini Gem (alternative/backup)
4. Import n8n workflow (untuk automation)
5. Test semua platform
6. Choose primary platform
7. Integrate ke production

---

## 📚 Resources

- Custom GPT: https://chat.openai.com/gpts/editor
- Gemini: https://aistudio.google.com/
- OpenAI API Keys: https://platform.openai.com/api-keys
- GitHub Repo: https://github.com/lumakaraid/custom-ai

---

Total setup time: ~45 menit untuk semua platform
Recommended: Start dengan Custom GPT, add n8n untuk automation
