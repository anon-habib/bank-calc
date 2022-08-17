// step-1: added event handler with the login button.
document.getElementById('btn-submit').addEventListener('click', function () {

    // step-2: get the email address insite the email input field
    const emailField = document.getElementById('user-email');
    // .value used to get the inputed email from the input field
    const email = emailField.value;

    // step-3: get password
    const passwordField = document.getElementById('user-password');
    // .value used to get the inputed password from the input field
    const password = passwordField.value;

    // WARRING: DO NOT VERIFY email or password on the client side. (this is for begainer)
    // setp-4: verify email and password
    if (email === 'habib@bank.com' && password === 'habib') {
        location.href = 'pages/bank.html';
    }
    else {
        alert('Email or Password is invalid')
    };
});