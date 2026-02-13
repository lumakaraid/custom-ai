# Setup Gemini Gem untuk Lumakara

## 1. Buat Gemini Gem

1. Buka [Google AI Studio](https://aistudio.google.com/)
2. Klik "Create new Gem"
3. Nama: **Lumakara Content Creator**

## 2. System Instructions

Copy paste ini ke System Instructions:

```
Kamu adalah Lumakara Content Creator AI, spesialis membuat konten carousel Instagram untuk Lumakara - brand skincare lokal Indonesia yang fokus pada Gen Z, Millennial, dan Gen X.

# KNOWLEDGE BASE ACCESS
Kamu punya akses ke knowledge base lengkap via MCP server. Gunakan tools berikut:
- get_brand_character: Brand voice & character
- get_services: Produk & layanan
- get_content_topics: Library topik konten
- get_calendar: Kalender Indonesia 2026
- get_content_strategy: Strategi konten
- get_target_audience: Info audience (gen_z/millennial/gen_x)
- get_visual_guide: Panduan visual
- get_all_knowledge: Semua knowledge base
- search_knowledge: Cari di knowledge base

# CARA KERJA
1. Selalu cek knowledge base dulu sebelum generate konten
2. Sesuaikan tone dengan target audience
3. Follow brand voice Lumakara
4. Generate dalam format PHP array sesuai 13_PHP_OUTPUT_FORMAT.md
5. Pastikan character count sesuai 12_CHARACTER_COUNT_RULES.md

# OUTPUT FORMAT
Selalu output dalam format PHP array yang bisa langsung di-import ke WordPress.

# QUALITY CHECK
Sebelum output final, cek:
- Brand voice consistency
- Target audience fit
- Character count limits
- Visual prompt quality
- PHP syntax correctness
```

## 3. Connect MCP Server

### Option A: Local Development
```bash
cd mcp-server
npm install
npm start
```

Kemudian di Gemini Gem settings:
- MCP Server URL: `http://localhost:3000`

### Option B: Deploy ke Cloud

Deploy MCP server ke:
- Google Cloud Run
- Railway
- Render
- Vercel

Kemudian connect URL production ke Gemini Gem.

## 4. Test Gem

Test dengan prompt:
```
Buatkan konten carousel tentang "Manfaat Vitamin C untuk kulit" untuk Gen Z, 5 slide
```

Gem harus:
1. Query knowledge base
2. Generate konten sesuai brand voice
3. Output PHP array format
4. Include visual prompts

## 5. Share Gem

Setelah test OK:
1. Klik "Share"
2. Set visibility: Private/Public
3. Copy link
4. Share ke team

## 6. Integration dengan n8n

Di n8n workflow:
1. Gunakan HTTP Request node
2. Method: POST
3. URL: Gemini API endpoint
4. Headers: Authorization dengan API key
5. Body: Prompt + context

## Tips

- Gem akan lebih akurat kalau MCP server running
- Update knowledge base = auto update Gem
- Monitor usage di AI Studio dashboard
- Set rate limits kalau perlu

## Troubleshooting

**Gem tidak akses knowledge base:**
- Cek MCP server running
- Verify API key
- Check network/firewall

**Output tidak sesuai format:**
- Review 13_PHP_OUTPUT_FORMAT.md
- Update system instructions
- Add more examples

**Brand voice tidak konsisten:**
- Review 01_LUMAKARA_BRAND_CHARACTER.md
- Add more examples di 10_BRAND_VOICE_EXAMPLES.md
