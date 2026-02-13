# IMPORT INSTRUCTIONS
# How Content Gets Imported to Website

This document explains how the PHP array output from Custom GPT will be imported into the Lumakara website database. Understanding this process ensures your output format is correct.

---

## IMPORT WORKFLOW

### Step 1: Generate Content in Custom GPT
User asks Custom GPT to generate content batch (e.g., "Generate content 1-10")

### Step 2: Custom GPT Outputs PHP Array
Custom GPT creates complete PHP array with all 10 contents in correct format

### Step 3: User Copies Output
User copies the entire PHP array output from Custom GPT

### Step 4: User Pastes into Import Page
User navigates to website import page and pastes the PHP array

### Step 5: System Validates
Website validates the PHP array format and data integrity

### Step 6: System Imports
Website parses the array and inserts data into database

### Step 7: Confirmation
User receives confirmation of successful import with content IDs

---

## PHP ARRAY FORMAT REQUIREMENTS

### File Structure
```php
<?php
return [
    1 => [
        // Content 1 data
    ],
    2 => [
        // Content 2 data
    ],
    // ... up to 10 contents per batch
];
```

### Required Fields Per Content
- `date` (string): Y-m-d format
- `pillar` (string): Educational, Inspirational, etc.
- `target_audience` (array): generation, stage, persona
- `topic` (string): Main topic
- `slides` (array): 6 slide objects
- `social_media` (array): caption, hashtags
- `quality_score` (integer): 0-100
- `brand_relevance` (integer): 0-100
- `viral_potential` (integer): 0-100
- `estimated_engagement` (float): 0.0-15.0

### Slide Object Requirements
Each of 6 slides must have:
- `slide_number` (integer): 1-6
- `headline` (string): ≤80 chars
- `body` (string): ≤250 chars
- `visual_prompt` (string or null): Detailed for slides 1,2,5; null for 3,4,6
- `visual_keywords` (string): Comma-separated

---

## VALIDATION RULES

### Pre-Import Validation
The system will check:

1. **Valid PHP Syntax**
   - Array structure is correct
   - No syntax errors
   - Proper closing brackets

2. **Required Fields Present**
   - All required fields exist
   - No missing data
   - Correct data types

3. **Character Count Compliance**
   - Headlines ≤80 characters
   - Body text ≤250 characters
   - Using mb_strlen() for accuracy

4. **Data Type Validation**
   - Strings are strings
   - Integers are integers
   - Arrays are arrays
   - Null is null (not 'null')

5. **Content Structure**
   - Exactly 6 slides per content
   - Slides numbered 1-6
   - Visual prompts correct (detailed for 1,2,5; null for 3,4,6)

6. **Quality Metrics**
   - Scores in range 0-100
   - Engagement rate realistic (0.0-15.0)

### Validation Errors
If validation fails, system will show:
- Error type
- Field name
- Expected vs actual value
- Line number (if applicable)

User must fix errors and re-submit.

---

## IMPORT PROCESS DETAILS

### Database Table: contents

**Schema:**
```sql
CREATE TABLE contents (
    id VARCHAR(10) PRIMARY KEY,  -- Format: NNN-MMDD
    date DATE NOT NULL,
    pillar VARCHAR(50) NOT NULL,
    target_audience JSON NOT NULL,
    topic VARCHAR(255) NOT NULL,
    slides JSON NOT NULL,
    social_media JSON NOT NULL,
    quality_score INT NOT NULL,
    brand_relevance INT NOT NULL,
    viral_potential INT NOT NULL,
    estimated_engagement DECIMAL(4,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### ID Generation
System automatically generates ID based on:
- Content number (sequential)
- Date (month + day)
- Format: `NNN-MMDD`
- Example: `001-0101` (Content 1, January 1)

### JSON Storage
- `target_audience`: Stored as JSON object
- `slides`: Stored as JSON array of 6 objects
- `social_media`: Stored as JSON object

### Duplicate Prevention
- System checks if ID already exists
- If exists, shows error
- User must resolve conflict (skip or update)

---

## IMPORT MODES

### Mode 1: New Import (Default)
- Imports all contents in batch
- Skips if ID already exists
- Shows summary of imported vs skipped

### Mode 2: Update Existing
- Updates existing content with new data
- Requires confirmation
- Preserves created_at timestamp

### Mode 3: Replace All
- Deletes existing content with same IDs
- Imports new data
- Use with caution (data loss risk)

---

## ERROR HANDLING

### Common Errors and Solutions

**Error 1: Invalid PHP Syntax**
```
Error: Parse error on line 45
Solution: Check for missing commas, brackets, or quotes
```

**Error 2: Character Count Exceeded**
```
Error: Headline on slide 2 exceeds 80 characters (actual: 95)
Solution: Shorten headline to ≤80 characters
```

**Error 3: Missing Required Field**
```
Error: Field 'visual_keywords' missing on slide 3
Solution: Add visual_keywords field to all slides
```

**Error 4: Wrong Data Type**
```
Error: quality_score must be integer, got string
Solution: Remove quotes around numeric values
```

**Error 5: Duplicate ID**
```
Error: Content ID '001-0101' already exists
Solution: Choose import mode (skip, update, or replace)
```

---

## IMPORT BEST PRACTICES

### 1. Generate in Batches of 10
- Manageable size
- Easier to review
- Faster to fix errors
- Less risk of data loss

### 2. Validate Before Import
- Copy to text editor
- Check PHP syntax
- Verify character counts
- Review content quality

### 3. Test with Small Batch First
- Import 1-2 contents first
- Verify in database
- Check display on website
- Then proceed with full batch

### 4. Keep Backup
- Save generated PHP arrays
- Store in organized folders
- Easy to re-import if needed
- Version control recommended

### 5. Review After Import
- Check database records
- Verify data integrity
- Test content display
- Confirm all fields correct

---

## IMPORT PAGE INTERFACE

### Input Section
- Large text area for PHP array paste
- Syntax highlighting (optional)
- Character count display
- Validation button

### Options Section
- Import mode selection
- Duplicate handling
- Status setting (draft/approved)
- Batch naming

### Validation Section
- Real-time syntax check
- Character count validation
- Required field check
- Error display with line numbers

### Import Section
- Import button
- Progress indicator
- Success/error messages
- Summary report

### Results Section
- Imported content IDs
- Skipped content IDs
- Error details
- Action buttons (view, edit, delete)

---

## POST-IMPORT ACTIONS

### 1. Review Content
- Navigate to content library
- Filter by import batch
- Review each content piece
- Check visual display

### 2. Edit if Needed
- Fix any issues found
- Update content directly in database
- Re-generate if major errors

### 3. Approve for Publishing
- Change status from 'draft' to 'approved'
- Set publish date
- Schedule for social media

### 4. Export for Design
- Export content to design templates
- Generate carousel images
- Create social media graphics

### 5. Schedule Publishing
- Add to content calendar
- Set publish times
- Configure auto-posting (if available)

---

## TROUBLESHOOTING

### Issue: Import Fails Silently
**Cause:** PHP syntax error not caught by validation
**Solution:** Check PHP error logs, validate syntax externally

### Issue: Some Contents Import, Others Don't
**Cause:** Duplicate IDs or validation errors on specific contents
**Solution:** Check error log for specific content IDs, fix individually

### Issue: Data Looks Correct But Validation Fails
**Cause:** Hidden characters, encoding issues
**Solution:** Copy to plain text editor, remove formatting, re-paste

### Issue: Character Counts Wrong After Import
**Cause:** Using strlen() instead of mb_strlen()
**Solution:** Ensure system uses mb_strlen() for Indonesian characters

### Issue: JSON Fields Not Parsing
**Cause:** Invalid JSON structure in arrays
**Solution:** Validate JSON syntax, ensure proper escaping

---

## IMPORT CHECKLIST

Before importing, verify:

✅ **Format:**
- [ ] Valid PHP array syntax
- [ ] Proper opening and closing
- [ ] All commas and brackets correct

✅ **Content:**
- [ ] All required fields present
- [ ] Character counts within limits
- [ ] Data types correct
- [ ] 6 slides per content

✅ **Quality:**
- [ ] Content reviewed for quality
- [ ] Brand voice consistent
- [ ] Visual prompts detailed (slides 1,2,5)
- [ ] Visual keywords present (all slides)

✅ **Validation:**
- [ ] PHP syntax validated
- [ ] Character counts checked
- [ ] No duplicate IDs
- [ ] Quality metrics realistic

✅ **Backup:**
- [ ] PHP array saved to file
- [ ] Organized in folders
- [ ] Version tracked
- [ ] Easy to re-import

---

## EXAMPLE IMPORT SESSION

### Step-by-Step Example

**1. User Request:**
"Generate content batch 1-10"

**2. Custom GPT Generates:**
Complete PHP array with 10 contents

**3. User Copies:**
Entire output from Custom GPT

**4. User Opens Import Page:**
Navigates to website → Content → Import

**5. User Pastes:**
Pastes PHP array into text area

**6. System Validates:**
- Checks syntax: ✅ Valid
- Checks character counts: ✅ All within limits
- Checks required fields: ✅ All present
- Checks data types: ✅ Correct

**7. User Clicks Import:**
System processes batch

**8. System Imports:**
- Content 001-0101: ✅ Imported
- Content 002-0101: ✅ Imported
- Content 003-0101: ✅ Imported
- ... (all 10 imported)

**9. System Shows Summary:**
"Successfully imported 10 contents. 0 skipped. 0 errors."

**10. User Reviews:**
Navigates to content library, verifies data

**11. User Approves:**
Changes status to 'approved', schedules publishing

---

*Follow these instructions to ensure smooth import of all generated content. Proper format = successful import.*
