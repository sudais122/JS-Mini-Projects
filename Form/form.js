const firstname = document.querySelector('#first-name');
const lastname = document.querySelector('#last-name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const checkbox = document.querySelector('.checkbox input'); 
const error = document.getElementsByTagName('p');
const btn = document.getElementById('btn');

const showErrors = () => {
    let valid = true;

    if (!firstname.value) {
        error[0].style.display = 'block';
        firstname.style.border = '1px solid #ff0000';
        valid = false;
    } else {
        error[0].style.display = 'none';
        firstname.style.border = '1px solid #ccc';
    }

    if (!lastname.value) {
        error[1].style.display = 'block';
        lastname.style.border = '1px solid #ff0000';
        valid = false;
    } else {
        error[1].style.display = 'none';
        lastname.style.border = '1px solid #ccc';
    }

    if (!email.value) {
        error[2].style.display = 'block';
        email.style.border = '1px solid #ff0000';
        valid = false;
    } else {
        error[2].style.display = 'none';
        email.style.border = '1px solid #ccc';
    }

    if (!message.value) {
        error[3].style.display = 'block';
        message.style.border = '1px solid #ff0000';
        valid = false;
    } else {
        error[3].style.display = 'none';
        message.style.border = '1px solid #ccc';
    }
    if (!checkbox.checked) {
        error[4].style.display = 'block';
        valid = false;
    } else {
        error[4].style.display = 'none';
    }

    return valid;
};

const showConfirmation = () => {
    const confirmBox = document.querySelector('.send-message');
    confirmBox.style.marginTop = '0px';
    confirmBox.style.transition = '0.4s ease';

    setTimeout(() => {
        hideConfirmation();
    }, 5000);
};

const hideConfirmation = () => {
    const confirmBox = document.querySelector('.send-message');
    confirmBox.style.marginTop = '-100px';
    confirmBox.style.transition = '0.4s ease';
};

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const isValid = showErrors();
    if (isValid) {
        showConfirmation();
        firstname.value = '';
        lastname.value = '';
        email.value = '';
        message.value = '';
        checkbox.checked = false;
    }
});
