# Setup Custom GPT untuk Lumakara

## 1. Buat Custom GPT

1. Buka [ChatGPT](https://chat.openai.com/)
2. Sidebar → Explore GPTs → Create
3. Atau langsung ke: https://chat.openai.com/gpts/editor

## 2. Configure GPT

### Name
```
Lumakara Content Creator
```

### Description
```
AI assistant untuk generate konten carousel Instagram Lumakara - skincare lokal Indonesia. Output format PHP array siap import ke WordPress.
```

### Instructions

Copy paste file `CUSTOM-GPT-CONFIG.md` yang sudah ada di root folder ini.

## 3. Upload Knowledge Files

Di section "Knowledge", upload semua file dari folder `knowledge-base/`:

1. 01_LUMAKARA_BRAND_CHARACTER.md
2. 02_LUMAKARA_SERVICES.md
3. 03_CONTENT_TOPICS_LIBRARY.md
4. 04_INDONESIAN_CALENDAR_2026.md
5. 05_CONTENT_STRATEGY.md
6. 06_TARGET_AUDIENCE_GEN_Z.md
7. 07_TARGET_AUDIENCE_MILLENNIAL.md
8. 08_TARGET_AUDIENCE_GEN_X.md
9. 09_VISUAL_PROMPT_GUIDE.md
10. 10_BRAND_VOICE_EXAMPLES.md
11. 11_CONTENT_STRUCTURE_GUIDE.md
12. 12_CHARACTER_COUNT_RULES.md
13. 13_PHP_OUTPUT_FORMAT.md
14. 14_IMPORT_INSTRUCTIONS.md
15. 15_QUALITY_CHECKLIST.md

**Note:** Max 20 files, total 512MB. Kalau over limit, combine beberapa file.

## 4. Capabilities

Enable:
- ✅ Web Browsing (untuk research trend terkini)
- ✅ DALL-E Image Generation (untuk preview visual)
- ❌ Code Interpreter (tidak perlu)

## 5. Conversation Starters

Tambahkan starter prompts:

```
1. "Buatkan konten carousel tentang [topik] untuk [Gen Z/Millennial/Gen X], [jumlah] slide"

2. "Generate konten untuk tanggal [DD/MM/YYYY] sesuai kalender Indonesia"

3. "Buatkan konten promosi [produk Lumakara] dengan tone [casual/educational/inspirational]"

4. "Review dan improve konten carousel ini: [paste konten]"
```

## 6. Actions (Optional - untuk MCP Integration)

Kalau mau connect ke MCP server:

### Schema
```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "Lumakara Knowledge Base API",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://your-mcp-server.com"
    }
  ],
  "paths": {
    "/knowledge/{file}": {
      "get": {
        "operationId": "getKnowledge",
        "summary": "Get knowledge base file",
        "parameters": [
          {
            "name": "file",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    }
  }
}
```

## 7. Test Custom GPT

Test dengan:
```
Buatkan konten carousel tentang "Double Cleansing untuk Kulit Berminyak" untuk Millennial, 7 slide
```

Expected output:
- PHP array format
- Sesuai brand voice
- Character count correct
- Visual prompts included
- Ready to import

## 8. Publish

1. Klik "Save"
2. Choose visibility:
   - **Only me**: Private testing
   - **Anyone with link**: Share dengan team
   - **Public**: Publish ke GPT Store

3. Copy link dan share

## 9. Integration dengan n8n

### Webhook Trigger
```
1. n8n: Webhook node (trigger)
2. HTTP Request: Call Custom GPT API
3. Process response
4. Save to database/file
```

### API Call
```javascript
// Di n8n HTTP Request node
{
  "method": "POST",
  "url": "https://api.openai.com/v1/chat/completions",
  "headers": {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  "body": {
    "model": "gpt-4-turbo",
    "messages": [
      {
        "role": "user",
        "content": "Generate content..."
      }
    ]
  }
}
```

## 10. Maintenance

### Update Knowledge Base
1. Edit file di `knowledge-base/`
2. Re-upload ke Custom GPT
3. Test perubahan

### Monitor Usage
- Check usage di OpenAI dashboard
- Review conversation logs
- Collect feedback dari team

## Tips

- Custom GPT lebih mudah setup (no coding)
- Knowledge files auto-indexed oleh OpenAI
- Bisa combine dengan DALL-E untuk visual preview
- Rate limit: 40 messages/3 hours (GPT-4)

## Troubleshooting

**GPT tidak baca knowledge files:**
- Pastikan files ter-upload semua
- Check file format (harus .md atau .txt)
- Try re-upload

**Output format salah:**
- Review instructions
- Add more examples
- Specify format di prompt

**Brand voice tidak konsisten:**
- Strengthen instructions
- Add more examples di knowledge files
- Use conversation starters yang spesifik
