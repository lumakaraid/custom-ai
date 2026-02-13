# n8n Quick Start - 10 Menit Setup

## 🚀 Super Fast Setup

### 1. Download Workflow (30 detik)
```bash
# Download dari GitHub
curl -o workflow.json https://raw.githubusercontent.com/lumakaraid/custom-ai/main/n8n/workflow.json
```

Atau manual: https://github.com/lumakaraid/custom-ai/blob/main/n8n/workflow.json → Raw → Save

### 2. Import ke n8n (1 menit)
1. Buka n8n
2. Menu → Workflows → Import from File
3. Upload `workflow.json`
4. Done!

### 3. Add OpenAI API Key (2 menit)
1. Get key: https://platform.openai.com/api-keys
2. Klik node "OpenAI" di workflow
3. Create credential → Paste key
4. Save

### 4. Activate (10 detik)
1. Toggle "Active" ON
2. Copy webhook URL

### 5. Test! (1 menit)
```bash
curl -X POST https://your-n8n.com/webhook/lumakara \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Test Topic",
    "audience": "millennial",
    "slideCount": 5
  }'
```

## ✅ Done!

Workflow ready to generate content!

## 📋 Input Format

```json
{
  "topic": "Your Topic Here",
  "audience": "gen_z|millennial|gen_x",
  "slideCount": 5,
  "tone": "casual|educational|inspirational"
}
```

## 📤 Output Format

```json
{
  "success": true,
  "filename": "2026-02-13-your-topic.php",
  "content": "$carousel_data = array(...);",
  "topic": "Your Topic Here",
  "audience": "millennial",
  "slideCount": 5,
  "generatedAt": "2026-02-13T10:30:00.000Z"
}
```

## 🔗 Integration

### JavaScript
```javascript
const response = await fetch('https://your-n8n.com/webhook/lumakara', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    topic: 'Manfaat Vitamin C',
    audience: 'gen_z',
    slideCount: 5
  })
});

const data = await response.json();
console.log(data.content); // PHP array
```

### PHP
```php
<?php
$data = [
    'topic' => 'Manfaat Vitamin C',
    'audience' => 'gen_z',
    'slideCount' => 5
];

$ch = curl_init('https://your-n8n.com/webhook/lumakara');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$result = json_decode($response, true);

echo $result['content']; // PHP array
?>
```

### Python
```python
import requests

response = requests.post('https://your-n8n.com/webhook/lumakara', json={
    'topic': 'Manfaat Vitamin C',
    'audience': 'gen_z',
    'slideCount': 5
})

data = response.json()
print(data['content'])  # PHP array
```

## 🎯 Use Cases

### 1. Manual Generation
Call webhook manually untuk generate content on-demand

### 2. Scheduled Generation
Replace Webhook dengan Cron node untuk auto-generate

### 3. WordPress Integration
Add HTTP Request node untuk auto-post ke WordPress

### 4. Batch Generation
Loop through topics array untuk generate multiple content

## 💰 Cost

- OpenAI API: ~$0.01-0.03 per generation
- 100 content/month: ~$1-3
- n8n: Free (self-hosted) atau $20/mo (cloud)

## 📚 More Info

- Full guide: [IMPORT_GUIDE.md](IMPORT_GUIDE.md)
- Troubleshooting: [README.md](README.md)
- API docs: https://custom-ai-two.vercel.app/api/health

---

Total time: 10 menit
Ready to generate! 🎉
