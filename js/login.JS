const loginForm = document.querySelector(`#login-form`);
const loginInput = document.querySelector(`#login-form input`);
const greeting = document.querySelector(`#greeting`);
const logoutBtn = document.querySelector(`#logout-btn`);

const HIDDEN_CLASS_NAME = `hidden`;
const LOCAL_USERNAME_KEY = `username`;

function onLoginSubmit(event){
    event.preventDefault(); 
    //preventDefault 브라우저가 새로고침 하는것을 막아줌
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    //loginForm에  hidden클래스를 더해줘서 화면에서 숨김
    const loginInputValue = loginInput.value;
    //loginInput의 값을 변수에 저장
    console.log(loginInputValue);
    localStorage.setItem(LOCAL_USERNAME_KEY,loginInputValue);
    //localStorage에 key=username , value=loginInputValue을 저장함

    paintGreetings(loginInputValue);
    //h1(greeting)에 있는 hidden 클래스를 없애주면 화면에서 나타남
    //paintGreetings안에 인자로 loginInputValue를 받아옴
}

function paintGreetings(username){
    greeting.innerText = `Hello!! ${username}`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
    //중복되는 구간을 함수로 만들어 코드수를 줄임
    logoutBtn.classList.remove(HIDDEN_CLASS_NAME);
    //로그아웃 버튼이 생겨남
}


const savedUsername = localStorage.getItem(LOCAL_USERNAME_KEY);
//변수 savedUsername은 localStorage에 있는 username을 가져온다(getItem)


if(savedUsername === null){
    //savedUsername === null이면 login-form을 보여준다
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    //loginForm을 submit할때 onLoginSubmit 함수가 실행된다.
} else{
    //그렇지 않으면 greeting(h1)을 보여준다
    paintGreetings(savedUsername);
    //greeting이 나타나면서 savedUsername값을 innerText로 보여준다
}

function removeStorage(){
    localStorage.removeItem("username");
    window.location.reload();
    //localStorage에 있는 username을 삭제하고 새로고침한다.
}

logoutBtn.addEventListener("click",removeStorage);
//로그아웃버튼을 누르면 removeStorage 함수가 실행된다.


//1.localStorage에 저장된 키 값이 있는지 확인한다.
//2.저장된값이 없으면 loginForm이 나타나고 loginForm을 submit할때 onLoginSubmit 함수가 실행된다.
//3.onLoginSubmit함수가 실행된후 다시 if문으로 돌아와서 localStorage에 저장된 키 값이 있는지 확인한다.
//4.localStorage에 저장된값이 있으면 //greeting이 나타나면서 savedUsername값을 innerText로 보여준다


//주석 처리방법