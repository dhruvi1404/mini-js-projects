let items = [];

let input = document.querySelector("#itemInput");
let addBtn = document.querySelector("#addBtn");
let ulList = document.querySelector("#groceryList");

addBtn.addEventListener("click", ()=>{
    let value = input.value.trim();

    if(value!= " "){
        items.push(value);
        renderList(); 
        input.value = "";
    }
});

function renderList(){
    ulList.innerHTML = ""; // Clear old list

    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ulList.appendChild(li);
    });
}