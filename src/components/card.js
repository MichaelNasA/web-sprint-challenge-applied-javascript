const Card = (article) => {

  const card = document.createElement('div');
  card.classList.add('card');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline;
  card.appendChild(headline);

  const author = document.createElement('div');
  author.classList.add('author');
  card.appendChild(author);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  author.appendChild(imgContainer);

  const authorPhoto = document.createElement('img');
  authorPhoto.src = article.authorPhoto;
  imgContainer.appendChild(authorPhoto);

  const authorName = document.createElement('span');
  authorName.textContent = `By ${article.authorName}`;
  author.appendChild(authorName);

  card.addEventListener('click', () => {
    console.log(article.headline);
  });

  return card; 

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {

  fetch('http://localhost:5001/api/articles')
    .then(response => response.json())
    .then(data => {
      // Extract the article objects from the data
      const articles = Object.values(data)[0];
      console.log("Cards for articles",articles);
      
      // Loop through each article and create a card for it
      articles.javascript.forEach(article => {
        const card = Card(article);
        //console.log(article);
        document.querySelector(selector).appendChild(card);
      });
      articles.bootstrap.forEach(article => {
        const card = Card(article);
        document.querySelector(selector).appendChild(card);
      });
      articles.technology.forEach(article => {
        const card = Card(article);
        document.querySelector(selector).appendChild(card);
      });
      articles.jquery.forEach(article => {
        const card = Card(article);
        document.querySelector(selector).appendChild(card);
      });
      articles.node.forEach(article => {
        const card = Card(article);
        document.querySelector(selector).appendChild(card);
      }); 
    })
    
    

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
