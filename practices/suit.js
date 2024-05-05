// rock paper scissor game

let hands = [
    'watu ',
    'kertas ',
    'gunting : ✂'
];

function getHand(){
    let randomPick = Math.floor(Math.random()*3)
    return hands[randomPick]
}

console.log(getHand())