// nav bar functionality for mobile menu toggle
const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});


const search  = document.querySelector('.search-input');
const searchbtn = document.querySelector('.search-btn');

const Seachvalue = search.value.trim();
// news api fetch and display

async function getdata(){
    const Respose = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=b40d7b749c264fa69c8399c16708ee19");
    const data = await Respose.json();

    data.articles.forEach((element) =>{

        console.log(element.title);
        console.log(element.description);
        console.log(element.url);
        console.log(element.urlToImage);
    })

}
getdata();