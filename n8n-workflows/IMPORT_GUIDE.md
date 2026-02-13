# Import n8n Workflow - Super Simple

## File untuk Import

**File:** `lumakara-simple.json`

Ini workflow yang sudah disederhanakan:
- Webhook trigger
- Call OpenAI GPT-4
- Process response
- Return JSON

## Step-by-Step Import

### 1. Buka n8n
Login ke n8n instance kamu

### 2. Import Workflow
1. Klik menu (☰) di kiri atas
2. Pilih "Workflows"
3. Klik "Import from File"
4. Upload file: `lumakara-simple.json`
5. Klik "Import"

### 3. Setup OpenAI Credentials
1. Klik node "OpenAI"
2. Klik "Create New Credential"
3. Masukkan OpenAI API Key
   - Get key di: https://platform.openai.com/api-keys
4. Save

### 4. Activate Workflow
1. Klik toggle "Active" di kanan atas
2. Workflow sekarang running!

### 5. Get Webhook URL
1. Klik node "Webhook"
2. Copy "Production URL"
3. URL format: `https://your-n8n.com/webhook/lumakara-generate`

## Test Workflow

### Via cURL
```bash
curl -X POST https://your-n8n.com/webhook/lumakara-generate \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Manfaat Vitamin C untuk Kulit",
    "audience": "gen_z",
    "slideCount": 5,
    "tone": "casual"
  }'
```

### Via Postman
1. Method: POST
2. URL: `https://your-n8n.com/webhook/lumakara-generate`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
```json
{
  "topic": "Double Cleansing untuk Kulit Berminyak",
  "audience": "millennial",
  "slideCount": 7,
  "tone": "educational"
}
```

### Via JavaScript
```javascript
fetch('https://your-n8n.com/webhook/lumakara-generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    topic: 'Sunscreen Importance',
    audience: 'gen_x',
    slideCount: 5,
    tone: 'inspirational'
  })
})
.then(r => r.json())
.then(data => console.log(data));
```

## Response Format

```json
{
  "success": true,
  "filename": "2026-02-13-manfaat-vitamin-c-untuk-kulit.php",
  "content": "$carousel_data = array(...);",
  "topic": "Manfaat Vitamin C untuk Kulit",
  "audience": "gen_z",
  "slideCount": 5,
  "generatedAt": "2026-02-13T10:30:00.000Z",
  "downloadUrl": "https://your-domain.com/downloads/2026-02-13-manfaat-vitamin-c-untuk-kulit.php"
}
```

## Input Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| topic | string | ✅ Yes | - | Topik konten carousel |
| audience | string | ❌ No | millennial | Target audience: gen_z, millennial, gen_x |
| slideCount | number | ❌ No | 7 | Jumlah slide (3-10) |
| tone | string | ❌ No | casual | Tone: casual, educational, inspirational |

## Cara Kerja

1. **Webhook** menerima request dengan topic, audience, dll
2. **OpenAI** generate konten dengan GPT-4
   - System prompt include link ke knowledge base di GitHub
   - User prompt dengan detail request
3. **Process Response** format output jadi JSON
4. **Respond** return JSON ke caller

## Knowledge Base

Workflow ini baca knowledge base dari GitHub:
```
https://raw.githubusercontent.com/lumakaraid/custom-ai/main/knowledge-base/
```

Setelah push ke GitHub, semua knowledge base otomatis accessible via URL ini.

## Troubleshooting

### Error: OpenAI API Key invalid
- Check API key di: https://platform.openai.com/api-keys
- Pastikan key masih active
- Re-create credential di n8n

### Error: Webhook not found
- Pastikan workflow sudah "Active"
- Check webhook URL di node "Webhook"
- Test dengan "Test Workflow" button

### Output format salah
- Check system prompt di node "OpenAI"
- Pastikan knowledge base sudah di GitHub
- Review CUSTOM-GPT-CONFIG.md

## Advanced: Add File Save

Kalau mau save output ke file, tambah node:

1. Setelah "Process Response"
2. Add node "Write Binary File"
3. Configure:
   - File Name: `={{ $json.filename }}`
   - Data: `={{ $json.content }}`
   - Path: `/path/to/save/`

## Next Steps

1. ✅ Import workflow
2. ✅ Setup OpenAI credentials
3. ✅ Activate workflow
4. ✅ Test dengan sample request
5. ⬜ Integrate ke aplikasi kamu
6. ⬜ Setup scheduled generation (optional)

## Support

Issues? Check:
- n8n logs
- OpenAI API status
- GitHub repo accessibility
- Webhook URL correctness

That's it! Super simple, tinggal import dan pakai.
