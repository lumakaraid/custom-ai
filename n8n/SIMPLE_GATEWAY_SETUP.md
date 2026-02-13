# n8n Simple Gateway - NO AI API Required!

## 🎯 Concept

n8n hanya sebagai **webhook gateway**, BUKAN AI generator.

```
Your App → n8n webhook → Return prompt
         ↓
Copy prompt → Paste ke Custom GPT/Gemini → Get result
```

## ✅ Benefits

- ❌ TIDAK perlu OpenAI API key
- ❌ TIDAK perlu token/billing
- ❌ TIDAK perlu setup AI credentials
- ✅ n8n cuma format request jadi prompt
- ✅ Custom GPT/Gemini yang generate (sudah punya AI built-in)
- ✅ Super simple, zero cost untuk n8n

## 📥 Setup (5 Menit)

### 1. Import Workflow
1. Download: `workflow-simple-gateway.json`
2. n8n → Import from File
3. Done! (No credentials needed!)

### 2. Activate
1. Toggle "Active" ON
2. Copy webhook URL

### 3. Test
```bash
curl -X POST https://your-n8n.com/webhook/lumakara-gateway \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Double Cleansing",
    "audience": "millennial",
    "slideCount": 7
  }'
```

### Response:
```json
{
  "prompt": "Buatkan konten carousel Instagram tentang \"Double Cleansing\" untuk target audience millennial, 7 slide, tone casual.\n\nOutput dalam format PHP array sesuai knowledge base.",
  "topic": "Double Cleansing",
  "audience": "millennial",
  "slideCount": 7,
  "tone": "casual",
  "knowledgeBaseUrl": "https://custom-ai-two.vercel.app/api/knowledge/all",
  "githubUrl": "https://github.com/lumakaraid/custom-ai/tree/main/knowledge-base",
  "instructions": "Copy prompt ini dan paste ke Custom GPT atau Gemini Gem untuk generate content"
}
```

## 🔄 Workflow

### Manual Flow:
1. Call n8n webhook dengan topic/audience
2. n8n return formatted prompt
3. Copy prompt
4. Paste ke Custom GPT atau Gemini Gem
5. Get PHP array result

### Semi-Auto Flow (Advanced):
Bisa add node untuk auto-open Custom GPT/Gemini dengan prompt pre-filled.

## 💡 Why This Approach?

### Pros:
- ✅ Zero AI API cost
- ✅ No token management
- ✅ No rate limits (dari AI API)
- ✅ Use ChatGPT Plus yang sudah kamu bayar
- ✅ Use Gemini free tier
- ✅ n8n cuma orchestration

### Cons:
- ⚠️ Manual copy-paste prompt (tapi cepat!)
- ⚠️ Tidak fully automated

## 🚀 Alternative: Full Automation (Optional)

Kalau mau fully automated, bisa pakai:

### Option A: Custom GPT API (Perlu ChatGPT Plus + API)
- Add OpenAI node di n8n
- Auto-generate tanpa manual

### Option B: Gemini API (Free Tier Available!)
- Add Google AI node di n8n
- Free tier: 60 requests/minute
- API key gratis!

### Option C: Keep Manual (Recommended)
- Paling simple
- Zero cost
- Reliable

## 📋 Use Cases

### 1. Content Planning Tool
```javascript
// Your app calls n8n
const response = await fetch('n8n-webhook-url', {
  method: 'POST',
  body: JSON.stringify({
    topic: 'Vitamin C Benefits',
    audience: 'gen_z',
    slideCount: 5
  })
});

const { prompt } = await response.json();

// Show prompt to user
alert('Copy this prompt to Custom GPT:\n' + prompt);
```

### 2. Batch Prompt Generator
```javascript
// Generate prompts untuk multiple topics
const topics = ['Topic 1', 'Topic 2', 'Topic 3'];

for (const topic of topics) {
  const response = await fetch('n8n-webhook-url', {
    method: 'POST',
    body: JSON.stringify({ topic })
  });
  
  const { prompt } = await response.json();
  console.log(`Prompt for ${topic}:`, prompt);
}
```

### 3. WordPress Plugin Integration
```php
<?php
// Generate prompt via n8n
$response = wp_remote_post('n8n-webhook-url', [
    'body' => json_encode([
        'topic' => 'Skincare Tips',
        'audience' => 'millennial'
    ])
]);

$data = json_decode(wp_remote_retrieve_body($response));

// Show prompt to admin
echo '<textarea>' . $data->prompt . '</textarea>';
echo '<p>Copy prompt di atas ke Custom GPT untuk generate content</p>';
?>
```

## 🎯 Recommendation

**Use this simple gateway approach if:**
- ✅ Kamu sudah punya ChatGPT Plus
- ✅ Atau pakai Gemini free tier
- ✅ Gak mau ribet dengan API keys
- ✅ Manual copy-paste OK (cepat kok!)
- ✅ Volume tidak terlalu tinggi (< 50/day)

**Upgrade to full automation if:**
- ⚠️ Volume tinggi (> 100/day)
- ⚠️ Butuh fully automated
- ⚠️ OK dengan setup API keys
- ⚠️ Budget ada untuk API costs

## 💰 Cost Comparison

### Simple Gateway (This Approach)
- n8n: Free (self-hosted) atau $20/mo (cloud)
- AI: $20/mo (ChatGPT Plus) atau Free (Gemini)
- **Total: $0-40/month**

### Full Automation
- n8n: Free/$20/mo
- OpenAI API: ~$1-3/100 generations
- **Total: $20-50/month** (tergantung volume)

## ✅ Setup Checklist

- [ ] Import `workflow-simple-gateway.json`
- [ ] Activate workflow
- [ ] Test webhook
- [ ] Integrate ke app (optional)
- [ ] Setup Custom GPT dengan knowledge base
- [ ] Setup Gemini Gem sebagai backup
- [ ] Done!

---

Total setup: 5 menit
Zero AI API cost! 🎉
