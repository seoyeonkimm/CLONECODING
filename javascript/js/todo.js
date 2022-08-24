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
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));//여기서 이 toDo는 toDos DB에 있는 요소 중 하나임!, need to change format of ID String to Int
    li.remove();
    //다 지운뒤에 saveToDos는 한 번더 불러야 하는거 주의
    saveToDos();//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
}

//입력내용을 투두리스트로 보여주는 기능
function paintTodo(newTodo){
    //console.log("i will paint", newTodo);
    //<li>
    //  <span></span>
    //  <button></button>
    //</li>
    const li = document.createElement("li");//li 만듦
    //object화 하면서 아래코드 추가
    li.id = newTodo.id;
    const span = document.createElement("span");//span 만듦
    span.innerText = newTodo.text;//span.innerText = newTodo;에서 수정
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
    //toDos.push(newTodo);//array애 추가 -> 텍스트가 아닌 객체로 바꾸기
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
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

    //*******forEach함수는 paintTodo를 parseToDos 배열 요소마다 실행한다는 것 주의하기!!!각 오브젝트나 아이템을 주게됨!!********* */
    parsedToDos.forEach(paintTodo);//paintTodo는 텍스트를 받는데, Javascript는 그 텍스트를 paintToDo에게전달해줌
    //다시 말해, 자바스크립트는 paintToDo에 "a",...,"d"를 넣어주기 때문 paintToDo("a")처럼! 
    //객체화 하면서 [{text: "a", id:12121212}]같은 형태로 호출하게 된다
}

function sexyFilter(){

}
[1, 2, 3, 4].filter(sexyFilter);