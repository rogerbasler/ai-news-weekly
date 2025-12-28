// Load AI news data and populate the page
async function loadAINews() {
    try {
        const response = await fetch('ai_news_data.json');
        const data = await response.json();
        
        // Update podcast section
        updatePodcastSection(data.podcast);
        
        // Update categories section
        updateCategoriesSection(data.categories);
        
    } catch (error) {
        console.error('Error loading AI news data:', error);
        document.getElementById('categories-container').innerHTML = 
            '<p style="color: white; text-align: center;">Error loading news data. Please try again later.</p>';
    }
}

function updatePodcastSection(podcast) {
    document.getElementById('podcast-title').textContent = podcast.title;
    document.getElementById('episode-date').textContent = `Episode: ${podcast.episode_date}`;
    
    const audioPlayer = document.getElementById('podcast-player');
    audioPlayer.src = `assets/${podcast.audio_file}`;
}

function updateCategoriesSection(categories) {
    const container = document.getElementById('categories-container');
    container.innerHTML = '';
    
    // Define category order
    const categoryOrder = [
        'ai_news_of_the_week',
        'ai_tools_startups_innovations',
        'regulation_and_ethics',
        'voices_and_perspectives',
        'implications_for_business_society'
    ];
    
    categoryOrder.forEach(categoryKey => {
        if (categories[categoryKey]) {
            const category = categories[categoryKey];
            const categoryElement = createCategoryElement(category);
            container.appendChild(categoryElement);
        }
    });
}

function createCategoryElement(category) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category.title;
    categoryDiv.appendChild(categoryTitle);
    
    category.articles.forEach(article => {
        const articleElement = createArticleElement(article);
        categoryDiv.appendChild(articleElement);
    });
    
    return categoryDiv;
}

function createArticleElement(article) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
    
    // Article title
    const title = document.createElement('h4');
    title.textContent = article.title;
    articleDiv.appendChild(title);
    
    // Article metadata
    const meta = document.createElement('div');
    meta.className = 'article-meta';
    meta.innerHTML = `
        <span><strong>Source:</strong> ${article.source}</span>
        <span><strong>Date:</strong> ${article.date}</span>
    `;
    articleDiv.appendChild(meta);
    
    // Article summary
    const summary = document.createElement('p');
    summary.className = 'article-summary';
    summary.textContent = article.summary;
    articleDiv.appendChild(summary);
    
    // Key points (if available)
    if (article.key_points && article.key_points.length > 0) {
        const keyPointsDiv = document.createElement('div');
        keyPointsDiv.className = 'key-points';
        
        const keyPointsTitle = document.createElement('h5');
        keyPointsTitle.textContent = 'Key Points:';
        keyPointsDiv.appendChild(keyPointsTitle);
        
        const keyPointsList = document.createElement('ul');
        article.key_points.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            keyPointsList.appendChild(li);
        });
        keyPointsDiv.appendChild(keyPointsList);
        articleDiv.appendChild(keyPointsDiv);
    }
    
    // Article link
    const link = document.createElement('a');
    link.href = article.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'article-link';
    link.textContent = 'Read Full Article →';
    articleDiv.appendChild(link);
    
    return articleDiv;
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadAINews);
