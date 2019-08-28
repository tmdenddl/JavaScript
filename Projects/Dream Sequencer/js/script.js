var audioFile = [
    new Audio("audio/loop.mp3"), 
    new Audio("audio/01_kick_drum.wav"), 
    new Audio("audio/02_closed_hihat.wav"), 
    new Audio("audio/03_open_hihat.wav"), 
    new Audio("audio/04_clap.wav"), 
    new Audio("audio/05_snap.wav"), 
    new Audio("audio/06_crash.wav"), 
    new Audio("audio/07_tom1.wav"), 
    new Audio("audio/08_tom2.wav"), 
    new Audio("audio/09_tambourine.wav")];
      
$('#play-btn').on('click', function() {
    audioFile[0].play();
});

$('#stop-btn').on('click', function() {
    audioFile[0].pause();
    audioFile[0].currentTime = 0;
});

$(document).on('keydown', function(event) {
    if (Number(event['key'])){
        $('#cell' + event['key']).addClass('playing');
        audioFile[event['key']].play();
    }
});

$(document).on('keyup', function(event) {    
    if (Number(event['key'])){ 
        $('#cell' + event['key']).removeClass('playing'); 
        audioFile[event['key']].pause();
        audioFile[event['key']].currentTime = 0;
    } 
});

for (var i = 1; i < 10; i++){
    $('#cell' + i).on('mousedown', function() {
        $(this).addClass('playing');
        audioFile[this['id'][4]].play();
    });

    $('#cell' + i).on('mouseup', function() {
            $(this).removeClass('playing');
            audioFile[this['id'][4]].pause();
            audioFile[this['id'][4]].currentTime = 0;
    });
}