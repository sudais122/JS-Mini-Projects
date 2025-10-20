
const clock = document.querySelector('.Clock');
const hr = document.getElementById('hr')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

setInterval( () =>{
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    sec.style.transform = `rotate(${seconds * 6}deg)`;
    min.style.transform = `rotate(${minutes * 6 + seconds * 0.1}deg)`;
    hr.style.transform = `rotate(${hours * 30 + minutes * 0.5}deg)`;
},1000)

