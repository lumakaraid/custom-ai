# Import n8n Workflow - Quick Guide

## ✅ Prerequisites

- n8n instance (cloud atau self-hosted)
- OpenAI API key ([Get here](https://platform.openai.com/api-keys))
- 10 menit waktu

## 📥 Step 1: Download Workflow (1 menit)

### Option A: From GitHub
1. Buka: https://github.com/lumakaraid/custom-ai/blob/main/n8n/workflow.json
2. Klik "Raw"
3. Save as `workflow.json`

### Option B: From Local Repo
File ada di: `n8n/workflow.json`

## 📤 Step 2: Import ke n8n (2 menit)

1. **Buka n8n instance**
   - Cloud: https://app.n8n.cloud
   - Self-hosted: http://localhost:5678

2. **Import workflow**
   - Klik menu (☰) di kiri atas
   - Workflows → Import from File
   - Upload `workflow.json`
   - Klik "Import"

3. **Workflow imported!**
   - Nama: "Lumakara Content Generator"
   - 5 nodes: Webhook → Prepare → OpenAI → Process → Respond

## 🔑 Step 3: Setup OpenAI Credentials (3 menit)

### Get API Key
1. Buka: https://platform.openai.com/api-keys
2. Klik "Create new secret key"
3. Name: "n8n Lumakara"
4. Copy key (hanya muncul sekali!)

### Add to n8n
1. Klik node "OpenAI" di workflow
2. Klik "Create New Credential"
3. Paste API key
4. Klik "Save"
5. Test connection (optional)

## ▶️ Step 4: Activate Workflow (1 menit)

1. **Activate**
   - Toggle "Active" di kanan atas
   - Workflow sekarang running!

2. **Get Webhook URL**
   - Klik node "Webhook"
   - Copy "Production URL"
   - Format: `https://your-n8n.com/webhook/lumakara`

## 🧪 Step 5: Test Workflow (3 menit)

### Test via cURL
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

### Test via Postman
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
  "content": "$carousel_data = array(\n  'topic' => 'Manfaat Vitamin C untuk Kulit',\n  ...\n);",
  "topic": "Manfaat Vitamin C untuk Kulit",
  "audience": "gen_z",
  "slideCount": 5,
  "generatedAt": "2026-02-13T10:30:00.000Z"
}
```

## 📋 Input Parameters

| Parameter | Type | Required | Default | Options |
|-----------|------|----------|---------|---------|
| topic | string | ✅ Yes | - | Any skincare topic |
| audience | string | ❌ No | millennial | gen_z, millennial, gen_x |
| slideCount | number | ❌ No | 7 | 3-10 |
| tone | string | ❌ No | casual | casual, educational, inspirational |

## 🎯 How It Works

### Workflow Flow:
1. **Webhook** receives POST request
2. **Prepare Prompt** builds prompt dengan knowledge base context dari Vercel API
3. **OpenAI** generates content using GPT-4 Turbo
4. **Process Response** formats output as JSON
5. **Respond** returns result to caller

### Knowledge Base Integration:
- Workflow references Vercel API: `https://custom-ai-two.vercel.app/api/knowledge`
- All 15 knowledge base files automatically included in prompt
- Real-time access to latest knowledge base

## 🔧 Troubleshooting

### Error: OpenAI API Key Invalid
- Check key di: https://platform.openai.com/api-keys
- Pastikan key masih active
- Re-create credential di n8n

### Error: Webhook Not Found
- Pastikan workflow "Active"
- Check webhook URL di node settings
- Test dengan "Test Workflow" button

### Error: Timeout
- Increase timeout di OpenAI node (Settings → Timeout)
- Reduce slideCount in request
- Check OpenAI API status

### Output Format Salah
- Review knowledge base di GitHub
- Check CUSTOM-GPT-CONFIG.md
- Verify prompt di "Prepare Prompt" node

## 🚀 Next Steps

1. ✅ Import workflow
2. ✅ Setup credentials
3. ✅ Activate & test
4. ⬜ Integrate ke aplikasi
5. ⬜ Setup monitoring
6. ⬜ Scale!

## 📚 Advanced

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
2. Send notification on success

### Schedule Generation
1. Replace "Webhook" with "Cron" node
2. Schedule: `0 9 * * 1` (Every Monday 9 AM)
3. Add topics list

## 💰 Cost Estimate

- OpenAI API (GPT-4 Turbo): ~$0.01-0.03 per generation
- 100 content/month: ~$1-3/month
- n8n Cloud: $20/month (unlimited workflows)
- n8n Self-hosted: Free

## 📞 Support

Issues? Check:
- n8n execution logs
- OpenAI API status
- Vercel API health: https://custom-ai-two.vercel.app/api/health
- GitHub repo: https://github.com/lumakaraid/custom-ai

---

Total time: ~10 menit
Ready to generate content! 🎉
