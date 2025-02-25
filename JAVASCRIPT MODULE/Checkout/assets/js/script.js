const form = document.querySelector('.form');

console.log(form);
form.addEventListener('submit',(value)=>{
    value.preventDefault();

    //phone validation
    const phone = document.querySelector('#phone');
    const phoneNumber = phone.value;
    const phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneNumber.match(phoneFormat)){
        document.getElementById('phone-err').remove()
    }
    else{
        document.getElementById('phone-err').innerText='Enter a valid number'
    }

    //email validation
    const email=document.querySelector('#email');
    const emailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const outemail = email.value;
    if(outemail.match(emailformat)){
        document.getElementById('email-err').remove()
    }
    else{
        document.getElementById('email-err').innerText='Enter a valid E-mail Id'
    }
    

    //card validation
    const cardvalid = document.querySelector('#debit');
    const cardvalue = cardvalid.value;
    var re16digit = /^\d{16}$/
    if(cardvalue.match(re16digit)){
        document.getElementById('debit-err').remove()
    }
    else{
        document.getElementById('debit-err').innerText='Enter a valid Card Number'
    }
})


//Payment Method
const debit = document.querySelector('#debited')
const credit = document.querySelector('#credited');
const card = document.querySelector('#card');
const select = document.querySelector('#payment')
const submit = document.querySelector('.submit');

select.addEventListener('change',()=>{
    const output = select.value;
    if(output=='debit'){
        card.innerText = "Debit Card Details"
        debit.style.display="block";
    }
    if(output=='credit'){
        card.innerText="Credit Card Details"
    }
})

select.addEventListener('change',()=>{
    const output = select.value;
    if(output=='credit'){
        card.innerText = "Credit Card Details"
        debit.style.display="block";
    }
})

select.addEventListener('change',()=>{
    const output = select.value;
    if(output==''){
        debit.style.display="none";
    }
})

select.addEventListener('change',()=>{
    const output = select.value;
    if(output=='cod'){
        debit.style.display="none";
    }
}
)
