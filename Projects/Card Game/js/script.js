$('#even-btn').on('click', function(){
    $('.card').removeClass('selected');
    $('.card').each(function(){
    if(Number($(this).text()) % 2 === 0){
        // console.log($(this).text());
        $(this).addClass('selected');
    }
    });
});

$('#odd-btn').on('click', function(){
    $('.card').removeClass('selected');
    $('.card').each(function(){
    if(Number($(this).text()) % 2 === 1){
        // console.log($(this).text());
        $(this).addClass('selected');
    }
    });
});