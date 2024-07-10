//import { add } from "./function.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
    //shopList.innerHTML += `<li>${object}</li>`
    let objectID = object[0]
    let objectValue = object[1]
    let appendElement = document.createElement('li');
    appendElement.textContent = objectValue;

    // func for remove items
    appendElement.addEventListener('dblclick', function(){
        //console.log(objectID)
        let lokasiDB = ref(database,`shoplist/${objectID}`)
        remove(lokasiDB)
    })

    shopList.append(appendElement)
}

addBtn.addEventListener('click', function(){
    let inputFieldValue = inputField.value;

    push(shoppingListinDB,inputFieldValue);
    resetField();
})

//fetch database
onValue(shoppingListinDB, function(snapshot){

    //console.log(snapshot.val())
    let objectItemsToArray = Object.entries(snapshot.val());
    //console.log(objectItemsToArray);
    // loop the items
    resetShoppingList();
    let listItems;
    for (let i =0; i<objectItemsToArray.length; i++){
        //console.log(objectItemsToArray[i]);
        listItems = objectItemsToArray[i]
        //console.log(listItems)
        let listItemsID = listItems[0]
        //console.log(listItemsID)
        let listItemsValue = listItems[1]
        //console.log(listItemsValue)
        appendItemChart(listItems);
    }
})