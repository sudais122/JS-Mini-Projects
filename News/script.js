const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const loading = document.querySelector('.loader');
const Error = document.querySelector('#error-section');

searchBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const query = input.value.trim();
    if(query){
        searchNews(query);
    }
});

async function searchNews(query){
    try{
          loading.style.display = 'block';
          const Respose = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=b40d7b749c264fa69c8399c16708ee19`);
          const data = await Respose.json();

          if(data.articles.length === 0){
            Error.style.display = 'block';
          }  else {
            Error.style.display = 'none';
          }
          loading.style.display = 'none';
          document.querySelector('.News').innerHTML = '';

          data.articles.forEach((element) =>{

          const NewsCard = document.createElement('div');
          NewsCard.classList.add('newscard');

          NewsCard.innerHTML = `
              <div class="newscard">
                  <div class="car-news-card">
                      <img src="${element.urlToImage}"class="card-img">
                      <div class="card-content">
                      <h3>${element.title}</h3>
                      <p>${element.description}</p>
                      <a href="${element.url}">Read More</a>
                  </div>
              </div>
          `;
          document.querySelector('.News').appendChild(NewsCard);
        })
    }catch(error){
        console.error("Error fetching search results:", error);
    }
}   

async function getdata(){

    try{
         loading.style.display = 'block';
         const Respose = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=b40d7b749c264fa69c8399c16708ee19");
         const data = await Respose.json();
         loading.style.display = 'none';
         data.articles.forEach((element) =>{

             const NewsCard = document.createElement('div');
             NewsCard.classList.add('newscard');

             NewsCard.innerHTML = `
                 <div class="newscard">
                     <div class="car-news-card">
                         <img src="${element.urlToImage}"class="card-img">
                         <div class="card-content">
                         <h3>${element.title}</h3>
                         <p>${element.description}</p>
                         <a href="${element.url}">Read More</a>
                     </div>
                 </div>
             `;
             document.querySelector('.News').appendChild(NewsCard);
             })
    }catch(error){
        console.error("Error fetching top headlines:", error);
    }
}
getdata();