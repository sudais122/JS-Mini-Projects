const input  = document.querySelector('.input');
const emptyinputs = function(){
    if(!input.value){
        const status = document.querySelector('.status');
        status.innerText = 'Please set all the 3 goals!';
    }
};
emptyinputs();
const allinputs = document.querySelectorAll('.input-container');

allinputs.forEach((inputs) => {
    input.addEventListener('click' , () => {
        if(!(emptyinputs())){
            const check = document.querySelectorAll('.check');
            check.style.backgroundcolor = '#48A300';
            inputs.style.color = '#48A300';
        }
    })
});