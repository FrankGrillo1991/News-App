const { Description } = require("@headlessui/react");
const { LuFolderMinus } = require("react-icons/lu");

document.addEventListener('DOMContentLoaded', () => {
    const newsArticlesContainer = document.getElementById('news-articles');

    // Placeholder news data (replace with API calls)
    const newsData = [
        {
        title: 'Breaking News: Major Event Unfolds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '#'
        },
        {
            title: 'Tech Innovation Revolutionizes Industry',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: '#'
        },
        {
            title: 'Local Team Wins Championship',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            link: '#'
        }
    ];

    function displayNews(articles) {
        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('news-article');

            const title = document.createElement('h3');
            title.textContent = article.title;

            const description = document.createElement('p');
            description.textContent = article.description;

            const link = document.createElement('a');
            link.href = article.link;
            link.textContent = 'Read More';

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(link);
        })
    }

    // Call the function to display the placeholder news
    displayNews(newsData);
    // In a real application, you would fetch data from an API here:
    // fetch('YOUR_NEWS_API_ENDPOINT')
    // .then(response => response.json())
    // .then(data => {
        // Process the data and call displayNews(data.articles);
    //    console.log('Fetched News Data:', data)
     //   })
     //     .catch(error => console.error('Error fetching news:', error));
});