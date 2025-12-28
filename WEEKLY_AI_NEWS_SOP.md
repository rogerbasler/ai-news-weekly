# Weekly AI News Workflow - Standard Operating Procedure

**Task Name:** Weekly AI News Collection, Podcast Generation, and Website Update  
**Frequency:** Every Saturday (weekly)  
**Owner:** Roger Basler de Roca  
**Repository:** https://github.com/rogerbasler/ai-news-weekly  
**Website:** https://rogerbasler.github.io/ai-news-weekly/

---

## 📋 Overview

This document defines the standard workflow for collecting, organizing, and publishing weekly AI news updates with an accompanying podcast.

---

## 🎯 Workflow Objectives

1. Collect the most significant AI news from the past week
2. Organize articles into 5 predefined categories
3. Generate a professional podcast covering top stories
4. Update the website with new content
5. Deploy updates to GitHub Pages

---

## 📰 News Sources (8 Major Outlets)

**Required Sources:**
1. **OpenAI Blog** - https://openai.com/blog/
2. **TechCrunch (AI Section)** - https://techcrunch.com/category/artificial-intelligence/
3. **WIRED (AI Section)** - https://www.wired.com/tag/artificial-intelligence/
4. **VentureBeat** - https://venturebeat.com/ai/
5. **The Verge (AI Section)** - https://www.theverge.com/ai-artificial-intelligence
6. **MIT Technology Review** - https://www.technologyreview.com/topic/artificial-intelligence/
7. **Ars Technica (AI Section)** - https://arstechnica.com/tag/artificial-intelligence/
8. **Reuters (Technology)** - https://www.reuters.com/technology/

**Supplementary Sources (as needed):**
- Forbes (AI coverage)
- Google AI Blog
- Anthropic Blog
- Industry analysis sites
- Academic publications

---

## 📂 Content Categories (5 Required)

### 1. **AI News of the Week**
Major announcements, breakthroughs, and industry-shaping developments.

**Examples:**
- New model releases (GPT-5, Claude 4, etc.)
- Major company announcements
- Significant research breakthroughs
- Industry trends and analysis

### 2. **AI Tools, Startups, and Innovations**
New products, startup funding, and technological innovations.

**Examples:**
- New AI tools and platforms
- Startup funding rounds
- Product launches
- Technical innovations

### 3. **Regulation and Ethics**
Policy developments, ethical concerns, and governance issues.

**Examples:**
- Government regulations
- Executive orders and legislation
- Ethical concerns and debates
- Safety and security issues
- Privacy concerns

### 4. **Voices and Perspectives**
Opinion pieces, analysis, and thought leadership.

**Examples:**
- Expert commentary
- Industry analysis
- Critical perspectives
- Cultural impact discussions

### 5. **Implications for Business & Society**
Enterprise adoption, economic impact, and societal changes.

**Examples:**
- Enterprise AI adoption statistics
- Economic impact reports
- Workforce transformation
- Business case studies
- ROI and performance metrics

---

## 🎙️ Podcast Standards

### **Format Specifications**
- **Title:** "The AI Pulse - Weekly AI News with Roger Basler de Roca"
- **Host:** Roger Basler de Roca
- **Duration:** 7-10 minutes
- **Voice:** Male voice (professional, clear, engaging)
- **Format:** Audio file (.wav)
- **Naming Convention:** `ai_pulse_podcast_YYYY_MM_DD.wav`

### **Content Structure**
1. **Introduction** (30 seconds)
   - Welcome and show introduction
   - Brief overview of the week's themes

2. **AI News of the Week** (2-3 minutes)
   - Cover 3-4 top stories
   - Provide context and significance

3. **AI Tools, Startups, and Innovations** (1-2 minutes)
   - Highlight 2-3 notable developments
   - Focus on practical implications

4. **Regulation and Ethics** (1-2 minutes)
   - Cover 2-3 regulatory/ethical stories
   - Explain impact and concerns

5. **Voices and Perspectives** (1 minute)
   - Feature 1 notable opinion or analysis
   - Provide balanced perspective

6. **Implications for Business & Society** (1-2 minutes)
   - Discuss 2-3 business/societal impacts
   - Include statistics and data points

7. **Closing** (30 seconds)
   - Summary of key takeaways
   - Sign-off and preview next week

### **Script Guidelines**
- Professional, conversational tone
- Clear transitions between segments
- Cite sources for major claims
- Include specific numbers and statistics
- Avoid jargon; explain technical terms
- Balance optimism with critical analysis

---

## 🌐 Website Standards

### **Technical Requirements**
- **Framework:** Static HTML/CSS/JavaScript
- **Data Format:** JSON (`ai_news_data.json`)
- **Hosting:** GitHub Pages
- **Branch:** gh-pages
- **Mobile Responsive:** Required
- **HTTPS:** Enforced

### **Design Standards**
- **Color Scheme:** Purple gradient (current: #667eea to #764ba2)
- **Typography:** System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Layout:** Single-page with sections
- **Podcast Player:** HTML5 audio element
- **Article Cards:** Hover effects, clear hierarchy

### **Content Requirements**
Each article must include:
- Title
- Source
- Date
- Summary (2-3 sentences)
- Key Points (3-5 bullet points)
- Link to original article

---

## 📊 Article Selection Criteria

### **Minimum Requirements**
- **Total Articles:** 12-15 per week
- **Distribution:**
  - AI News of the Week: 3-5 articles
  - AI Tools, Startups, and Innovations: 2-4 articles
  - Regulation and Ethics: 2-4 articles
  - Voices and Perspectives: 1-2 articles
  - Implications for Business & Society: 2-3 articles

### **Quality Criteria**
Articles must meet at least 2 of these criteria:
1. **Significance:** Major industry impact or breakthrough
2. **Timeliness:** Published within the past 7 days
3. **Credibility:** From reputable source
4. **Relevance:** Direct AI focus (not tangential)
5. **Uniqueness:** Not widely covered in previous weeks
6. **Data-Driven:** Includes statistics or research findings

### **Exclusion Criteria**
Do NOT include:
- Articles older than 7 days (unless exceptionally significant)
- Duplicate stories (same event from multiple sources)
- Purely promotional content
- Unverified rumors or speculation
- Off-topic content (blockchain, general tech, etc.)

---

## 🔄 Weekly Workflow Steps

### **Phase 1: News Collection (Time: 30-45 minutes)**
1. Search each of the 8 major sources for AI news from past 7 days
2. Identify 20-25 candidate articles
3. Read and evaluate articles against selection criteria
4. Select 12-15 final articles
5. Save key information (title, source, date, URL, summary, key points)

### **Phase 2: Categorization (Time: 15-20 minutes)**
1. Assign each article to one of the 5 categories
2. Ensure balanced distribution across categories
3. Order articles within categories (most significant first)
4. Verify all required fields are complete

### **Phase 3: Podcast Script Writing (Time: 30-40 minutes)**
1. Write introduction with weekly themes
2. Draft segments for each category
3. Include specific details, statistics, and quotes
4. Write transitions between segments
5. Craft closing with key takeaways
6. Review for clarity, tone, and timing (aim for 7-10 minutes)

### **Phase 4: Podcast Generation (Time: 5-10 minutes)**
1. Generate audio using male voice
2. Save as WAV file with date-stamped filename
3. Verify audio quality and clarity
4. Copy to website assets folder

### **Phase 5: Website Update (Time: 15-20 minutes)**
1. Update `ai_news_data.json` with new content:
   - Update `week_ending` date
   - Update podcast information
   - Replace all articles with new content
2. Update podcast audio file reference
3. Test JSON validity
4. Preview locally if possible

### **Phase 6: Deployment (Time: 5-10 minutes)**
1. Navigate to website directory
2. Commit changes:
   ```bash
   cd /home/ubuntu/ai-news-website
   git add .
   git commit -m "Weekly update: [Date]"
   git push origin gh-pages
   ```
3. Wait for GitHub Pages build (1-3 minutes)
4. Verify deployment at live URL
5. Test podcast player and article links

### **Phase 7: Quality Check (Time: 10-15 minutes)**
1. Visit live website on desktop
2. Test on mobile device or responsive view
3. Play podcast to verify audio
4. Click 3-5 article links to verify sources
5. Check all categories display correctly
6. Verify footer copyright year

---

## 📁 File Structure

```
ai-news-website/
├── index.html                          # Main website page
├── style.css                           # Responsive styling
├── script.js                           # Dynamic content loader
├── ai_news_data.json                   # Weekly news data (UPDATE WEEKLY)
└── assets/
    └── ai_pulse_podcast_YYYY_MM_DD.wav # Weekly podcast (UPDATE WEEKLY)
```

---

## 🔧 Git Commands Reference

### **Standard Weekly Update**
```bash
cd /home/ubuntu/ai-news-website
git checkout gh-pages
git add ai_news_data.json assets/ai_pulse_podcast_*.wav
git commit -m "Weekly AI news update: December 28, 2025"
git push origin gh-pages
```

### **Emergency Rollback**
```bash
git log --oneline  # Find previous commit hash
git revert [commit-hash]
git push origin gh-pages
```

### **Check Deployment Status**
```bash
gh api repos/rogerbasler/ai-news-weekly/pages | grep status
```

---

## 📅 Schedule

**Execution Time:** Every Saturday at 10:00 AM GMT+4  
**Duration:** Approximately 2-3 hours total  
**Deadline:** Complete by Saturday 2:00 PM GMT+4  

---

## ✅ Quality Checklist

Before publishing, verify:

- [ ] 12-15 articles collected from 8 major sources
- [ ] All 5 categories have content
- [ ] Each article has: title, source, date, summary, key points, URL
- [ ] Podcast script written and reviewed
- [ ] Podcast audio generated (7-10 minutes)
- [ ] JSON file updated with correct dates
- [ ] Podcast file copied to assets folder
- [ ] Changes committed to git
- [ ] Pushed to gh-pages branch
- [ ] Website builds successfully
- [ ] Live site displays correctly
- [ ] Podcast player works
- [ ] Mobile responsive view tested
- [ ] All article links functional

---

## 🚨 Troubleshooting

### **Issue: GitHub Pages not updating**
**Solution:**
1. Check GitHub Actions status
2. Verify gh-pages branch exists
3. Ensure JSON file is valid
4. Wait 5 minutes and refresh

### **Issue: Podcast not playing**
**Solution:**
1. Verify audio file path in JSON
2. Check file exists in assets folder
3. Ensure WAV format is used
4. Test file locally first

### **Issue: Articles not displaying**
**Solution:**
1. Validate JSON syntax
2. Check browser console for errors
3. Verify category keys match script.js
4. Clear browser cache

### **Issue: Mobile layout broken**
**Solution:**
1. Test with browser dev tools
2. Check CSS media queries
3. Verify viewport meta tag
4. Test on actual mobile device

---

## 📈 Success Metrics

Track these metrics weekly:
- Number of articles collected
- Sources covered (target: 8/8)
- Podcast duration
- Website load time
- Mobile responsiveness score

---

## 🔄 Continuous Improvement

**Monthly Review:**
- Analyze which sources provide most valuable content
- Review category distribution balance
- Assess podcast length and pacing
- Gather user feedback (if available)
- Update source list as needed

**Quarterly Updates:**
- Refresh website design if needed
- Update color scheme or layout
- Add new features (RSS, newsletter, etc.)
- Review and update this SOP

---

## 📞 Support

**Repository:** https://github.com/rogerbasler/ai-news-weekly  
**Issues:** Create GitHub issue for technical problems  
**Documentation:** This file serves as primary reference  

---

**Document Version:** 1.0  
**Last Updated:** December 28, 2025  
**Next Review:** March 28, 2026
