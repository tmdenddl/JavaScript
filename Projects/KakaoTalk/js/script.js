$('#send').on('click',sendmybubble);
function sendmybubble(){
    var message = $('textarea').val().trim();//여기서 trim을 통해 messeage 의 양끝 공백을 제거해주면서 필터링을 해줍시다!
    var result = message.replace(/(\n|\r\n)/g, '<br>'); //여기서 슬래쉬가 요리조리 있는 부분은 생소하시겠지만 '정규표현식'이라고 하는 건데 구글에 한번 검색해보시면 더 깊은 공부가 되실 것 같아요 !! 
    if(message!==''){
        $('.chatbox').append('<div class="my-bubble bubble">'+ result +'</div>'); //우리가 결국 html코드로 변환해서 전송하기 때문에, message속에 있는 개행 문자열을 <br>태그로 전환해주는 작업을 위에서 replace라는 메서드와 정규표현식을 통해서 result 라는 변수에 담은거에요!
        $('textarea').val('');
    }
}

$('textarea').on('keyup', sendmessage);
function sendmessage(event){
    var key = event['key'];
    var val = $('textarea').val()
    if(key =='Enter' && !event.shiftKey){ //이 부분에서 shift키를 필터링해서 순수한 엔터일 때 sendmybubble을 실행 시켜주면되고
        sendmybubble();
    }
}
