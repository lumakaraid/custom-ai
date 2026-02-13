# n8n Workflows untuk Lumakara

## Workflow: Content Generator

### Import ke n8n

1. Buka n8n instance kamu
2. Klik "Import from File"
3. Upload `lumakara-content-generator.json`
4. Activate workflow

### Setup Credentials

Di n8n, setup:
- OpenAI API credentials (untuk Custom GPT)
- Atau Google AI credentials (untuk Gemini)

### Test Workflow

Kirim POST request ke webhook URL:

```bash
curl -X POST https://your-n8n-instance.com/webhook/generate-content \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Double Cleansing untuk Kulit Berminyak",
    "audience": "millennial",
    "slideCount": 7,
    "tone": "educational"
  }'
```

### Response

```json
{
  "success": true,
  "filename": "2026-02-13-double-cleansing-untuk-kulit-berminyak.php",
  "topic": "Double Cleansing untuk Kulit Berminyak",
  "audience": "millennial",
  "generatedAt": "2026-02-13T10:30:00.000Z",
  "message": "Content generated successfully"
}
```

## Workflow Nodes

1. **Webhook Trigger**: Terima request
2. **Prepare Prompt**: Build prompt untuk AI
3. **Call Custom GPT**: Generate konten
4. **Process Response**: Parse PHP array
5. **Save to File**: Simpan ke file
6. **Respond to Webhook**: Return response

## Customization

### Tambah Validation
Tambah node setelah Webhook Trigger untuk validate input.

### Tambah Database
Ganti "Save to File" dengan database node (MySQL, PostgreSQL, MongoDB).

### Tambah Notification
Tambah node untuk kirim notif ke Slack/Discord/Email setelah generate.

### Schedule Generation
Tambah Cron Trigger untuk auto-generate konten sesuai calendar.

## Advanced: Batch Generation

Buat workflow baru untuk generate multiple content sekaligus:

```json
{
  "topics": [
    "Double Cleansing",
    "Vitamin C Benefits",
    "Sunscreen Importance"
  ],
  "audience": "gen_z",
  "slideCount": 5
}
```

Loop through topics dan generate satu per satu.

## Integration dengan WordPress

Tambah node untuk auto-import ke WordPress:

1. HTTP Request ke WordPress REST API
2. Endpoint: `/wp-json/wp/v2/posts`
3. Method: POST
4. Body: Generated content

## Monitoring

Setup error handling:
- Catch errors di setiap node
- Log ke file/database
- Send alert kalau ada error
