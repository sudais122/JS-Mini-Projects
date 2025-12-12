const Cover = document.querySelector('.cover img');
const Audio  = document.getElementById('Audio');
const Tittle = document.querySelector('.Tittle');
const playBtn = document.querySelector('.play-btn');
const stopbtn = document.querySelector('.stop-btn');

const Tilawat = [
    {Tittle : 'Surat Fatiha', file: 'Audio/1.mp3', pic: 'Pictures/1.jpeg'},
    {Tittle: 'Surat Takasur', file: 'Audio/2.mp3', pic: 'Pictures/2.jpeg'},
    {Tittle: 'Surat kawsar', file: 'Audio/3.mp3', pic: 'Pictures/3.jpeg'},
    {Tittle : 'Surat Nasar' ,file: 'Audio/4.mp3', pic: 'Pictures/4.jpeg'},
    {Tittle: 'Surat falaq' ,file: 'Audio/5.mp3', pic: 'Pictures/5.jpeg'},
    {Tittle: 'Surat Naas' , file: 'Audio/6.mp3', pic: 'Pictures/6.jpeg'}
];



const Control = document.querySelector('.controls');
const Progressbar = document.querySelector('.progress-bar');
const ProgressBall = document.querySelector('.progress-ball');
const Progressarea = document.querySelector('.progress-area');

function loadSong() {
    Audio.src = Tilawat[currindex].file;
    Tittle.innerText = Tilawat[currindex].Tittle;
    Cover.src = Tilawat[currindex].pic;
}

let TimeUpdate = function(){
    Audio.addEventListener('timeupdate' , ()=>{
        if(Audio.duration){
            let progress = (Audio.currentTime / Audio.duration)*100;

            Progressbar.style.width = progress + '%';
            ProgressBall.style.left = progress + '%';

            Progressarea.addEventListener('click' , (event)=>{

                let width = Progressarea.clientWidth;
                let ClickX = event.offsetX;

                let newtime = (ClickX / width) * Audio.duration;

                Audio.currentTime = newtime;

                let progress = (newtime / Audio.duration) * 100;
                Progressbar.style.width = progress + '%';
                ProgressBall.style.left = progress + '%';
            });
        }
    });
};

let currindex = 0;
loadSong();
TimeUpdate();

Control.addEventListener('click',(event)=>{
    if(event.target.classList.contains('play-btn')){
        playBtn.style.display = 'none';
        stopbtn.style.display = 'flex';

        Cover.classList.add('rotate');
        Audio.play();
    };

    if(event.target.classList.contains('stop-btn')){
        playBtn.style.display = 'flex';
        stopbtn.style.display = 'none';
        Cover.classList.remove('rotate');
        Audio.pause();
    }

    if(event.target.classList.contains('next-btn')){
        currindex++;
        loadSong();
        TimeUpdate();

        playBtn.style.display = 'none';
        stopbtn.style.display = 'flex';
        Cover.classList.add('rotate');
        Audio.play();
    }

    if(event.target.classList.contains('pre-btn')){
        currindex--;
        loadSong();
        TimeUpdate();

        playBtn.style.display = 'none';
        stopbtn.style.display = 'flex';
        Cover.classList.add('rotate');
        Audio.play();
    }
})

Audio.addEventListener('ended' ,()=>{
    Cover.classList.remove('rotate');
        playBtn.style.display = 'flex';
        stopbtn.style.display = 'none';

})