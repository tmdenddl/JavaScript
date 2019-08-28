$('#email-input').on('input', active);
$('#password-input').on('input', active);

function active() {
    var emailInput = $('#email-input').val();
    var passwordInput = $('#password-input').val();

    if (emailInput === "" || passwordInput === "") {
        // alert("Inactive");
        $('#submit-btn').css('background-color', '#9B9B9B');
    } else {
        // alert("Active");
        $('#submit-btn').css('background-color', '#1BBC9B');
    }
}