let myLeads = ['a.com','b.com','c.com']

const inputElement = document.getElementById('input-element').value;
const simpanBtn = document.getElementById('simpan-btn');
const ulElement = document.getElementById('ul-element');

simpanBtn.addEventListener('click', function(){
myLeads.push(inputElement);
console.log(inputElement);
})


for (let data of myLeads){
    console.log(data);
    let liElement = document.createElement('li');
    liElement.textContent +=data;
    ulElement.appendChild(liElement);
}