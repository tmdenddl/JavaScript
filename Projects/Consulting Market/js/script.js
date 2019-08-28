$("#email-input").on('input', validateEmail);

function validateEmail() {
    var atPos = $('#email-input').val().indexOf('@');
    var emailSubstr = $('#email-input').val().substr(atPos);
    var dotPos = emailSubstr.indexOf('.');
    var dotSubstr = emailSubstr.substr(dotPos + 1);
    if (atPos !== -1 && dotPos !== -1 && dotSubstr !== '') {
        $('#submit-btn').css('background-color', "#4d79c2");
    } else {
        $('#submit-btn').css('background-color', "#9e9e9e");
    }
}