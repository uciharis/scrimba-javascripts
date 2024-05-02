let firstCard = 7;
let secondCard = 9;
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard;
let hasBlekjek = false;
let isAlive = true;

let message = '';
let messageBoard = document.getElementById('message');
let cardBoard = document.getElementById('cardBoard');
let sumBoard = document.getElementById('sumBoard');

function startGame(){
   // cardBoard.textContent = 'Kartoe : ' + cards[0] + '&' + cards[1]
   // function above is manual, lets make automatic ones
   cardBoard.textContent = 'Kartoe : '
   for (let i=0;i<cards.length;i++){
    cardBoard.textContent += cards[i] + '&'
   }
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

function newCard(){
    console.log('game baroeee')
    let card = 7
    sum+= card
    startGame()
}