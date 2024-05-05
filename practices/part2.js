/* ----- object -----------

let person = {
    name : 'jowo ki',
    age : 69,
    country : 'solo sin city'
};

function logData(){
    console.log(person.name+' is '+person.age+' years old and lives in '+person.country)
}

logData();

*/

// 
/*
----------- if else cara #1------------------

let age = 75;
if (age < 6){
    console.log('free')
} else if(age <17 && age >6){
    console.log('child disc')
} else if(age <26 && age > 18){
    console.log('student disc')
} else if(age <66 && age >27){
    console.log('full price')
} else {
    console.log('senior citizen disc')
}

*/

/*
----------- if else cara #2------------------

let age = 65;
if (age <6){
    console.log('free')
} else if (age<18){
    console.log('child disc')
} else if(age<27){
    console.log('student disc')
} else if(age<67){
    console.log('full price')
} else {
    console.log('senior citizen disc')
}

*/

/*
------------------ for loop------

let bigCountries = [
    'cinak',
    'india',
    'amrika',
    'indoensia',
    'pakistan'
];
for (let i=0;i<bigCountries.length;i++){
    console.log('- '+bigCountries[i])
}

*/
/**
--- pake object method

 */
let bigCountries = [
    'tuvalu',
    'india',
    'amrika',
    'indoensia',
    'monakok'
];

// tuvalu is wrong country. change into cinak
// monakok is wrong. change into pakistan
// shift() unshift() work for first array
// pop() push() work for last array
console.log(bigCountries) //cek kondisi awal
bigCountries.shift(); // tendang tuvalu
console.log(bigCountries); //cek setelah tendang
bigCountries.unshift('cinak')
console.log(bigCountries) // cinak sudah ada di no-1

// tendang monakok
bigCountries.pop()
console.log(bigCountries) //cek stlh tendang monakok
bigCountries.push('pakistan')
console.log(bigCountries) // cek hasil

