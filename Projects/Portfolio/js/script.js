$(window).on('scroll', scrollHandler);
function scrollHandler() {
    if ($(window).scrollTop() >= $('.about').position().top) {
        $('.menu-right button').css('color', '#4a4a4a');

        $('.skill').each(function() {
            var skill = $(this);
            var percentage = skill.find('.percentage').text();
            skill.find('.inner-bar').animate({width: percentage}, 1200);
        });
    } else {
        $('.menu-right button').css('color', 'white');
    }

    $('section').each(function() {
        if ($(window).scrollTop() >= $(this).position().top) {
            $(this).find('.vertical-center').animate({opacity: 1, top: '0px'}, 1000);
        }
    });
}

scrollHandler();

$('.menu-right button').on('click', function() {
    var id = $(this).attr('id');
    if (id == "about-btn") {
        $('html, body').animate({scrollTop: $('.about').position().top}, 500);
    } else if (id == "contact-btn") {
        $('html, body').animate({scrollTop: $('.contact').position().top}, 500);
    }
})