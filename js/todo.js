const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");


function createToDo(newTodo){
    const li = document.createElement("li");
    //html 요소에 li를 추가함
    const span = document.createElement("span");
    //html 요소에 li를 추가함
    li.appendChild(span);
    //li(부모노드)에 span(자식노드)를 추가함
    span.innerText = newTodo;
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
    createToDo(newTodo);
    //const newTodo값을 createToDo함수에 넣고 실행한다.  
}


todoForm.addEventListener("submit",ToDoSubmit);
//todoForm을 submit할때 ToDoSubmit함수가 실행








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








