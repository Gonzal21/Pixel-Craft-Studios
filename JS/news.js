document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");
  
    // Fetch news from JSON file
    fetch("data/news.json")
      .then((response) => response.json())
      .then((data) => {
        // Clear the loading message
        newsContainer.innerHTML = "";
  
        // Create news cards
        data.forEach((news) => {
          const card = document.createElement("div");
          card.classList.add("news-card");
  
          card.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.summary}</p>
            <a href="${news.url}" target="_blank">Read More</a>
          `;
  
          newsContainer.appendChild(card);
        });
      })
      .catch((error) => {
        newsContainer.innerHTML = "<p class='loading-message'>Failed to load news.</p>";
        console.error("Error fetching news:", error);
      });
  });
  