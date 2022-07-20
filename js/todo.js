const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];
/*let을 하는 이유 : const로 고정을 해버리면 새로고침시 
이전에 있던 값들에 새로운값이 더해지면 추가되는것이 아닌 덮어씌워지기때문에 
let으로 업데이트를 가능하게 해놓는다*/

const TODOS_KEY = "toDos";

function fnSaveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //로컬스토리지에는 배열이 저장이 안됨
}

function deleteToDo(deleteToDo) {
  //x버튼을 눌렀을때 작동하는 함수
  const li = deleteToDo.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  fnSaveToDos();
  //saveToDos_ft를 사용하여 변경된 toDos값을 다시 저장해준다
}

function createToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function ToDoSubmit(submitEvent) {
  submitEvent.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoOBJ = {
    text: newTodo,
    id: Date.now(), //랜덤id
  };
  /*같은 값이 localStorage에 저장되어 있으면 어떤것을 지워야될지 모르기때문에
    각각의 값을 오브젝트로 만들어 localStorage에 저장을한다*/
  toDos.push(newTodoOBJ);
  createToDo(newTodoOBJ);
  fnSaveToDos();
}

todoForm.addEventListener("submit", ToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //JSON.parse() = string을 오브젝트,배열등등으로 바꿔준다.
  toDos = parsedToDos;
  /*parsedToDos값을 toDos배열에 넣어주면 새로고침시
    빈값으로 시작하지않고 이전에 데이터를 가지고 시작한다*/
  parsedToDos.forEach(createToDo);
}

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

/* parsedToDos.forEach(createToDo);
=> 위에서 사용자가 입력한 것을 화면에 나타내주는 함수를 만들었기때문에
복잡한 코드 필요없이 forEach에 createToDo함수를 넣어주면 
forEach기능때문에 새로고침해도 localStorage에 있는 값을 다시 불러올수 있다
*/
