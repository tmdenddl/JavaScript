$('#btn1').on('mousedown', blueDown);
function blueDown() {
    $('.blue').addClass('down');
    setTimeout(flagUP, 1000);
}

$('#btn2').on('mousedown', whiteDown);
function whiteDown() {
    $('.white').addClass('down');
    setTimeout(flagUP, 1000);
}

$('#btn3').on('mousedown', blueDotDown);
function blueDotDown() {
    $('.blue.dot').addClass('down');
    setTimeout(flagUP, 1000);
}

function flagUP() {
    $('.flag').removeClass('down');
}