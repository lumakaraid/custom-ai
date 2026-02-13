# PHP OUTPUT FORMAT
# Exact Format for Content Generation

All generated content MUST be output in this exact PHP array format. This format will be directly imported into the Lumakara website database.

---

## COMPLETE FORMAT EXAMPLE

```php
<?php
return [
    // CONTENT 001 - Educational, Gen Z Content Creator, New Year Planning
    1 => [
        'date' => '2026-01-01',
        'pillar' => 'Educational',
        'target_audience' => [
            'generation' => 'Gen Z',
            'stage' => 'Kickstart',
            'persona' => 'Content Creator'
        ],
        'topic' => 'Business planning untuk content creator: From chaos to clarity',
        'slides' => [
            [
                'slide_number' => 1,
                'headline' => 'Content creator butuh business plan? Absolutely!',
                'body' => 'Banyak content creator fokus bikin konten viral tapi lupa planning bisnis. Hasilnya? Income nggak stabil, burnout, dan nggak tahu arah. Business plan bukan cuma buat corporate, ini roadmap kamu dari content creator jadi brand owner.',
                'visual_prompt' => 'Scene: Indonesian content creator (mid 20s, female, casual trendy attire - oversized hoodie and jeans) sitting at modern minimalist desk with ring light and camera setup visible, reviewing content calendar on iPad with excited, determined expression...',
                'visual_keywords' => 'indonesian content creator, modern workspace, ring light, camera setup, planning, young entrepreneur, creative space, natural light'
            ],
            [
                'slide_number' => 2,
                'headline' => 'Kenapa banyak creator stuck di income plateau?',
                'body' => 'Tanpa plan yang jelas, kamu cuma reaktif: terima endorse apa aja, bikin konten random, nggak ada strategi monetize. Income naik-turun, nggak predictable. Kamu kerja keras tapi hasil nggak maksimal karena nggak ada direction.',
                'visual_prompt' => 'Scene: Indonesian content creator (late 20s, male, casual street style) sitting at cluttered desk with multiple devices, looking at analytics dashboard with concerned expression...',
                'visual_keywords' => 'content creator struggle, analytics dashboard, multiple devices, concerned expression, cluttered workspace, business challenge'
            ],
            [
                'slide_number' => 3,
                'headline' => 'Business plan = GPS untuk content business kamu',
                'body' => 'Business plan yang bagus jawab: Siapa audience ideal kamu? Apa unique value kamu? Gimana monetize strategy? Berapa target income? Plan ini bikin kamu fokus, nggak distracted sama opportunity yang nggak aligned.',
                'visual_prompt' => null,
                'visual_keywords' => 'business planning, strategy, roadmap, focus, goal setting, clarity, direction'
            ],
            [
                'slide_number' => 4,
                'headline' => 'Framework simple: Vision → Strategy → Action',
                'body' => 'Vision: Mau jadi apa dalam 1-3 tahun? Strategy: Pillar konten apa? Revenue stream apa? Action: Content calendar, collab plan, product launch timeline. Simple tapi powerful. Review tiap quarter, adjust based on data.',
                'visual_prompt' => null,
                'visual_keywords' => 'business framework, strategy planning, vision board, action plan, content calendar, growth strategy'
            ],
            [
                'slide_number' => 5,
                'headline' => 'Jangan bikin plan terlalu kompleks atau terlalu vague',
                'body' => 'Mistake #1: Plan 50 halaman yang nggak pernah dibuka. Mistake #2: "Mau sukses" tanpa detail. Plan yang bagus: specific, measurable, actionable. Cukup 5-10 halaman yang bener-bener kamu pakai sebagai panduan.',
                'visual_prompt' => 'Scene: Indonesian business mentor (30s, female, smart casual attire) sitting across desk, pointing to simple one-page business plan with pen, expression showing wisdom...',
                'visual_keywords' => 'business mentor, simple planning, one-page plan, guidance, wisdom, professional advice, mentorship'
            ],
            [
                'slide_number' => 6,
                'headline' => 'Action: Bikin plan kamu minggu ini',
                'body' => 'Start simple: 1) Define audience ideal kamu, 2) List 3 revenue stream yang mau kamu develop, 3) Set target income 6 bulan ke depan, 4) Buat content calendar 1 bulan. Itu aja dulu. Nanti develop seiring jalan. Yang penting mulai!',
                'visual_prompt' => null,
                'visual_keywords' => 'take action, start planning, business goals, content creator success, entrepreneurship, first steps'
            ]
        ],
        'social_media' => [
            'caption' => 'Content creator butuh business plan? ABSOLUTELY! 📊

Banyak yang fokus bikin konten viral tapi lupa planning bisnis. Hasilnya? Income nggak stabil, burnout, dan nggak tahu arah.

Business plan bukan cuma buat corporate. Ini roadmap kamu dari content creator jadi brand owner.

Framework simple:
✨ Vision: Mau jadi apa dalam 1-3 tahun?
📈 Strategy: Pillar konten apa? Revenue stream apa?
🎯 Action: Content calendar, collab plan, product timeline

Start simple minggu ini:
1. Define audience ideal kamu
2. List 3 revenue stream yang mau develop
3. Set target income 6 bulan ke depan
4. Buat content calendar 1 bulan

Yang penting mulai! 💪

Swipe untuk framework lengkapnya →

#lumakara #contentcreator #businessplanning #bisniskreatif #contentcreatorindonesia #digitalentrepreneur #bisnisdigital #strategikonten #monetizekonten #creatoreconomy #genzbisnis #umkmdigital #brandstrategy #contentbusiness #entrepreneurindonesia',
            'hashtags' => '#lumakara #contentcreator #businessplanning #bisniskreatif #contentcreatorindonesia #digitalentrepreneur #bisnisdigital #strategikonten #monetizekonten #creatoreconomy #genzbisnis #umkmdigital #brandstrategy #contentbusiness #entrepreneurindonesia'
        ],
        'quality_score' => 95,
        'brand_relevance' => 97,
        'viral_potential' => 88,
        'estimated_engagement' => 8.5
    ],

    // CONTENT 002 - Inspirational, Millennial Career Shifter, Personal Branding
    2 => [
        'date' => '2026-01-01',
        'pillar' => 'Inspirational',
        'target_audience' => [
            'generation' => 'Millennial',
            'stage' => 'Kickstart',
            'persona' => 'Career Shifter'
        ],
        'topic' => 'From corporate to entrepreneur: Your personal brand is your new resume',
        'slides' => [
            // ... 6 slides with same structure
        ],
        'social_media' => [
            'caption' => '...',
            'hashtags' => '...'
        ],
        'quality_score' => 92,
        'brand_relevance' => 95,
        'viral_potential' => 85,
        'estimated_engagement' => 7.8
    ],

    // Continue for all contents...
];
```

---

## FIELD SPECIFICATIONS

### date (string, required)
- Format: `YYYY-MM-DD`
- Example: `'2026-01-01'`
- Must be valid date in 2026

### pillar (string, required)
- Options: `'Educational'`, `'Inspirational'`, `'Conversational'`, `'Entertainment'`, `'Trust Building'`
- Must match exactly (case-sensitive)

### target_audience (array, required)
- **generation** (string): `'Gen Z'`, `'Millennial'`, `'Gen X'`, or `'All Generations'`
- **stage** (string): `'Kickstart'`, `'Build & Scale'`, `'Next-Gen'`, or `'Community'`
- **persona** (string): Specific persona like `'Content Creator'`, `'UMKM Baru'`, `'Career Shifter'`, etc.

### topic (string, required)
- Main topic/theme of the content
- Should be descriptive and specific
- 50-100 characters recommended

### slides (array, required)
- Must contain exactly 6 slide objects
- Each slide must have all required fields

#### Slide Object Structure

**slide_number** (integer, required)
- Values: 1, 2, 3, 4, 5, 6
- Sequential order

**headline** (string, required)
- Maximum 80 characters (strict)
- Engaging, clear, on-brand
- Indonesian language (can mix with English naturally)

**body** (string, required)
- Maximum 250 characters (strict)
- Informative, actionable, valuable
- Indonesian language with natural English mix
- Use "kamu" not "Anda"

**visual_prompt** (string or null, required)
- **Slides 1, 2, 5:** Super detailed prompt (300+ words)
- **Slides 3, 4, 6:** `null`
- Must include all 8 elements (Scene, Metaphor, Composition, Background, Lighting, Colors, Mood, Technical)

**visual_keywords** (string, required)
- Comma-separated keywords
- 5-8 keywords per slide
- Include Indonesian context
- Example: `'indonesian entrepreneur, modern workspace, laptop, coffee, planning, professional, natural light, urban office'`

### social_media (array, required)

**caption** (string, required)
- Full Instagram/LinkedIn caption
- Include emoji (sparingly, strategically)
- Include key insights from slides
- Include call-to-action
- Include "Swipe untuk..." or similar
- 500-1000 characters recommended

**hashtags** (string, required)
- 10-15 hashtags
- Always include: `#lumakara`
- Include relevant topic hashtags
- Include audience hashtags
- Include Indonesian business hashtags
- Format: Space-separated, each starting with #

### Quality Metrics (all required)

**quality_score** (integer, required)
- Range: 0-100
- Measures overall content quality
- Consider: clarity, value, engagement potential

**brand_relevance** (integer, required)
- Range: 0-100
- How well content aligns with Lumakara brand
- Consider: voice, values, positioning

**viral_potential** (integer, required)
- Range: 0-100
- Likelihood of high engagement/shares
- Consider: hook strength, relatability, shareability

**estimated_engagement** (float, required)
- Estimated engagement rate percentage
- Range: 0.0-15.0 (realistic range)
- Example: `8.5` means 8.5% engagement rate

---

## VALIDATION RULES

### Character Counts (STRICT)
- **Headline:** Maximum 80 characters (no exceptions)
- **Body:** Maximum 250 characters (no exceptions)
- Count using `mb_strlen()` for accurate Indonesian character counting

### Required Fields
- All fields marked as "required" must be present
- No null values except for visual_prompt on slides 3, 4, 6
- No empty strings

### Data Types
- Strings must be strings (quoted)
- Integers must be integers (not quoted)
- Arrays must be arrays (proper PHP array syntax)
- Null must be `null` (not `'null'` or `"null"`)

### Content Quality
- Headlines must be engaging and clear
- Body text must provide value
- Visual prompts (when present) must be super detailed (300+ words)
- Visual keywords must be relevant and specific
- Captions must be complete and engaging
- Hashtags must be relevant and properly formatted

---

## OUTPUT GUIDELINES

### Format
- Use proper PHP array syntax
- Proper indentation (4 spaces)
- Comments for each content piece
- Start with `<?php return [`
- End with `];`

### Batch Size
- Generate 10 contents per batch
- Number them sequentially (1, 2, 3, ... 10)
- Each batch is a complete, valid PHP file

### Quality Assurance
Before outputting, verify:
- ✅ All character counts within limits
- ✅ All required fields present
- ✅ Proper data types
- ✅ Valid PHP syntax
- ✅ Lumakara brand voice maintained
- ✅ Visual prompts super detailed (slides 1, 2, 5)
- ✅ Visual keywords present for all slides
- ✅ Quality metrics realistic

---

## COMMON MISTAKES TO AVOID

❌ **Character Count Violations**
```php
'headline' => 'This is a very long headline that exceeds the eighty character limit and will cause validation errors'
```

❌ **Wrong Data Types**
```php
'quality_score' => '95',  // Should be integer, not string
'visual_prompt' => 'null',  // Should be null, not string 'null'
```

❌ **Missing Required Fields**
```php
'slides' => [
    [
        'slide_number' => 1,
        'headline' => 'Test',
        // Missing body, visual_prompt, visual_keywords
    ]
]
```

❌ **Incomplete Visual Prompts**
```php
'visual_prompt' => 'Indonesian entrepreneur working on laptop'  // Too short, not detailed
```

❌ **Generic Visual Keywords**
```php
'visual_keywords' => 'business, work, office'  // Too generic, no Indonesian context
```

---

## TESTING YOUR OUTPUT

Before submitting, test that:

1. **Valid PHP Syntax**
   - Copy output to PHP file
   - Run `php -l filename.php`
   - Should show "No syntax errors"

2. **Character Counts**
   - Check all headlines ≤ 80 chars
   - Check all body text ≤ 250 chars

3. **Completeness**
   - All 6 slides present for each content
   - All required fields present
   - Visual prompts detailed for slides 1, 2, 5
   - Visual prompts null for slides 3, 4, 6

4. **Brand Voice**
   - Read through content
   - Sounds like Lumakara?
   - Calm, strategic, practical, relatable?
   - Uses "kamu" not "Anda"?

---

*Follow this format exactly for all content generation. This ensures smooth import into the Lumakara website.*
