# Lumakara Content AI - Simple Setup

Knowledge base untuk generate konten carousel Instagram Lumakara menggunakan AI.

## ⚡ Super Simple Setup (NO API/Token Required!)

**Pakai Custom GPT atau Gemini Gem langsung - 10 menit setup!**

[Quick Start →](SIMPLE_SETUP.md)

## 🎯 What's This?

Generate konten carousel Instagram dengan:
- ✅ Brand voice Lumakara yang konsisten
- ✅ Target audience spesifik (Gen Z, Millennial, Gen X)
- ✅ PHP array format siap import ke WordPress
- ✅ Visual prompts untuk setiap slide
- ✅ Character count sesuai rules

## 🚀 Quick Links

### Live Deployments
- **GitHub**: https://github.com/lumakaraid/custom-ai
- **Vercel API**: https://custom-ai-two.vercel.app
- **API Health**: https://custom-ai-two.vercel.app/api/health

### Setup Guides
- **n8n Quick Start**: [n8n/QUICK_START.md](n8n/QUICK_START.md) - 10 menit
- **n8n Full Guide**: [n8n/IMPORT_GUIDE.md](n8n/IMPORT_GUIDE.md) - Detailed
- **Custom GPT**: [docs/SETUP.md](docs/SETUP.md#custom-gpt) - 15 menit
- **Gemini Gem**: [docs/SETUP.md](docs/SETUP.md#gemini-gem) - 15 menit

### Documentation
- **Deployment Complete**: [docs/DEPLOYMENT_COMPLETE.md](docs/DEPLOYMENT_COMPLETE.md)
- **Vercel Deploy**: [docs/VERCEL_DEPLOY.md](docs/VERCEL_DEPLOY.md)
- **n8n Setup**: [docs/N8N_SETUP.md](docs/N8N_SETUP.md)

## 📁 Structure

```
├── knowledge-base/          # 15 files knowledge base
│   ├── 01_LUMAKARA_BRAND_CHARACTER.md
│   ├── 02_LUMAKARA_SERVICES.md
│   └── ... (13 more files)
│
├── n8n/                     # n8n Automation
│   ├── workflow.json       # Import-ready workflow
│   ├── QUICK_START.md      # 10 min setup
│   ├── IMPORT_GUIDE.md     # Detailed guide
│   └── README.md           # n8n docs
│
├── api/                     # Vercel API
│   └── index.js            # Serverless function
│
├── docs/                    # Documentation
│   ├── SETUP.md            # Complete setup guide
│   ├── N8N_SETUP.md        # n8n detailed
│   ├── VERCEL_DEPLOY.md    # Vercel guide
│   └── DEPLOYMENT_COMPLETE.md
│
├── CUSTOM-GPT-CONFIG.md    # AI Instructions
├── vercel.json             # Vercel config
└── README.md               # This file
```

## 🎯 Choose Your Platform

### 1. n8n (Automation) - 10 menit ⚡
**Best for:** Automation, webhooks, integrations

```bash
# Quick start
1. Download: n8n/workflow.json
2. Import ke n8n
3. Add OpenAI API key
4. Activate & test
```

[Quick Start Guide →](n8n/QUICK_START.md)

### 2. Custom GPT (Manual) - 15 menit 🤖
**Best for:** Manual content generation, team use

```bash
1. Buka ChatGPT GPT Builder
2. Upload knowledge-base/ files
3. Copy CUSTOM-GPT-CONFIG.md
4. Test & publish
```

[Setup Guide →](docs/SETUP.md#custom-gpt)

### 3. Gemini Gem (Alternative) - 15 menit 💎
**Best for:** Google ecosystem, cost efficiency

```bash
1. Buka Google AI Studio
2. Create Gem
3. Copy CUSTOM-GPT-CONFIG.md
4. Reference GitHub URLs
```

[Setup Guide →](docs/SETUP.md#gemini-gem)

## 📝 Usage Examples

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

### Custom GPT / Gemini Gem
```
Buatkan konten carousel tentang "Manfaat Vitamin C untuk Kulit" untuk Gen Z, 5 slide, tone casual
```

### Response Format
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

## 🔗 API Endpoints

### Vercel API (Live)
```bash
# Health check
GET https://custom-ai-two.vercel.app/api/health

# List knowledge files
GET https://custom-ai-two.vercel.app/api/knowledge

# Get all knowledge base
GET https://custom-ai-two.vercel.app/api/knowledge/all

# Get specific file
GET https://custom-ai-two.vercel.app/api/knowledge/01_LUMAKARA_BRAND_CHARACTER.md
```

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

## 💰 Cost Estimate

### n8n + OpenAI
- OpenAI API: ~$0.01-0.03 per generation
- 100 content/month: ~$1-3
- n8n: Free (self-hosted) atau $20/mo (cloud)

### Custom GPT
- ChatGPT Plus: $20/month
- Unlimited generations (rate limited)

### Gemini Gem
- Free tier: 60 requests/minute
- Paid: Very affordable

### Infrastructure
- GitHub: Free
- Vercel: Free (100GB bandwidth)

## 🚀 Getting Started

### Fastest: n8n (10 menit)
1. [Download workflow](https://github.com/lumakaraid/custom-ai/blob/main/n8n/workflow.json)
2. Import ke n8n
3. Add OpenAI key
4. Done!

[Start Now →](n8n/QUICK_START.md)

### Easiest: Custom GPT (15 menit)
1. Upload knowledge base files
2. Copy config
3. Test
4. Use!

[Start Now →](docs/SETUP.md)

## 📞 Support

- **Issues**: GitHub Issues
- **Docs**: `docs/` folder
- **API Status**: https://custom-ai-two.vercel.app/api/health
- **Knowledge Base**: `knowledge-base/` folder

## 📄 License

Proprietary - Lumakara

---

**Ready to generate content?** Choose your platform and start in 10-15 minutes! 🎉
