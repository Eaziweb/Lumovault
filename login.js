'use strict'

const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
// const form = document.getElementById('form')    
const form = document.querySelector('.form');


const setError = function(element , message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    const inputError = inputControl.querySelector('.input');
    const labelError = inputControl.querySelector('.label')
    inputError.classList.add('input-error');
    labelError.classList.add('label-error');
    errorDisplay.innerText = message;
}
const setSuccess = function(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const inputError = inputControl.querySelector('.input');
    const labelError = inputControl.querySelector('.label')

    inputError.classList.remove('input-error');
    labelError.classList.remove('label-error');

  errorDisplay.innerText = '';
}


const inputValidation = function(){
    const userNameValue = userName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()


    if(userNameValue == ''){
        setError(userName, 'Enter your Username')
        }else{
            setSuccess(userName)
        }

        if(emailValue == ''){
            setError(email, 'Enter your email Address')
            }else if(!emailValue.includes('@')){
            setError(email, 'Enter Valid Email')
             
            }
            else{
                setSuccess(email)
            }
            if(passwordValue == ''){
                setError(password, 'Enter your password')}
                else{
                    setSuccess(password)
                }
}

form.addEventListener('submit', e => {
    e.preventDefault();
   if(inputValidation())    
 form.submit();
})