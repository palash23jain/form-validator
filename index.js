const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error msg
function showError(input, msg){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = msg;
}

// Show success msg
function showSuccess(input){    
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//Check required fields

function checkFieldRequired(inputParam){
    inputParam.forEach(input=>input.value?showSuccess(input):showError(input, `${getFieldName(input)} is required`));
}

//Get field name

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check email is valid
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e){
    e.preventDefault();
   checkFieldRequired([username, email, password, password2]);
});
