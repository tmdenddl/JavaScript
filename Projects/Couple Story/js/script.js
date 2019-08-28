 // 이벤트 등록
 $('#calculate').on('click', calculateDate);

 function calculateDate() {
   // Date 객체 만들기
   var now = new Date();
   var startDate = new Date($('#start').val());

   // 날짜 차이 계산
   var betweenDays = (now.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;

   // 계산한 날짜를 페이지에 표시
   $('#day-count').text(Math.floor(betweenDays) + 1);

   // 잘못된 입력일 경우 메시지 출력
   if ($('#start').val() === '') {
     alert("날짜를 입력해주세요");
   }
 }
 
/*
$('#calculate').on('click', buttonClicked);

function buttonClicked() {
    if ($('#start').val() == "") {
    alert('시작 날짜를 입력해주세요!');
    }

    var startDate = new Date($('#start').val());
    var currentDate = new Date();
    var days = Math.ceil((currentDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24) + 1;

    $('#day-count').text(days);
}
*/