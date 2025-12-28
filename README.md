# The AI Pulse - Weekly AI News

**Live Website:** https://rogerbasler.github.io/ai-news-weekly/

A weekly AI news podcast and website featuring curated news from 8 major sources, organized into 5 categories, with professional audio commentary.

## 🎙️ About

**The AI Pulse** is a weekly briefing on the most significant developments in artificial intelligence, hosted by Roger Basler de Roca. Each week, we collect, analyze, and present the top AI stories from leading technology news sources.

## 📰 News Sources

We collect news from 8 major outlets:
- OpenAI Blog
- TechCrunch
- WIRED
- VentureBeat
- The Verge
- MIT Technology Review
- Ars Technica
- Reuters

## 📂 Content Categories

Each week's content is organized into 5 categories:

1. **AI News of the Week** - Major announcements and breakthroughs
2. **AI Tools, Startups, and Innovations** - New products and funding
3. **Regulation and Ethics** - Policy and governance developments
4. **Voices and Perspectives** - Expert analysis and commentary
5. **Implications for Business & Society** - Economic and societal impact

## 🎯 Features

- **Professional Podcast** - 7-10 minute weekly audio briefing
- **Curated Articles** - 12-15 significant stories each week
- **Mobile Responsive** - Works on all devices
- **Always Updated** - New content every Saturday
- **Direct Links** - Access to original sources

## 🛠️ Technical Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Data:** JSON-based content management
- **Hosting:** GitHub Pages
- **Deployment:** Automated via GitHub Actions
- **Audio:** HTML5 audio player

## 📅 Update Schedule

New content published every **Saturday at 10:00 AM GMT+4**

## 📁 Repository Structure

```
ai-news-website/
├── index.html                    # Main website page
├── style.css                     # Responsive styling
├── script.js                     # Dynamic content loader
├── ai_news_data.json            # Weekly news data
├── assets/                       # Media files
│   └── ai_pulse_podcast_*.wav   # Weekly podcast audio
├── WEEKLY_AI_NEWS_SOP.md        # Standard operating procedure
└── README.md                     # This file
```

## 🔄 How to Update

### Weekly Content Update

1. Update `ai_news_data.json` with new articles
2. Add new podcast file to `assets/` folder
3. Commit and push changes:

```bash
git add ai_news_data.json assets/ai_pulse_podcast_*.wav
git commit -m "Weekly update: [Date]"
git push origin gh-pages
```

### Manual Deployment

The site automatically deploys when changes are pushed to the `gh-pages` branch. GitHub Pages typically builds within 1-3 minutes.

## 📋 Content Standards

Each article includes:
- Title
- Source and date
- Summary (2-3 sentences)
- Key points (3-5 bullets)
- Link to original article

## 🎨 Design

- **Color Scheme:** Purple gradient (#667eea to #764ba2)
- **Typography:** System fonts for optimal performance
- **Layout:** Single-page design with clear sections
- **Responsive:** Breakpoints at 768px and 480px

## 📊 Quality Standards

- Minimum 12-15 articles per week
- All 5 categories represented
- Articles from past 7 days
- Credible sources only
- Mobile-responsive design
- Functional podcast player

## 📖 Documentation

See [WEEKLY_AI_NEWS_SOP.md](WEEKLY_AI_NEWS_SOP.md) for detailed workflow documentation, including:
- News collection process
- Article selection criteria
- Podcast production standards
- Deployment procedures
- Troubleshooting guide

## 🤝 Contributing

This is a personal project by Roger Basler de Roca. For questions or suggestions, please open an issue.

## 📄 License

© 2025 Roger Basler de Roca. All rights reserved.

## 🔗 Links

- **Live Website:** https://rogerbasler.github.io/ai-news-weekly/
- **Repository:** https://github.com/rogerbasler/ai-news-weekly
- **Host:** Roger Basler de Roca

---

**Last Updated:** December 28, 2025  
**Current Episode:** Week Ending December 28, 2025
