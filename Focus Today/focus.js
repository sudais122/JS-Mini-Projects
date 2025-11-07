const input  = document.querySelector('.input');
const emptyinputs = function(){
    if(!input.value){
        const status = document.querySelector('.status');
        status.innerText = 'Please set all the 3 goals!';
    }
};