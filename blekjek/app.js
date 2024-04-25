let firstCard = 10;
let secondCard = 19;
let sum = firstCard + secondCard;
let hasBlekjek = false;
let isAlive = true;

if (sum <=20){
    console.log('tarik kartu lagi bos ?')
} else if (sum == 21){
    console.log('lu orang MENANG !! 🎉🎉')
    hasBlekjek = true; // ini state
} else {
    console.log('tolol kalah lu tol ..')
    isAlive = false; // ini state
}

console.log(isAlive);