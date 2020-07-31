const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var guessNumber = Math.floor(Math.random() * 100);
var lives = 10;
var message;
console.log(guessNumber);
$submitButton.onclick = () => {
    let userInput = document.getElementById("number-input").value;
    lives--;
    if (userInput == guessNumber) {
        location.href = "./win.html";
    } else if (lives == 0) {
        location.href = "./loose.html"
    } else if (userInput > guessNumber) {
        message = `Opps 😢!! Your guess is too high. you have ${lives} lives remaining.`;
    } else if (userInput < guessNumber) {
        message = `Opps 😢!! Your guess is too low. you have ${lives} lives remaining.`;
    }

    $message.style.display = "inherit";
    $message.innerHTML = message;
    $lives.innerHTML = lives;
};