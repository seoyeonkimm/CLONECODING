const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);

//console.log(bgImage);
console.log(chosenImage);

//const backgroundImage = "url('img/" + chosenImage + "')";
//console.log( backgroundImage);

const paintImage = (chosenImage) => {
    const backgroundImage = "url('img/" + chosenImage + "')";
    console.log( backgroundImage);
    document.body.style.backgroundImage =  backgroundImage;
}; 

paintImage(chosenImage);