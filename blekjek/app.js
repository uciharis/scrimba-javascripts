// let firstCard = getRandom();
// let secondCard = getRandom();
// inisialisasi var diatas ke dalam fungsi startGame()
let cards = [] //set to empty dan isi cards di dalam fungsi startGame
let sum = 0 //set to zero
let hasBlekjek = false;
let isAlive = false; //harus diassigne true saat start a game
// bukan pada saat standby. jadi rubah false

let message = '';
let messageBoard = document.getElementById('message');
let cardBoard = document.getElementById('cardBoard');
let sumBoard = document.getElementById('sumBoard');
function getRandom(){
    let randomNum = Math.floor(Math.random() * 13) +1
    if (randomNum > 10){
        return 10
    } else if (randomNum === 1){
        return 11
    } else {
        return randomNum
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandom();
    let secondCard = getRandom();
    cards = [firstCard,secondCard];
    sum = cards[0] + cards[1]


   // cardBoard.textContent = 'Kartoe : ' + cards[0] + '&' + cards[1]
   // function above is manual, lets make automatic ones
   cardBoard.textContent = 'Kartoe : '
   for (let i=0;i<cards.length;i++){
    cardBoard.textContent += cards[i] + ' '
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
    console.log("🚀 ~ startGame ~ console.log(sum):", console.log(sum))
    console.log("🚀 ~ startGame ~ console.log(sum):", console.log(sum))
    console.log("🚀 ~ startGame ~ console.log(sum):", console.log(sum))
    console.log("🚀 ~ startGame ~ console.log(sum):", console.log(sum))
    console.log("🚀 ~ startGame ~ console.log(sum):", console.log(sum))
    console.log("🚀 ~ startGame ~ console.log(sum):", console.log(sum))
    console.log("🚀 ~ startGame ~ console.log(sum):", console.log(sum))
    console.log("🚀 ~ startGame ~ console.log(sum):", console.log(sum))

function newCard(){
    let card = getRandom()
    sum+= card
    cards.push(card)
    startGame()
}