const parent = document.querySelector(".container");
const task = document.querySelector('.task');
const input = document.getElementById('newtask');
const addbutton = document.getElementById('Addbutton');
const newtask = document.querySelector('.Newtask')


addbutton.addEventListener('click', () => {
    const text = input.value;
    if (text) {
        const moretasks = newtask.cloneNode(true);
        moretasks.style.display = 'flex';
        moretasks.querySelector('#TASK').innerText = text;
        parent.appendChild(moretasks);
        input.value = "";

        const removeBtn = moretasks.querySelector('.remove');
        removeBtn.addEventListener('click', () => {
            moretasks.remove();
        });

        const mainTask = moretasks.querySelector('.main-tasks');
        const check = moretasks.querySelector('.check');
        const checksvg = moretasks.querySelector('#Checkbox');
        mainTask.addEventListener('click', () => {
            moretasks.querySelector('#TASK').style.textDecoration = 'line-through';
            moretasks.querySelector('#TASK').style.color = '#b7b5b5';
            check.style.border = 'none';
            check.style.backgroundColor = 'orange';
            checksvg.style.display = 'block';
        });
    }
});
