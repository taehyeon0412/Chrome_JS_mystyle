const API_KEY = "84514662d9c10ba0c4c416fab80c99d5";

function onGeoOK(position){
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    /*onGeoOK함수에 console.log(position)값을 넣으면 많은 정보를 주는데 
    그중 위도와 경도를 받아온다*/
    console.log(position);
    console.log(`너는 ${lat},${lon}에 살고있구나`);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    //API주소 넣기
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const sity = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        sity.innerText = data.name;
        weather.innerText = `${Math.floor(data.main.temp)}도 / ${data.weather[0].main}`;
        console.log(weather,sity);
    });
    //fetch => 자바스크립트가 대신 url을 부를 수 있게 한다
    //then(response => response.json()) => json()의 응답을 나타냄
    //then(data =>{console.log(date.name,date.weather)}) => json본문의 필요한 데이터를 가져옴

}

function onGeoError(){
    alert("위치정보를 찾을 수 없습니다.")
}






navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
//위치좌표주는것
//성공,실패 2가지 경우를 받는다