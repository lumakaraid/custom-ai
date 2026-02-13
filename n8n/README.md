# n8n Workflow - Lumakara Content Generator

## Import Workflow

1. Buka n8n instance
2. Menu → Workflows → Import from File
3. Upload `workflow.json`
4. Add OpenAI API credentials
5. Activate workflow

## Test Webhook

```bash
curl -X POST https://your-n8n.com/webhook/lumakara \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Double Cleansing",
    "audience": "millennial",
    "slideCount": 7,
    "tone": "casual"
  }'
```

## Response Format

```json
{
  "success": true,
  "filename": "2026-02-13-double-cleansing.php",
  "content": "$carousel_data = array(...);",
  "topic": "Double Cleansing",
  "audience": "millennial",
  "slideCount": 7,
  "generatedAt": "2026-02-13T10:30:00.000Z"
}
```

## Input Parameters

| Parameter | Type | Required | Default | Options |
|-----------|------|----------|---------|---------|
| topic | string | ✅ Yes | - | Any topic |
| audience | string | ❌ No | millennial | gen_z, millennial, gen_x |
| slideCount | number | ❌ No | 7 | 3-10 |
| tone | string | ❌ No | casual | casual, educational, inspirational |

## How It Works

1. **Webhook** receives request
2. **Prepare Prompt** builds prompt with knowledge base context from GitHub
3. **OpenAI** generates content using GPT-4
4. **Process Response** formats output as JSON
5. **Respond** returns result to caller

## Knowledge Base

Workflow references knowledge base from GitHub:
```
https://raw.githubusercontent.com/lumakaraid/custom-ai/main/knowledge-base/
```

All 15 knowledge base files are automatically referenced in the prompt.

## Troubleshooting

### OpenAI API Error
- Check API key validity
- Verify API quota
- Review error message in execution log

### Webhook Not Found
- Ensure workflow is Active
- Check webhook URL in node settings
- Test with "Test Workflow" button

### Output Format Incorrect
- Review knowledge base files on GitHub
- Check CUSTOM-GPT-CONFIG.md
- Verify prompt construction in "Prepare Prompt" node

## Customization

### Change AI Model
Edit "OpenAI" node → change model to:
- `gpt-4-turbo-preview` (current)
- `gpt-4`
- `gpt-3.5-turbo` (cheaper, faster)

### Add File Save
After "Process Response" node:
1. Add "Write Binary File" node
2. File Name: `={{ $json.filename }}`
3. Data: `={{ $json.content }}`

### Add Database Save
After "Process Response" node:
1. Add database node (MySQL, PostgreSQL, MongoDB)
2. Map fields from `$json`

### Add Notification
After "Respond" node:
1. Add Slack/Discord/Email node
2. Send notification on success/error
