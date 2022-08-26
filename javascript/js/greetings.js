
//const loginForm = document.getElementById("#login-form");
//loginForm is an HTML element, HTML element안을 바로 검색 가능하다는 것!
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello  ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
     
}

 const savedUsername = localStorage.getItem(USERNAME_KEY);
 if (savedUsername === null){
     //show the form
     loginForm.classList.remove(HIDDEN_CLASSNAME);
     loginForm.addEventListener("submit", onLoginSubmit);
 }else {
     //show the greetings
    paintGreetings(savedUsername);
     
 }