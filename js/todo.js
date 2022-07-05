const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];
/*let을 하는 이유 : const로 고정을 해버리면 새로고침시 
이전에 있던 값들에 새로운값이 더해지면 추가되는것이 아닌 덮어씌워지기때문에 
let으로 업데이트를 가능하게 해놓는다*/

const TODOS_KEY = "toDos"

function saveToDos_ft(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
  //localStorage에 key:toDos value:toDos 을 저장하는함수
  //JSON.stringify() = 오브젝트,배열등등 모든 JS코드를 string으로 바꿔준다.
  //JSON.parse() = string을 오브젝트,배열등등으로 바꿔준다.
}


function deleteToDo(deleteToDo){
  const li = deleteToDo.target.parentElement; 
  li.remove();
}
/*x버튼을 눌렀을때 작동하는 함수
어떤 버튼을 클릭했는지 모르니까 target.parentElement(클릭된 element의 부모)
로 위치를 알아내서 지워주는 코드를 쓴다.
*/


function createToDo(newTodo){
    const li = document.createElement("li");
    //html 요소에 li를 추가함
    li.id = newTodo.id;
    /*li의 id에 newTodoOBJ의 id를 넣어준다
    삭제시 deleteToDo함수가 돌아가고 deleteToDo.target.parentElement;로
    삭제하고싶은 li의 id를 알수있게됨
    */
    const span = document.createElement("span");
    //html 요소에 li를 추가함
    span.innerText = newTodo.text;
    /* newTodo.text => newTodoOBJ의 값이 text,id 2개의 값이 있기때문에
    text값만 따로 빼와서 innerText에 넣어준다
    */
    const button = document.createElement("button");
    //html 요소에 button을 추가함
    
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    //버튼을 눌렀을때 deleteToDo함수가 실행되고 li가 삭제됨
    li.appendChild(span);
    li.appendChild(button);
    //li(부모노드)에 span(자식노드)를 추가함
    ////li(부모노드)에 button(자식노드)를 추가함
    todoList.appendChild(li);
    //ul(부모노드)에 li(자식노드)를 추가함 리스트가 생김
}

/*createToDo함수는 ToDoSubmit함수가 실행될때마다
html 요소에 li와 span을 추가하고 span에 사용자가 input에 적은
text값을 기록한다.
ul에 자식노드로 li를 생성하고 리스트가 생기게 한다.
*/


function ToDoSubmit(submitEvent){
    submitEvent.preventDefault();
    //submit할때 페이지 새로고침 막아줌
    const newTodo = todoInput.value;
    //todoInput의 값이 없어지기전에 변수에 저장해준다
    todoInput.value = "";
    //submit할때 text상자안의 값이 비게한다
    const newTodoOBJ = {
      text: newTodo,
      id: Date.now(), //랜덤id
    };
    /*같은 값이 localStorage에 저장되어 있으면 어떤것을 지워야될지 모르기때문에
    각각의 값을 오브젝트로 만들어 localStorage에 저장을한다*/
    toDos.push(newTodoOBJ);
    /*newTodoOBJ를 toDos라는 배열에 집어넣는다 
     배열에 넣는 이유 : 로컬스토리지에 저장하여 새로고침해도
     todo-list의 값이 없어지지 않게 하기 위해서*/
    createToDo(newTodoOBJ);
    //const newTodoOBJ값을 createToDo함수에 넣고 실행한다.  
    saveToDos_ft();
}


todoForm.addEventListener("submit",ToDoSubmit);
//todoForm을 submit할때 ToDoSubmit함수가 실행

const savedToDos = localStorage.getItem(TODOS_KEY);
//localStorage에 있는 키값을 가져온다

/*아무것도 입력하지 않았을때는 TODOS_KEY의 값이 null이기 때문에 
그것을 if문으로 해결해준다*/


if(savedToDos !== null){
  //savedToDos(변수)의 값이 null이 아닐때

  const parsedToDos = JSON.parse(savedToDos);
  //JSON.parse() = string을 오브젝트,배열등등으로 바꿔준다.
  toDos = parsedToDos;
  /*parsedToDos값을 toDos배열에 넣어주면 새로고침시
    빈값으로 시작하지않고 이전에 데이터를 가지고 시작한다*/
  parsedToDos.forEach(createToDo);
  /*forEach는 for문과 마찬가지로 반복적인 기능을 수행할 때 사용함
  배열에 있는 각각의 아이템 실행 ex)localStorage에 저장된값이 8개면 8번실행
  */

 /* 기본적인 사용법
 const arr = [0,1,2,3,4,5,6,7,8,9,10];

arr.forEach(function(element){
    console.log(element);   // 0 1 2 3 4 5 6 7 8 9 10
});
// 혹은 arrow 함수 가능
arr.forEach(element => console.log(element));
*/
}
/* parsedToDos.forEach(createToDo);
=> 위에서 사용자가 입력한 것을 화면에 나타내주는 함수를 만들었기때문에
복잡한 코드 필요없이 forEach에 createToDo함수를 넣어주면 
forEach기능때문에 새로고침해도 localStorage에 있는 값을 다시 불러올수 있다
*/





/* html 해야될것
    html에 form태그로 구조를 만들어준다. 
   나중에 JS에서 만지기쉽게 기초작업
   form자체는 submit이라는 기본 기능을 내장하는 하나의 묶음밖에 되지않는다.
   이용자가 todo-list에 무언가 기입해야되기 떄문에 form안에 input태그를 넣어 text를 입력할 수 있게 한다.
   그 밑에 ul태그를 생성하여 todo-list에 작성 된 text가 저장 및 나열될 수 있게 한다.
 --------------
 * JS 해야될것
   submit할때 새로고침을 막아준다
   text상자안에 글을 작성하고 submit을 하고 난 후 text상자가 비어있게 해준다
   이용자가 입력한 텍스트를 저장해야 나중에 ul태그 안에 사용할 수 있기 때문에 toDoInput.value = ""; 로 기입한 텍스트가 사라지기 이전에
    const newTodo = toDoInput.value; 를 정의하여 기입한 텍스트가 newTodo라는 값에 저장되게 한다.

    앞의 세 가지 동작(새로고침 방지, 텍스트 저장, text상자비우기)는 한번에 이루어지는 세트이기때문에 효율성 및 편의를 위해 함수로 묶어준다.
    function handleTodoSubmit() {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    }




 todo-list점검
  1. input값을 넣고 submit이 되었을때 기존에 있던 값을 
     새로고침했을때 불러올 수 있는가

  2. 새로고침 후 기존에 있던 값에 덧씌워지는 것이 아닌 
     기존에 있던 값 + 새로운 값으로 되는가

  3. 삭제 버튼을 눌렀을때 화면상 리스트와 local storage의 데이터가 같이 삭제가 되는가
*/





/*1. html 돌아보기
우린 이미 html에 todo-list라는 id를 가진 ul태그를 작성해 놓았고, 새로운 텍스트가 입력 될 때마다 그 안에 li 태그를 생성하여 나열하고 싶다. 이것을 JS에서 관여할 수 있도록 코드를 짜는 것이 필요하다.

2. JavaScript - todo list를 웹페이지에서 시각화하기
1) const li = document.createElement("li"); // li를 입력했을 때 html에서 li태그를 생성하게 명령한다.
2) const span = document.createElement("span"); // span이 정확히 왜 필요한지는 아직 잘 모르겠지만, 니꼬의 말에서 유추해보면 나중에 리스트 삭제 시 필요한가보다. 아무튼 span이라는 const가 html 내에서 span태그를 만들게끔 한다.
3) li.appendChild(span); // li 태그 안에 자식을 span 태그로 하게끔 한다. 아직 span을 굳이 왜 만드는지는 정확히 이해 x


4) span.innerText = newTodo; // span이라는 태그 안의 텍스트가 앞에서 설정한 new Todo라는 객체가 되도록 한다. newTodo는 텍스트에 입력한 value값
ex) 텍스트 상자 안에 "안녕하세요"라고 입력하면 newTodo는 "안녕하세요"이므로 span안의 텍스트는 "안녕하세요"가 될 것이다.
5) toDoList.appendChild(li); // html의 ul 태그 안에 li 를 속하게 한다. (span을 li에 속하게 한 것과 동일)

3. 함수 piantTodo(newTodo)를 함수 handleTodoSubmit()에 추가
우리가 텍스트를 기입하고 submit 할 때마다 원하던 기능들을 실행시키기 위해 위에서 만든 함수 paintTodo(nweTodo)를 함수 handleTodoSubmit()에 추가한다.
기존 함수 handleToDoSubmit()가 텍스트 상자 안의 텍스트를 초기화하는 기능까지만 했다면, paintToDo(newTodo)추가 후에는 제출한 텍스트를 매번 html의 ul안에서 li태그와 그 안에 속하는 span 태그를 만들고 span에 텍스트로 남겨 웹 화면에서 보일 수 있는 것 까지 되게 한다.



*/


