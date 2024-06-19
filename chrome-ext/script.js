let myLeads = ['a.com','b.com','c.com']

const inputElement = document.getElementById('input-element').value;
const simpanBtn = document.getElementById('simpan-btn');
const ulElement = document.getElementById('ul-element');

simpanBtn.addEventListener('click', function(){
myLeads.push(inputElement);
console.log(inputElement);
})

 //cara sendiri
 for (let data of myLeads){
     console.log(data);
     let liElement = document.createElement('li');
     liElement.textContent +=data;
     ulElement.appendChild(liElement);
 }

 /*
// cara master scrimba- old ways
for (let i=0 ;i<myLeads.length; i++){
    ulElement.innerHTML += '<li>' + myLeads[i] + '</li>';
}
*/

/*
// cara master scrimba- old ways (improved)
let listItem = '';
for (let i=0 ;i<myLeads.length; i++){
    listItems += '<li>' + myLeads[i] + '</li>';
}
ulElemet.innerHTML = listItems; // faster bcoz outside the loop
*/