let captchaButton = document.getElementById('captcha_reload');
let captchaText = document.getElementById('captcha');


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