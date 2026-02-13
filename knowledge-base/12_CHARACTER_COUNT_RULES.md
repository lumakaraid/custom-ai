# CHARACTER COUNT RULES
# Strict Limits and Validation

Character count compliance is CRITICAL. Content that exceeds limits will break the carousel design and fail import validation. This guide provides strict rules and validation methods.

---

## STRICT CHARACTER LIMITS

### Headlines
- **Maximum:** 80 characters
- **Minimum:** 10 characters
- **Recommended:** 60-75 characters
- **Count Method:** `mb_strlen()` for accurate Indonesian character counting

### Body Text
- **Maximum:** 250 characters
- **Minimum:** 50 characters
- **Recommended:** 200-240 characters
- **Count Method:** `mb_strlen()` for accurate Indonesian character counting

### Visual Prompts (Slides 1, 2, 5 only)
- **Minimum:** 300 words
- **Recommended:** 300-500 words
- **Must Include:** All 8 required elements (Scene, Metaphor, Composition, Background, Lighting, Colors, Mood, Technical)

### Visual Keywords (All slides)
- **Format:** Comma-separated
- **Count:** 5-8 keywords per slide
- **Length:** No strict limit, but keep keywords concise

### Social Media Captions
- **Recommended:** 500-1000 characters
- **Maximum:** 2200 characters (Instagram limit)
- **Include:** Topic summary, key insights, CTA, hashtags

### Hashtags
- **Count:** 10-15 hashtags
- **Format:** Space-separated, each starting with #
- **Always Include:** #lumakara

---

## WHY CHARACTER LIMITS MATTER

### Design Constraints
- Carousel slides have fixed dimensions
- Text must fit within design templates
- Overflow breaks visual layout
- Mobile display requires shorter text

### Readability
- Short headlines are scannable
- Concise body text is digestible
- Attention spans are limited
- Clear > comprehensive

### Platform Requirements
- Instagram carousel best practices
- LinkedIn post optimization
- Mobile-first content consumption
- Cross-platform compatibility

---

## COUNTING CHARACTERS CORRECTLY

### Use mb_strlen() for Indonesian
Indonesian uses multibyte characters. Regular `strlen()` will give incorrect counts.

**Correct:**
```php
$headline = "Kenapa banyak UMKM stuck di revenue plateau?";
$count = mb_strlen($headline); // 45 characters ✅
```

**Incorrect:**
```php
$headline = "Kenapa banyak UMKM stuck di revenue plateau?";
$count = strlen($headline); // May give wrong count ❌
```

### What Counts as a Character
- Letters: a-z, A-Z
- Numbers: 0-9
- Spaces: count as 1 character
- Punctuation: .,!?;:'"()
- Special characters: @#$%&*
- Emojis: count as 1-2 characters (be careful!)

### What Doesn't Count
- Nothing! Everything visible counts.

---

## VALIDATION EXAMPLES

### ✅ VALID Headlines (Within 80 chars)

**Example 1:** (45 chars)
"Kenapa banyak UMKM stuck di revenue plateau?"

**Example 2:** (68 chars)
"Brand positioning yang jelas = GPS untuk bisnis kamu. Setuju nggak?"

**Example 3:** (79 chars)
"3 framework pricing yang bikin kamu nggak undercharge lagi. Save post ini!"

**Example 4:** (52 chars)
"Real talk: Apa struggle terbesar kamu di bisnis?"

### ❌ INVALID Headlines (Exceeds 80 chars)

**Example 1:** (95 chars) - TOO LONG
"Kenapa banyak founder sibuk banget tapi bisnis nggak tumbuh? Ini alasan sebenarnya yang jarang disadari."

**Example 2:** (88 chars) - TOO LONG
"Brand positioning yang jelas itu kayak GPS untuk bisnis kamu. Tanpa itu, kamu akan tersesat."

**Example 3:** (5 chars) - TOO SHORT
"Tips!"

---

### ✅ VALID Body Text (Within 250 chars)

**Example 1:** (238 chars)
"Banyak founder sibuk banget tapi bisnis nggak tumbuh. Kenapa? Karena sibuk bukan berarti produktif. Focus on high-impact activities: customer acquisition, product improvement, team building. Sisanya? Delegate atau eliminate. Quality > quantity."

**Example 2:** (245 chars)
"Positioning yang kuat jawab 3 pertanyaan: Siapa customer ideal kamu? Apa unique value kamu? Kenapa mereka harus pilih kamu? Kalau kamu nggak bisa jawab ini dengan jelas, competitor yang bisa jawab akan menang. Clarity is competitive advantage."

**Example 3:** (198 chars)
"2 tahun lalu gue cuma punya 500 followers dan 0 income dari konten. Sekarang? 50K followers dan 6-figure income. Rahasia? Nggak ada. Cuma consistency, strategy, dan banyak trial-error. Keep going!"

### ❌ INVALID Body Text (Exceeds 250 chars)

**Example 1:** (312 chars) - TOO LONG
"Banyak founder sibuk banget tapi bisnis nggak tumbuh. Kenapa? Karena sibuk bukan berarti produktif. Mereka trapped di operational tasks yang nggak strategic. Focus on high-impact activities: customer acquisition, product improvement, team building, strategic planning, dan market research. Sisanya? Delegate atau eliminate. Quality over quantity, always. Remember: working hard ≠ working smart."

**Example 2:** (35 chars) - TOO SHORT
"Positioning itu penting untuk bisnis."

---

## TIPS FOR STAYING WITHIN LIMITS

### For Headlines

**1. Be Concise**
❌ "Kenapa banyak founder sibuk banget tapi bisnis mereka nggak tumbuh?"
✅ "Kenapa banyak founder sibuk tapi bisnis nggak tumbuh?"

**2. Use Contractions**
❌ "Kamu tidak butuh 100K followers untuk sukses"
✅ "Kamu nggak butuh 100K followers untuk sukses"

**3. Remove Filler Words**
❌ "Sebenarnya, positioning yang jelas itu sangat penting sekali"
✅ "Positioning yang jelas itu penting"

**4. Use Symbols**
❌ "Brand positioning yang jelas sama dengan GPS"
✅ "Brand positioning yang jelas = GPS"

### For Body Text

**1. One Idea Per Slide**
Don't try to cram multiple concepts. Focus on one clear message.

**2. Use Short Sentences**
❌ "Banyak founder sibuk banget tapi bisnis nggak tumbuh karena mereka trapped di operational tasks yang nggak strategic dan nggak ada waktu untuk high-impact activities."
✅ "Banyak founder sibuk tapi bisnis nggak tumbuh. Kenapa? Trapped di operational tasks. Nggak ada waktu untuk strategic work."

**3. Remove Redundancy**
❌ "Positioning yang jelas dan spesifik itu sangat penting dan krusial"
✅ "Positioning yang jelas itu krusial"

**4. Use Lists**
Instead of long sentences, use bullet points or numbered lists:
"3 hal penting: 1) Target market, 2) Unique value, 3) Clear communication."

---

## COMMON MISTAKES

### Mistake 1: Not Counting Spaces
Spaces count! "Brand positioning" is 17 characters, not 15.

### Mistake 2: Using strlen() Instead of mb_strlen()
Indonesian characters may be counted incorrectly with `strlen()`.

### Mistake 3: Adding Emojis Without Counting
Emojis count as characters! "Setuju? 🎯" is longer than "Setuju?"

### Mistake 4: Exceeding Limits "Just a Little"
Even 1 character over the limit will fail validation. Strict compliance required.

### Mistake 5: Not Checking Before Finalizing
Always validate character counts before considering content complete.

---

## VALIDATION CHECKLIST

Before submitting any content, verify:

✅ **Headlines:**
- [ ] All 6 headlines ≤ 80 characters
- [ ] All 6 headlines ≥ 10 characters
- [ ] Counted using mb_strlen()
- [ ] No emojis that push over limit

✅ **Body Text:**
- [ ] All 6 body texts ≤ 250 characters
- [ ] All 6 body texts ≥ 50 characters
- [ ] Counted using mb_strlen()
- [ ] Clear and complete despite limits

✅ **Visual Prompts:**
- [ ] Slides 1, 2, 5 have detailed prompts (300+ words)
- [ ] Slides 3, 4, 6 have null prompts
- [ ] All 8 elements included in detailed prompts

✅ **Visual Keywords:**
- [ ] All 6 slides have keywords
- [ ] 5-8 keywords per slide
- [ ] Comma-separated format
- [ ] Relevant and specific

✅ **Social Media:**
- [ ] Caption 500-1000 characters (recommended)
- [ ] 10-15 hashtags
- [ ] Includes #lumakara
- [ ] Complete and engaging

---

## TOOLS FOR VALIDATION

### Manual Check
1. Copy text to character counter tool
2. Use mb_strlen() in PHP
3. Count in text editor with character count feature

### Automated Validation
```php
function validateHeadline($headline) {
    $length = mb_strlen($headline);
    if ($length > 80) {
        return "TOO LONG: $length chars (max 80)";
    }
    if ($length < 10) {
        return "TOO SHORT: $length chars (min 10)";
    }
    return "VALID: $length chars";
}

function validateBody($body) {
    $length = mb_strlen($body);
    if ($length > 250) {
        return "TOO LONG: $length chars (max 250)";
    }
    if ($length < 50) {
        return "TOO SHORT: $length chars (min 50)";
    }
    return "VALID: $length chars";
}
```

---

## EXAMPLES WITH CHARACTER COUNTS

### Headline Examples with Counts

**45 chars:** "Kenapa banyak UMKM stuck di revenue plateau?"
**68 chars:** "Brand positioning yang jelas = GPS untuk bisnis kamu. Setuju nggak?"
**79 chars:** "3 framework pricing yang bikin kamu nggak undercharge lagi. Save post ini!"
**52 chars:** "Real talk: Apa struggle terbesar kamu di bisnis?"
**61 chars:** "Hot take: Logo bagus nggak bikin bisnis sukses. Setuju?"

### Body Text Examples with Counts

**238 chars:** "Banyak founder sibuk banget tapi bisnis nggak tumbuh. Kenapa? Karena sibuk bukan berarti produktif. Focus on high-impact activities: customer acquisition, product improvement, team building. Sisanya? Delegate atau eliminate. Quality > quantity."

**245 chars:** "Positioning yang kuat jawab 3 pertanyaan: Siapa customer ideal kamu? Apa unique value kamu? Kenapa mereka harus pilih kamu? Kalau kamu nggak bisa jawab ini dengan jelas, competitor yang bisa jawab akan menang. Clarity is competitive advantage."

**198 chars:** "2 tahun lalu gue cuma punya 500 followers dan 0 income dari konten. Sekarang? 50K followers dan 6-figure income. Rahasia? Nggak ada. Cuma consistency, strategy, dan banyak trial-error. Keep going!"

---

## FINAL REMINDER

**Character limits are NON-NEGOTIABLE.**

- Headlines: MAX 80 characters
- Body: MAX 250 characters
- Count using mb_strlen()
- Validate before finalizing
- No exceptions

Content that exceeds limits will be rejected. Always check, double-check, and validate.

---

*Strict compliance with character limits ensures content quality, design integrity, and successful import. No shortcuts.*
