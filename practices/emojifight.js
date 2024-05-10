let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stage = document.getElementById('stage')
let fightButton = document.getElementById('fight')

fightButton.addEventListener('click',function(){
    let randomIndex = Math.floor(Math.random() * fighters.length)
    let randomIndex2 = Math.floor(Math.random() * fighters.length)
   stage.textContent = fighters[randomIndex] + ' vs ' + fighters[randomIndex2]
})