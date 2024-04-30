let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlekjek = false;
let isAlive = true;

let message = '';
let messageBoard = document.getElementById('message');
let cardBoard = document.getElementById('carBoard');
let sumBoard = document.getElementById('sumBoard');

function startGame(){
    cardBoard.textContent = 'Kartoe : ' + firstCard + '&' + secondCard
    sumBoard.textContent = 'TOTal : ' + sum
    if (sum <=20){
        message = 'tarik kartu lagi bos ?'
    } else if (sum === 21){
        message = 'lu orang MENANG !! 🎉🎉'
        hasBlekjek = true; // ini state
    } else {
        message = 'tolol kalah lu tol ..'
        isAlive = false; // ini state
    }
    messageBoard.textContent = message
}