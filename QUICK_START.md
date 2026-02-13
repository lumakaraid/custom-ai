# 🚀 Quick Start - Lumakara Content AI

## Pilih Path Kamu

### Path 1: Custom GPT (Tercepat - 15 menit) ⚡
**Recommended untuk mulai sekarang!**

1. Buka [ChatGPT GPT Builder](https://chat.openai.com/gpts/editor)
2. Upload semua file dari folder `knowledge-base/`
3. Copy-paste instructions dari `CUSTOM-GPT-CONFIG.md`
4. Test dengan: "Buatkan konten tentang Double Cleansing untuk Millennial, 7 slide"
5. Done! ✅

**Pros:** Setup super cepat, langsung bisa pakai
**Cons:** Rate limit 40 msg/3 jam, agak mahal untuk volume tinggi

---

### Path 2: Gemini Gem (Advanced - 1-2 jam) 🔧
**Recommended untuk scale & cost efficiency**

#### Step 1: Deploy MCP Server
```bash
cd mcp-server
npm install

# Deploy ke Railway (gratis)
railway login
railway init
railway up
```

#### Step 2: Setup Gemini Gem
1. Buka [Google AI Studio](https://aistudio.google.com/)
2. Create new Gem: "Lumakara Content Creator"
3. Copy system instructions dari `gemini-gem/SETUP.md`
4. Connect MCP server (URL dari Railway)
5. Test!

**Pros:** Lebih murah, rate limit lebih longgar, flexible
**Cons:** Setup lebih teknis

---

### Path 3: Both! (Best of Both Worlds) 🎯
**Recommended untuk production**

1. Setup Custom GPT dulu (15 menit)
2. Pakai untuk daily content generation
3. Deploy Gemini Gem (1-2 jam)
4. Pakai untuk batch/scheduled generation
5. Integrate dengan n8n untuk automation

**Result:** Redundancy, cost optimized, maximum flexibility

---

## Test Commands

### Custom GPT
```
Buatkan konten carousel tentang "Manfaat Vitamin C untuk Kulit" untuk Gen Z, 5 slide
```

### Gemini Gem
```
Buatkan konten carousel tentang "Double Cleansing untuk Kulit Berminyak" untuk Millennial, 7 slide, tone educational
```

### Expected Output
```php
$carousel_data = array(
    'topic' => 'Double Cleansing untuk Kulit Berminyak',
    'target_audience' => 'Millennial',
    'slides' => array(
        array(
            'slide_number' => 1,
            'title' => 'Double Cleansing 101',
            'content' => '...',
            'visual_prompt' => '...'
        ),
        // ... 6 more slides
    )
);
```

---

## n8n Integration (Optional)

### Setup
1. Import `n8n-workflows/lumakara-content-generator.json`
2. Add OpenAI atau Gemini API credentials
3. Activate workflow

### Test
```bash
curl -X POST https://your-n8n.com/webhook/generate-content \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Sunscreen Importance",
    "audience": "gen_z",
    "slideCount": 5
  }'
```

---

## Git Setup

```bash
# Push ke GitHub
git remote add origin https://github.com/yourusername/lumakara-content-ai.git
git push -u origin main

# Atau GitLab
git remote add origin https://gitlab.com/yourusername/lumakara-content-ai.git
git push -u origin main
```

---

## Troubleshooting

### Custom GPT tidak baca knowledge base
- Re-upload files
- Check file size (max 512MB total)
- Verify format (.md)

### MCP Server error
```bash
cd mcp-server
npm install
npm start
# Check logs
```

### n8n workflow error
- Verify API credentials
- Check webhook URL
- Review error logs

---

## Next Steps

1. ✅ Choose your path (Custom GPT / Gemini Gem / Both)
2. ✅ Setup & test
3. ✅ Generate 5-10 test content
4. ✅ Review quality
5. ⬜ Train team
6. ⬜ Setup automation (n8n)
7. ⬜ Go live!

---

## Support Files

- `DEPLOYMENT.md` - Full deployment guide
- `INTEGRATION_COMPARISON.md` - Custom GPT vs Gemini Gem
- `custom-gpt/SETUP.md` - Detailed Custom GPT setup
- `gemini-gem/SETUP.md` - Detailed Gemini Gem setup
- `n8n-workflows/README.md` - n8n workflow guide

---

## Questions?

Check documentation atau test langsung! Semua sudah ready to use.

**Recommendation:** Start dengan Custom GPT hari ini, add Gemini Gem minggu depan untuk optimize cost & scale.
