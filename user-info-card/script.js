const form = document.querySelector("#userForm");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const colorInput = document.querySelector("#color");
const cardContainer = document.querySelector("#cardContainer");


form.addEventListener("submit", (event)=>{
     event.preventDefault();
     const name = nameInput.value;
     const age = ageInput.value;
     const color = colorInput.value;

    const card = document.createElement("div");
    card.classList.add("user-card");

    const nameP = document.createElement("p");
    nameP.textContent = `Name : ${name}`;
    card.appendChild(nameP);

    const ageP = document.createElement("p");
    ageP.textContent = `Age : ${age}`;
    card.appendChild(ageP);

    const colorP = document.createElement("p");
    colorP.textContent = `Color : ${color}`;
    card.appendChild(colorP);

    card.style.backgroundColor = color;
    cardContainer.append(card);
     
});