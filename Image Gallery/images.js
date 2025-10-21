const textcontainer = document.querySelectorAll('.container')
const pic = document.querySelectorAll('.pic');
const text = document.querySelector('.text')

pic.forEach( (pics) => {
    pics.addEventListener('mouseover', () =>{
        pics.style.width = '100%';
        pics.style.transition = 'all 0.4s ease';
    })

    pics.addEventListener('mouseleave' , ()=>{
        pics.style.width = '20%';
    })
});

const pics = document.querySelectorAll('.pic');

pics.forEach(pic => {
  const top = pic.querySelector('.top-text');
  const bottom = pic.querySelector('.bottom-text');

  pic.addEventListener('mouseover', () => {
    pic.style.width = '30%';
    pic.style.transition = 'all 0.4s ease';

    top.style.transform = 'translateY(-15rem)';
    top.style.transition = 'transform 0.5s ease';

    bottom.style.transform = 'translateY(15rem)';
    bottom.style.transition = 'transform 0.5s ease';
  });

  pic.addEventListener('mouseleave', () => {
    pic.style.width = '20%';

    top.style.transform = 'translateY(-25rem)';
    bottom.style.transform = 'translateY(25rem)';
  });
});
