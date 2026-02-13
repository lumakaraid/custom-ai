# Lumakara Content AI - Super Simple

Knowledge base untuk generate konten carousel Instagram Lumakara menggunakan AI.

## ⚡ Super Simple Setup

**2 cara pakai, pilih salah satu:**

### 1. Manual (Paling Simple) - 10 menit
Upload knowledge base ke Custom GPT atau Gemini Gem, langsung pakai!

[Setup Guide →](SIMPLE_SETUP.md)

### 2. Semi-Auto dengan n8n - 5 menit  
n8n sebagai webhook gateway (NO AI API required!)

[n8n Gateway Setup →](n8n/SIMPLE_GATEWAY_SETUP.md)

## 📁 Structure

```
├── knowledge-base/          # 15 files knowledge base ✅
│   ├── 01_LUMAKARA_BRAND_CHARACTER.md
│   ├── 02_LUMAKARA_SERVICES.md
│   └── ... (13 more files)
│
├── n8n/                     # Optional: Webhook gateway
│   ├── workflow-simple-gateway.json
│   └── SIMPLE_GATEWAY_SETUP.md
│
├── CUSTOM-GPT-CONFIG.md    # Instructions untuk AI ✅
├── SIMPLE_SETUP.md         # Setup guide ✅
└── README.md               # This file
```

## 🚀 Quick Start

### Option 1: Custom GPT (Recommended)

1. Buka: https://chat.openai.com/gpts/editor
2. Upload 15 files dari `knowledge-base/`
3. Copy `CUSTOM-GPT-CONFIG.md` ke Instructions
4. Test & publish
5. Done!

**Cost:** $20/month (ChatGPT Plus)

### Option 2: Gemini Gem (Free Alternative)

1. Buka: https://aistudio.google.com/
2. Create Gem
3. Copy `CUSTOM-GPT-CONFIG.md` ke System Instructions
4. Upload files atau reference GitHub URLs
5. Done!

**Cost:** FREE tier (60 req/min)

### Option 3: n8n Gateway (Optional)

Kalau mau webhook untuk integrate ke app:

1. Import `n8n/workflow-simple-gateway.json`
2. Activate (NO API key needed!)
3. Call webhook → Get formatted prompt
4. Paste ke Custom GPT/Gemini

**Cost:** Free (self-hosted) atau $20/mo (cloud)

## 📝 Usage

### Custom GPT / Gemini Gem
```
Buatkan konten carousel tentang "Double Cleansing untuk Kulit Berminyak" untuk Millennial, 7 slide, tone educational
```

### n8n Webhook
```bash
curl -X POST https://your-n8n.com/webhook/lumakara-gateway \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Double Cleansing untuk Kulit Berminyak",
    "audience": "millennial",
    "slideCount": 7,
    "tone": "educational"
  }'
```

Response: Formatted prompt → Copy → Paste ke Custom GPT/Gemini

## 📤 Output Format

```php
$carousel_data = array(
    'topic' => 'Double Cleansing untuk Kulit Berminyak',
    'target_audience' => 'Millennial',
    'slides' => array(
        array(
            'slide_number' => 1,
            'title' => '...',
            'content' => '...',
            'visual_prompt' => '...'
        ),
        // ... more slides
    )
);
```

Siap import ke WordPress!

## 📚 Knowledge Base

15 structured files:
1. Brand Character & Voice
2. Services & Products
3. Content Topics Library
4. Indonesian Calendar 2026
5. Content Strategy
6. Target Audience: Gen Z
7. Target Audience: Millennial
8. Target Audience: Gen X
9. Visual Prompt Guide
10. Brand Voice Examples
11. Content Structure Guide
12. Character Count Rules
13. PHP Output Format
14. Import Instructions
15. Quality Checklist

## 💰 Cost Summary

| Option | Setup Time | Monthly Cost | Best For |
|--------|-----------|--------------|----------|
| Custom GPT | 10 min | $20 | Daily manual use |
| Gemini Gem | 10 min | FREE | Cost-conscious |
| n8n Gateway | 5 min | $0-20 | App integration |

## ✅ Benefits

- ❌ NO OpenAI API key required
- ❌ NO token management
- ❌ NO complex setup
- ✅ Upload knowledge base langsung
- ✅ Generate konten instant
- ✅ Consistent brand voice
- ✅ PHP array output ready

## 🎯 Recommendation

**Start with Custom GPT:**
- Paling mudah
- Reliable
- Good quality
- Familiar interface

**Add Gemini Gem as backup:**
- Free tier
- Fast
- Good alternative

**Use n8n if needed:**
- App integration
- Webhook automation
- Batch processing

## 📞 Support

- **GitHub**: https://github.com/lumakaraid/custom-ai
- **Knowledge Base**: `knowledge-base/` folder
- **Setup Guide**: `SIMPLE_SETUP.md`

## 📄 License

Proprietary - Lumakara

---

**Ready to generate content?** Choose your option and start in 5-10 minutes! 🎉
