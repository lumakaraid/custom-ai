# n8n Setup Guide

## Prerequisites

- n8n instance (cloud atau self-hosted)
- OpenAI API key
- GitHub repo deployed (✅ Done!)
- Vercel API deployed (optional)

## Step 1: Import Workflow (5 menit)

### Import File
1. Buka n8n instance
2. Menu (☰) → Workflows
3. Klik "Import from File"
4. Upload: `n8n/workflow.json` dari repo
5. Klik "Import"

### Workflow Overview
Workflow terdiri dari 5 nodes:
1. **Webhook** - Receive requests
2. **Prepare Prompt** - Build prompt dengan knowledge base context
3. **OpenAI** - Generate content dengan GPT-4
4. **Process Response** - Format output
5. **Respond** - Return JSON result

## Step 2: Setup OpenAI Credentials (2 menit)

### Get API Key
1. Buka: https://platform.openai.com/api-keys
2. Create new secret key
3. Copy key (hanya muncul sekali!)

### Add to n8n
1. Klik node "OpenAI" di workflow
2. Klik "Create New Credential"
3. Paste API key
4. Test connection
5. Save

## Step 3: Activate Workflow (1 menit)

1. Klik toggle "Active" di kanan atas
2. Workflow sekarang running!
3. Copy webhook URL dari node "Webhook"

## Step 4: Test Workflow (2 menit)

### Via cURL
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

### Via Postman
1. Method: POST
2. URL: `https://your-n8n.com/webhook/lumakara`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
```json
{
  "topic": "Manfaat Vitamin C untuk Kulit",
  "audience": "gen_z",
  "slideCount": 5,
  "tone": "casual"
}
```

### Expected Response
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

## Input Parameters

| Parameter | Type | Required | Default | Options |
|-----------|------|----------|---------|---------|
| topic | string | ✅ Yes | - | Any skincare topic |
| audience | string | ❌ No | millennial | gen_z, millennial, gen_x |
| slideCount | number | ❌ No | 7 | 3-10 slides |
| tone | string | ❌ No | casual | casual, educational, inspirational |

## Advanced: Use Vercel API (Optional)

Jika sudah deploy ke Vercel, update node "Prepare Prompt":

```javascript
// Fetch knowledge base dari Vercel API
const vercelUrl = 'https://custom-ai-xxx.vercel.app/api/knowledge/all';
const kbResponse = await fetch(vercelUrl);
const kbData = await kbResponse.json();

// Use in prompt
const systemPrompt = `Knowledge Base: ${kbData.baseUrl}...`;
```

## Customization

### Change AI Model
Edit node "OpenAI":
- `gpt-4-turbo-preview` (current, best quality)
- `gpt-4` (slower, more expensive)
- `gpt-3.5-turbo` (faster, cheaper)

### Add File Save
After "Process Response":
1. Add node "Write Binary File"
2. File Name: `={{ $json.filename }}`
3. Data: `={{ $json.content }}`
4. Path: `/path/to/save/`

### Add Database Save
After "Process Response":
1. Add database node (MySQL, PostgreSQL, MongoDB)
2. Map fields:
   - `topic` → `$json.topic`
   - `content` → `$json.content`
   - `created_at` → `$json.generatedAt`

### Add Notification
After "Respond":
1. Add Slack/Discord/Email node
2. Message: "Content generated: {{ $json.topic }}"
3. Send on success

### Schedule Generation
1. Replace "Webhook" with "Cron" node
2. Schedule: `0 9 * * 1` (Every Monday 9 AM)
3. Add "Set" node untuk define topics
4. Loop through topics

## Troubleshooting

### OpenAI API Error
- Check API key validity
- Verify quota: https://platform.openai.com/usage
- Review error in execution log

### Webhook Not Found
- Ensure workflow is "Active"
- Check webhook URL in node settings
- Test with "Test Workflow" button

### Output Format Wrong
- Review knowledge base on GitHub
- Check CUSTOM-GPT-CONFIG.md
- Verify prompt in "Prepare Prompt" node

### Timeout Error
- Increase timeout in OpenAI node settings
- Reduce slideCount in request
- Use faster model (gpt-3.5-turbo)

## Integration Examples

### WordPress Auto-Post
```javascript
// After "Process Response"
// Add HTTP Request node
{
  "method": "POST",
  "url": "https://your-site.com/wp-json/wp/v2/posts",
  "headers": {
    "Authorization": "Bearer YOUR_WP_TOKEN"
  },
  "body": {
    "title": $json.topic,
    "content": $json.content,
    "status": "draft"
  }
}
```

### Slack Notification
```javascript
// Add Slack node
{
  "channel": "#content-team",
  "text": `New content generated: ${$json.topic}`,
  "attachments": [{
    "title": $json.filename,
    "text": `Audience: ${$json.audience} | Slides: ${$json.slideCount}`
  }]
}
```

### Google Sheets Log
```javascript
// Add Google Sheets node
{
  "operation": "append",
  "sheetId": "YOUR_SHEET_ID",
  "range": "A:E",
  "values": [[
    $json.generatedAt,
    $json.topic,
    $json.audience,
    $json.slideCount,
    $json.filename
  ]]
}
```

## Monitoring

### Check Executions
1. n8n → Executions
2. Filter by workflow
3. Review success/error rate

### Setup Alerts
1. Add "Error Trigger" node
2. Connect to notification node
3. Get alerted on failures

## Cost Estimate

### OpenAI API (GPT-4 Turbo)
- ~$0.01-0.03 per content generation
- 100 content/month = ~$1-3/month

### n8n
- Self-hosted: Free
- Cloud: $20/month (unlimited workflows)

### Vercel API
- Free tier: 100GB bandwidth
- More than enough untuk project ini

## Next Steps

1. ✅ Import workflow
2. ✅ Setup credentials
3. ✅ Test generation
4. ⬜ Integrate to your app
5. ⬜ Setup monitoring
6. ⬜ Scale!
