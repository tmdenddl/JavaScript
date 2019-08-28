$(window).on('scroll', scrollHandler);
function scrollHandler() {
    var windowTop = $(window).scrollTop();
    var aboutTop = $('.about').position().top;
    var contactTop = $('.contact').position().top;

    var verticalArr = $('.vertical-center');

    if (windowTop < aboutTop) {
        $('.navbar .menu-right li button').css('color', '#fff');
        $(verticalArr[0]).animate({opacity: 1, top: '0px'}, 1000);
    } else if (windowTop < contactTop) {
        $('.navbar .menu-right li button').css('color', '#4A4A4A');
        $(verticalArr[1]).animate({opacity: 1, top: '0px'}, 1000);

        $('.percentage').each(function(index) {
            var percentage = this.innerHTML;
            percentage = percentage.substring(0,2) + '%';
            $($('.inner-bar')[index]).animate({width: percentage}, 1000);
        })
    } else if (windowTop >= contactTop){
        $('.navbar .menu-right li button').css('color', '#4A4A4A');
        $(verticalArr[2]).animate({opacity: 1, top: '0px'}, 1000);
    }
}

scrollHandler();

$('#about-btn').on('click', goToAbout);
function goToAbout() {
    var aboutTop = $('.about').position().top;
    $('html, body').animate({scrollTop: aboutTop}, 500);
}

$('#contact-btn').on('click', goToContact);
function goToContact() {
    var contactTop = $('.contact').position().top;
    $('html, body').animate({scrollTop: contactTop}, 500);
}
