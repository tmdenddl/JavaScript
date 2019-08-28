// event handling
$('#menu a').on('click', selectMenu); // happening over specific part of the document
$(document).on('keydown', selectMenu); // happening over the whole document

function selectMenu(event) {
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
  $('#photo').hide();
  $('#photo').attr('src', 'images/' + targetId + '.png');
  $('#photo').fadeIn(1000);
  $('#menu a').css('font-weight', 'normal');
  $('#' + targetId).css('font-weight', 'bold');
}


$('#photo').on('mouseenter', mouseEnterPhoto);
$('#photo').on('mouseleave', mouseLeavePhoto);

function mouseEnterPhoto() {
  $('#photo').css('box-shadow', '5px 10px');
}

function mouseLeavePhoto() {
  $('#photo').css('box-shadow', 'none');
}

