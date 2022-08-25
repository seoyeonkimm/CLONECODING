const API_KEY = "3686e57e2947cd1f6d8d8f8f574473a0";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position);
    console.log("You lived in " + lat + ", " + lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    fetch(url)//fetch 후 response를 기다려야함!
        .then(response => response.json())
        .then((data) =>{
            console.log(data.name, data.weather[0].main);
            const weather = document.querySelector("#weather span:first-child");
            console.log(weather);
            const city = document.querySelector("#weather span:last-child"); 
            console.log(city);   
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
        
        });//실제로 URL에 갈 필요 없이 Javascript가 대신 URL을 부를 것임!
}

function onGeoError(){//만약 유저가 위치 정보를 받는게 불가능하다면!
    alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//getCurrentPosition() requires two functions 1.모든게 잘 수행되었을 때 실행될 함수 2. 에러가 발생되었을 때 실행 될 함수