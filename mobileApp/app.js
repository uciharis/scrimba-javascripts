import { add } from "./function.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
const appSettings = {
    databaseURL: 'https://kucingchartshop-default-rtdb.asia-southeast1.firebasedatabase.app/'
}
const app = initializeApp(appSettings);

// ----------------------- //
let jumlah = add(1,3)
console.log(jumlah)
console.log(app)


const addBtn = document.getElementById('add-btn');
const inputField = document.getElementById('input-field');
addBtn.addEventListener('click', function(){
    let inputFieldValue = inputField.value;
    console.log(inputFieldValue);
})