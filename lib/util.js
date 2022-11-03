//랜덤값 계산이 귀찮고 번거롭지만, 앞으로 자주 사용될 가능성이 높으므로, 함수로 정의해놓고 재사용하자
function getRandom(n){
    return parseInt(Math.random()*n); 
}


/* 범위가 있는 랜덤값*/

function getRandomWithRange(min, max){
    var result = min+parseInt(Math.random()*(max-min+1));
    return result;
}

/*-------------------------------------------------------------
게임 개발 시 사용될 충돌 체크 함수
-------------------------------------------------------------*/
function collisionCheck(me, you){

            //충돌여부 판단 : 1.북서 2.남서 3.북동 4.남동
            let result1= (me.x+me.width >=you.x) && (me.y+me.height >= you.y);
            let result2=(me.x+me.width>=you.x) && (me.y<=you.y+you.height);
            let result3=(me.x <= you.x+you.width) && (me.y+me.height >= you.y);
            let result4=(me.x <=you.x+you.width) && (me.y<=you.y+you.height);
    return result1&&result2&&result3&&result4;
}

/*-------------------------------------------------------------
날짜 관련 문자열 처리
날짜 두자리수로 처리하는 함수
n이 10보다 작으면, 앞에 '0' 문자열 부착
-------------------------------------------------------------*/

function getDateString(n){
    let str=n;
    if(n<10){
        str="0"+str;
    }
    return str;
}


function getAngle(x1, y1, x2, y2) {
    var rad = Math.atan2(y2 - y1, x2 - x1);
    return (rad*180)/Math.PI ;
}