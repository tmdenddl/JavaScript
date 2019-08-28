// event handling
$('#menu a').on('click', selectMenu); // happening over specific part of the document

$('#photo').on('mouseenter', mouseEnterPhoto);
$('#photo').on('mouseleave', mouseLeavePhoto);

$(document).on('keydown', selectMenu); // happening over the whole document

function selectMenu(event) {
  // var targetId = event.currentTarget.id;
  var targetId = '';
  if (event.type === 'click') {
    targetId = event.currentTarget.id;
  } else if (event.type === 'keydown') {
    switch (event.key) {
      case '1': 
        targetId = 'home';
        break;
      case '2':
        targetId = 'seoul';
        break;
      case '3':
        targetId = 'tokyo';
        break;
      case '4':
        targetId = 'paris';
        break;
      default:
        return;
    }
  }

  $('#photo').attr('src', 'images/' + targetId + '.png');

  $('#menu a').css('font-weight', 'normal');
  $('#' + targetId).css('font-weight', 'bold');
}

/*
// event handling
$('#home').on('click', clickHome); // happening over specific part of the document
$('#seoul').on('click', clickSeoul);
$('#tokyo').on('click', clickTokyo);
$('#paris').on('click', clickParis);

// event handlers
function clickHome() {
  // document.getElementById('photo').src = 'images/home.png';
  // document.getElementById('Home').style.fontWeight = 'bold';
  // document.getElementById('Seoul').style.fontWeight = 'normal';
  // document.getElementById('Tokyo').style.fontWeight = 'normal';
  // document.getElementById('Paris').style.fontWeight = 'normal';  
  $('#photo').attr('src', 'images/home.png');

  $('#home').css('font-weight', 'bold');
  $('#seoul').css('font-weight', 'normal');
  $('#tokyo').css('font-weight', 'normal');
  $('#paris').css('font-weight', 'normal');
}

function clickSeoul() {
  $('#photo').attr('src', 'images/seoul.png');

  $('#home').css('font-weight', 'normal');
  $('#seoul').css('font-weight', 'bold');
  $('#tokyo').css('font-weight', 'normal');
  $('#paris').css('font-weight', 'normal');
}

function clickTokyo() {
  $('#photo').attr('src', 'images/tokyo.png'); 

  $('#home').css('font-weight', 'normal');
  $('#seoul').css('font-weight', 'normal');
  $('#tokyo').css('font-weight', 'bold');
  $('#paris').css('font-weight', 'normal');
}

function clickParis() {  
  $('#photo').attr('src', 'images/paris.png');

  $('#home').css('font-weight', 'normal');
  $('#seoul').css('font-weight', 'normal');
  $('#tokyo').css('font-weight', 'normal');
  $('#paris').css('font-weight', 'bold');
}
*/

function mouseEnterPhoto() {
  $('#photo').css('box-shadow', '5px 10px');
}

function mouseLeavePhoto() {
  $('#photo').css('box-shadow', 'none');
}

function processKeyEvent(event) {
  if (event['key'] === '1') {
    clickHome();
  } else if (event['key'] === '2') {
    clickSeoul();
  } else if (event['key'] === '3') {
    clickTokyo();
  } else if (event['key'] === '4') {
    clickParis();
  }
}
