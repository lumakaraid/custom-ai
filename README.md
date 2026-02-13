# Lumakara Content AI - Simple Setup

Knowledge base untuk generate konten carousel Instagram Lumakara menggunakan AI.

## 📁 Structure

```
├── knowledge-base/          # 15 files knowledge base
├── CUSTOM-GPT-CONFIG.md    # Instructions untuk Custom GPT & Gemini
└── n8n-workflow.json       # n8n workflow (import ready)
```

## 🚀 Quick Setup

### 1. Custom GPT (15 menit)
1. Buka [ChatGPT GPT Builder](https://chat.openai.com/gpts/editor)
2. Upload semua files dari `knowledge-base/`
3. Copy-paste `CUSTOM-GPT-CONFIG.md` ke Instructions
4. Test & publish

### 2. Gemini Gem (15 menit)
1. Buka [Google AI Studio](https://aistudio.google.com/)
2. Create new Gem
3. Copy-paste `CUSTOM-GPT-CONFIG.md` ke System Instructions
4. Upload files dari `knowledge-base/` (atau reference GitHub URL)
5. Test & share

### 3. n8n Workflow (10 menit)
1. Import `n8n-workflow.json` ke n8n
2. Add OpenAI atau Gemini API credentials
3. Activate workflow
4. Test via webhook

## 📝 Usage

### Custom GPT / Gemini Gem
```
Buatkan konten carousel tentang "Double Cleansing" untuk Millennial, 7 slide
```

### n8n Webhook
```bash
curl -X POST https://your-n8n.com/webhook/lumakara \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Double Cleansing",
    "audience": "millennial",
    "slideCount": 7
  }'
```

## 🎯 Output Format

PHP array siap import ke WordPress:
```php
$carousel_data = array(
    'topic' => 'Double Cleansing',
    'target_audience' => 'Millennial',
    'slides' => array(...)
);
```

## 📚 Knowledge Base Files

1. Brand Character & Voice
2. Services & Products
3. Content Topics Library
4. Indonesian Calendar 2026
5. Content Strategy
6. Target Audiences (Gen Z, Millennial, Gen X)
7. Visual Prompt Guide
8. Brand Voice Examples
9. Content Structure Guide
10. Character Count Rules
11. PHP Output Format
12. Import Instructions
13. Quality Checklist

## 🔗 Links

- GitHub: https://github.com/lumakaraid/custom-ai
- Knowledge Base: https://raw.githubusercontent.com/lumakaraid/custom-ai/main/knowledge-base/

## 📄 License

Proprietary - Lumakara
