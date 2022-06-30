const clock = document.querySelector("h2#clock");


function getClock(){
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = Hours<13 ? `오전 ${Hours}:${Minutes}:${Seconds}` : `오후 ${Hours-12}:${Minutes}:${Seconds}`
    // 삼항연산자를 써서 date.getHours()<13 이면 오전 그렇지 않으면 오후로 조건을 검
    //오후에는 24시간 기준이니 hours에 -12를 해준다 
}

getClock(); 
//setInterval은 n초마다 함수를 실행하니 새로고침 하면 n초가 비어서 바로 나오게하려고 씀
setInterval(getClock,1000);








//setInterval(함수이름, 시간);
//setInterval은 반복적으로 n초마다 함수를 실행시킨다.
//setTimeout(함수이름, 시간);
//setTimeout은 n초 뒤에 함수를 실행시킨다.

//시간을 01초로 만들기 위해서는 padStart 함수를 이용하여야하고 
//string만 padStart를 쓸 수 있기 때문에 숫자들을 string으로 만들어준다

//string.padStart(최대길이,추가할문자) 시작에 붙임
//string.padEnd(최대길이,추가할문자) 끝에 붙임
//ex) "1".padStart(2,3) ==> 31
//ex) "1".padStart(2,"일") ==> 일1