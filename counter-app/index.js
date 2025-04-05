let  mainTitle = document.querySelector('#title') ;
let currVal = 0;

let  btnDecrement = document.querySelector('#decrement') ;  
let  btnIncrement = document.querySelector('#increment') ;  
let  btnReset = document.querySelector('#reset') ;  

btnIncrement.addEventListener("click", () =>{
    currVal++;
    mainTitle.textContent = currVal;
});

btnDecrement.addEventListener("click", () =>{
    currVal--;
    mainTitle.textContent = currVal;
});

btnReset.addEventListener("click", () =>{
    currVal = 0;
    mainTitle.textContent = currVal;
});