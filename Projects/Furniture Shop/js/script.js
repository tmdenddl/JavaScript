$('#popup-trigger').on('click', openPopUp);

function openPopUp() {
    $('#popup').fadeIn(1000);
}

$('#close-btn').on('click', closePopUp);
$(document).on('keydown', closePopUp);

function closePopUp(event) {
    console.log(event);
    console.log(event['key']);
    if (event['type'] === 'click' || event['key'] === 'Escape') {
        $('#popup').fadeOut(1000);
    }
}