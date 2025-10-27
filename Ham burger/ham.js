const navshowbtn = document.querySelector('.fa-bars');
const navbar = document.querySelector('.nav-bar');
const leavenavbar = document.querySelector('.fa-xmark');
const pages = document.querySelector('.home')

navshowbtn.addEventListener( 'click' , () =>{
    const navicon = document.querySelector('.resposive-nav-icon');
    navbar.style.display = 'flex';
    pages.style.transition = 'opacity 0.3s ease';
    pages.style.opacity = '0.4';
});

leavenavbar.addEventListener('click',() => {
    navbar.style.display = 'none';
        pages.style.opacity = '1';
});

const toppage = document.getElementById('top');
toppage.addEventListener('click' , () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

