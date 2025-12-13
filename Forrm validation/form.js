const Fullname = document.getElementById('full-name');
const PhoneNo = document.getElementById('phone-no');
const EmailAdress = document.getElementById('email-id');
const MEssage = document.getElementById('your-message');
const submit = document.querySelector('.submit-btn');

submit.addEventListener('click', (event)=>{

    const name  = Fullname.value.trim();
    const Phone = PhoneNo.value.trim();
    const Email = EmailAdress.value.trim();
    const Message = MEssage.value.trim();
    let valid = true;
    if(name === ''){
        event.preventDefault();
        document.getElementById('full-nameError').innerText = 'Name is reuired';
        valid = false;
    }else if(!(name.includes(" "))){
        event.preventDefault();
        document.getElementById('full-nameError').innerText = 'Write full name';
        valid = false;
    }else{
        event.preventDefault();
        document.getElementById('full-nameError').innerText = '';
        document.getElementById('full-nameCorrect').style.display = 'flex';
    }
    if (Phone === '') {
        event.preventDefault();
        document.getElementById('phone-noError').innerText = 'Phone no is required';
        valid = false;
    }else if(Phone.length !== 11){
        event.preventDefault();
        document.getElementById('phone-noError').innerText = 'must be 11 digit';
        valid = false;
    }else{
        document.getElementById('phone-noError').innerText = ' ';
        document.getElementById('phone-noCorect').style.display = 'flex';
    }

    console.log(Email);
    if (Email === '') {
        event.stopPropagation();
        document.getElementById('email-idError').innerText = 'Email is required';
        valid = false;
    }else if(!(Email.includes('@') && Email.includes('.com'))){
        event.stopPropagation();
        document.getElementById('email-idError').innerText = 'Invalid Email';
        valid = false;
    }else{
        document.getElementById('email-idError').innerText = '';
        document.getElementById('emailCorrect').style.display = 'flex';
    }
    
    if (Message === '') {
        event.stopPropagation();
        document.getElementById('messageError').innerText = 'Message is required';
        valid = false;
    }else if(Message.length < 30){
        event.stopPropagation();
        document.getElementById('messageError').innerText = 'Min 30 Character Requied';
        valid = false;
    }else{
        document.getElementById('messageError').innerText = '';
        document.getElementById('msgCorrect').style.display = 'flex'; 
    }
    if(valid){

    const name  = Fullname.value = '';
    const Phone = PhoneNo.value = '';
    const Email = EmailAdress.value = '';
    const Message = MEssage.value = '';

    document.getElementById('msgCorrect').style.display = 'none'; 
    document.getElementById('emailCorrect').style.display = 'none';
    document.getElementById('phone-noCorect').style.display = 'none';
    document.getElementById('full-nameCorrect').style.display = 'none';
    }
});