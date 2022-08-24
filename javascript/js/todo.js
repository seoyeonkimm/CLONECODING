const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

//투두리스트 배열의 내용을 localStorage에 넣음
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//localStorage는 String만 넣을 수 있음
}

//삭제 버튼 기능
function deleteToDo(event){
    //console.dir(event.target.parentElement.innerText);
    //event
    //event.target -> button
    //event.target.parentElement -> li
    //event.target.parentElement.innerText -> text내용과 버튼

    const li = event.target.parentElement;
    li.remove();
}

//입력내용을 투두리스트로 보여주는 기능
function paintTodo(newTodo){
    //console.log("i will paint", newTodo);
    //<li>
    //  <span></span>
    //  <button></button>
    //</li>
    const li = document.createElement("li");//li 만듦
    const span = document.createElement("span");//span 만듦
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "Delete";

    button.addEventListener("click", deleteToDo);

    li.appendChild(span);//span을 li의 child로
    li.appendChild(button);
    //span.innerText = newTodo;//입력내용을 받아와서 텍스트로 넣어줌
    toDoList.appendChild(li);//이를 todo-list라는 id를 가진 엘리먼트에 붙여줌
}

//투두리스트에 내용 입력 후 보냄
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;//input의 현재 value를 새로운 변수에 복사하는 것
    console.log(toDoInput.value);//아래처럼 비우기 전에 값을 어딘가에 저장
    toDoInput.value = "";//그리고 비움!
    
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    //git test
    //toDos.push(newTodo);//array애 추가 -> 텍스트가 아닌 객체로 바꾸기
    toDos.push(newTodoObj);
    paintTodo(newTodo);
    saveToDos();//saveToDos 함수가 호출되는 시점에는 newTodo는 array에 들어있음!
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){//위의 event처럼 item 그냥 제공
//     console.log("this is the turn of " + item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);//null일때도 있음 localStorage아무것도 없을 때
console.log(savedToDos);
if(savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    //Javascript는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해준다.
    //parsedToDos.forEach(sayHello);//각 엘리먼트에 대해 한번씩 순회 
    //parsedToDos.forEach((item) => console.log("this is the turn of " + item)); 
    toDos = parsedToDos;//데이터복원!!!!!
    parsedToDos.forEach(paintTodo);//paintTodo는 텍스트를 받는데, Javascript는 그 텍스트를 paintToDo에게전달해줌
    //다시 말해, 자바스크립트는 paintToDo에 "a",...,"d"를 넣어주기 때문 paintToDo("a")처럼! 
}