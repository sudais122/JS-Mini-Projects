// Highlight effects for Amount
const amount = document.querySelector('.amount-main');
const euro = document.querySelector('.euro');
const amountinput = document.getElementById('amount-txt');
const PaymentBtn = document.getElementById('calculate-btn')

PaymentBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    let valid = true;
    const AmountError = document.querySelector('.amounterror');
     if(amountinput.value == ''){
        AmountError.innerText = 'This field is Required';

        euro.style.backgroundColor = 'red';
        euro.style.color = 'white';
        amount.style.border = '1px red solid';
        valid = false;
    }else if(amountinput.value < 3){
        AmountError.innerText = 'This digit must be 4';

        euro.style.backgroundColor = 'red';
        amount.style.border = '1px red solid';
        valid = false;
    }else{
        AmountError.innerText = ' ';
        euro.style.backgroundColor = '#E8F7FF';
        euro.style.color = 'gray';
        amount.style.border = '1px gray solid';
    };

    const TermError = document.querySelector('.TermError');
    const TermInput = document.getElementById('years');
    if (TermInput.value == '') {
        TermError.innerText = 'This field is Required'

        document.querySelector('.icon-yr').style.backgroundColor = 'red';
        document.querySelector('.icon-yr').style.color = 'white';
        document.getElementById('Terms').style.border = '1px solid red';
        valid = false;
    }else{
        TermError.innerText = "";
        document.querySelector('.icon-yr').style.backgroundColor = '#E8F7FF';
        document.querySelector('.icon-yr').style.color = 'gray';
        document.getElementById('Terms').style.border = '1px solid gray';
    }

    const IntrestInput = document.getElementById('interst');
    if(IntrestInput.value == ""){
        document.querySelector('.Intresterror').innerText = 'This field is Required';
        document.getElementById('Intrest-input').style.border = '1px solid red';
        document. querySelector('.icon').style.backgroundColor = 'red';
        document. querySelector('.icon').style.color = 'white';
        valid = false;
    }else{
        document.querySelector('.Intresterror').innerText = '';
        document.getElementById('Intrest-input').style.border = '1px solid gray';
        document. querySelector('.icon').style.backgroundColor = '#E8F7FF';
        document. querySelector('.icon').style.color = 'gray';
    }

    const Radio1 = document.getElementById('radio0');
    const Radio2 = document.getElementById('radio1');
    const RadioError = document.querySelector('.radioerror');

    if (!Radio1.checked && !Radio2.checked) {
        RadioError.innerText = 'This field is required';
        valid = false;
    } else {
        RadioError.innerText = '';
    }

    if (valid) {
        const Hide = document.querySelector('.results');
        const Show = document.querySelector('.mortgage-results-card ');
        Hide.style.display = 'none';
        Show.style.display = 'block';
    }else{
        Hide.style.display = 'block';
        Show.style.display = 'none'; 
    }
});

const years = document.getElementById('years');
const Intrest = document.getElementById('interst');

function calculateMonthlyRepayment(Totalamount, Totalyears, Totalintrest) {
  const monthlyRate = Totalintrest / 100 / 12;
  const totalPayments = Totalyears * 12;

  const monthlyPayment =
    Totalamount *
    (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  return monthlyPayment.toFixed(2);
}

PaymentBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const Totalamount = parseFloat(amountinput.value);
  const Totalyears = parseFloat(years.value);
  const Totalintrest = parseFloat(Intrest.value);

  const monthlyPayment = calculateMonthlyRepayment(Totalamount, Totalyears, Totalintrest);

  const totalRepayment = (monthlyPayment * Totalyears * 12).toFixed(2);

  document.getElementById('mortgage-amount').innerText = `£${monthlyPayment}`;
  document.getElementById('mortgage-total-amount').innerText = `£${totalRepayment}`;
});


const Clear = document.querySelector('.clear');

Clear.addEventListener( 'click', (e) => {
    document.getElementById('amount-txt').value = "";
    document.getElementById('interst').value = "";
    document.getElementById('years').value = "";
    document.getElementById('radio0').checked = false;
    document.getElementById('radio1').checked = false;
})