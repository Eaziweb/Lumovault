'use strict'
const errorMessage = document.querySelectorAll('.error');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('c-password')


const submitBtn = document.getElementsByTagName('button')
// const inputs = document.querySelectorAll('.entry-area')
const labels = document.querySelectorAll('.label')
// submitBtn.addEventListener('submit' , function(){
const inputs = document.querySelectorAll('.entry-area')
const form = document.getElementById('form')
    

// })
const setError = function(element , message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    const inputError = inputControl.querySelector('.entry-area');
    const labelError = inputControl.querySelector('.label')
    inputError.classList.add('input-error');
    labelError.classList.add('label-error');
    errorDisplay.innerText = message;
}
const setSuccess = function(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const inputError = inputControl.querySelector('.entry-area');
    const labelError = inputControl.querySelector('.label')

    inputError.classList.remove('input-error');
    labelError.classList.remove('label-error');

  errorDisplay.innerText = '';
}

const inputValidation = function(){
   const firstNameValue = firstName.value.trim();
   const lastNameValue = lastName.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const ConfirmpasswordValue = confirmPassword.value.trim();

if(firstNameValue == ''){
setError(firstName, 'Enter your first name')
}else{
    setSuccess(firstName)
}

if(lastNameValue == ''){
    setError(lastName, 'Enter your last name')
    }else{
        setSuccess(lastName)
    }

    
if(emailValue == ''){
    setError(email, 'Enter your email Address')
    }else{
        setSuccess(email)
    }

    if(passwordValue == ''){
        setError(password, 'Enter your password')
        }else if(passwordValue.length < 8){
            setError(password, 'Password must be at least 8 characters')
        }
        else{
            setSuccess(password)
        }

        if(ConfirmpasswordValue == ''){
            setError(confirmPassword, 'Enter your password')
            }else if(passwordValue != ConfirmpasswordValue){
                setError(confirmPassword, 'Password does not match')
            }else{
                setSuccess(confirmPassword)
            }

            // return;

}
console.log(inputValidation);
form.addEventListener('submit', e => {
    e.preventDefault();
   if(inputValidation())    
 form.submit();
})


const changeLabel = function(input){
    // labels.forEach(label => label.addEventListener('click', () => label.classList.add('label-change')))
    const labelControl  = input.parentElement;
    const changeLabel = labelControl.querySelector('.label')
     changeLabel.classList.add('label-change')
}

const changeInput = function(label){
    // labels.forEach(label => label.addEventListener('click', () => label.classList.add('label-change')))
    const labelControl  = label.parentElement;
    const changeInput = labelControl.querySelector('.entry-area')
     changeInput.classList.add('inputColor')
}

// firstName.addEventListener('focus', )
inputs.forEach(input=> {
    input.addEventListener('focus', ()=> {
//   changeInput();
input.classList.add('inputColor')

changeLabel(input);

    })
})

labels.forEach(label=> {
    label.addEventListener('click', ()=> {
//   changeInput();
label.classList.add('label-change')

changeInput(label);

    })
})