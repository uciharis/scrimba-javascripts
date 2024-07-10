const appSettings = {
    databaseURL: 'https://kucingchartshop-default-rtdb.asia-southeast1.firebasedatabase.app/'
}

const addBtn = document.getElementById('add-btn');
const inputField = document.getElementById('input-field');
addBtn.addEventListener('click', function(){
    let inputFieldValue = inputField.value;
    console.log(inputFieldValue);
})