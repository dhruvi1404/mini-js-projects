let itemName = document.querySelector("#name");
let addBtn = document.querySelector("#add");
let ulList = document.querySelector("#shopping-list");

addBtn.addEventListener("click", ()=>{
    let value = itemName.value.trim();
    if(value!= " "){
        let listItem = document.createElement('li');
        listItem.textContent = value;
        ulList.appendChild(listItem); 
        itemName.value = "";
    }
    
    
});