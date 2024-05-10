let fruit = ["apel", "jeruk", "apel", "apel", "jeruk"];
let apel = document.getElementById('kotakapel');
let jeruk = document.getElementById('kotakjeruk');

function putKotak(){
    for (let i=0;i<fruit.length;i++){
        if (fruit[i] === 'apel'){
            apel.innerText += ' '+'apel'
        } else {
            jeruk.innerText += ' '+'jeruk'
        }
    }
}

putKotak();