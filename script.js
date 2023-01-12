let captchaButton = document.getElementById('captcha_reload');
let captchaText = document.getElementById('captcha');

let form = document.querySelector(".form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("Password");
let captcha_element = document.getElementById("captcha_element");
let captcha = document.getElementById("captcha");



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateForm();

})

function validateForm(){
    if(name.value == ""){
        printError("nameError","Enter Your Name")
    }else{
        printError("nameError","")
    }

    if(email.value == ""){
        printError("emailError","Enter Your Email")
    }else{
        printError("emailError","")
    }

    if(password.value == ""){
        printError("passwordError","Enter Your Password")
    }else{
        printError("passwordError","")
    }

    if(captcha_element.value == ""){
        printError("captchaError","Enter Captcha")
    }
    else{
        if(captcha_element.value != captcha.innerText){
        printError("captchaError","Wrong Captcha, Try Again")
        }
        else{
        printError("captchaError","")
        }
    }

    if(name.value && email.value && password.value && captcha_element.value==captcha.innerText){
        alert("Sucessfully Registred")
    }
}



function printError(id,msg){
    let element = document.getElementById(id);
    element.innerText = msg;
}




let captchaLetters = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


captchaButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let result = generateCaptcha()
    captchaText.innerText = result

})

function generateCaptcha(){
    let captcha = '';
    for(let i=0; i<6; i++) {
        let index = Math.floor(Math.random() * captchaLetters.length)
        captcha+= captchaLetters[index];
    }
    return captcha;
    
}