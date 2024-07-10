//import { add } from "./function.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// your url reference DB
const appSettings = {
    databaseURL: "https://kucingchartshop-default-rtdb.asia-southeast1.firebasedatabase.app"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListinDB = ref(database, "shoplist")

// ----------------------- //
// let jumlah = add(1,3);
// console.log(jumlah);
// console.log(app);


const addBtn = document.getElementById('add-btn');
const inputField = document.getElementById('input-field');
const shopList = document.getElementById('shop-list')

// reset the input field into blank after submit items
function resetField(){
    inputField.value = '';
}
function resetShoppingList(){
    shopList.innerHTML = ''
}

function appendItemChart(object){
    shopList.innerHTML += `<li>${object}</li>`
}

addBtn.addEventListener('click', function(){
    let inputFieldValue = inputField.value;

    push(shoppingListinDB,inputFieldValue);
    resetField();
})

//fetch database
onValue(shoppingListinDB, function(snapshot){

    //console.log(snapshot.val())
    let objectItemsToArray = Object.values(snapshot.val());
    //console.log(objectItemsToArray);
    // loop the items
    resetShoppingList();
    let listItems;
    for (let i =0; i<objectItemsToArray.length; i++){
        //console.log(objectItemsToArray[i]);
        listItems = objectItemsToArray[i]
        appendItemChart(listItems);
    }
})