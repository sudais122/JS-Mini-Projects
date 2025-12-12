const playBtn = document.querySelector('.play-btn');
const stopbtn = document.querySelector('.stop-btn');
const Cover = document.querySelector('.cover');
const Audio  = document.getElementById('Audio');
const Tittle = document.querySelector('.Tittle');

const Tilawat = [
    {Tittle : 'Surat Fatiha', file: 'Audio/1.mp3'},
    {Tittle: 'Surat Takasur', file: 'Audio/2.mp3'},
    {Tittle: 'Surat kawsar', file: 'Audio/3.mp3'},
    {Tittle : 'Surat Nasar' ,file: 'Audio/4.mp3'},
    {Tittle: 'Surat falaq' ,file: 'Audio/5.mp3'},
    {Tittle: 'Surat Naas' , file: 'Audio/6.mp3'}
];

playBtn.addEventListener('click',()=>{
    playBtn.style.display = 'none';
    stopbtn.style.display = 'flex';
    Cover.classList.add('rotate');
    Audio.src = Tilawat[0].file;
    Tittle.innerText = Tilawat[0].Tittle;
    Audio.play();

});

stopbtn.addEventListener('click',()=>{
    playBtn.style.display = 'flex';
    stopbtn.style.display = 'none';
    Cover.classList.remove('rotate');
});
