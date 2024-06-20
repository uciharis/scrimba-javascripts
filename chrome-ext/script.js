let myLeads = []

const inputElement = document.getElementById('input-element');
const simpanBtn = document.getElementById('simpan-btn');
const ulElement = document.getElementById('ul-element');

simpanBtn.addEventListener('click', function(){
myLeads.push(inputElement.value);
inputElement.value= '';
renderLeads();
})

// --------------------------------------------------------//
//cara sendiri #1
/*
for (let data of myLeads){
    let liElement = document.createElement('li');
    console.log(data);
    liElement.textContent +=data;
    ulElement.appendChild(liElement);
}
*/
// --------------------------------------------------------//

// cara master scrimba- old ways (improved)
function renderLeads(){
    let listItem = ''
    for (let i=0 ;i<myLeads.length; i++){
        listItem += '<li>' + myLeads[i] + '</li>';
    }
    ulElement.innerHTML = listItem; // faster
    // because we dont loop the dom, but finish the loop
    // the render the result
}
