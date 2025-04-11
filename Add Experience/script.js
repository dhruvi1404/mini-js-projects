const addBtn = document.querySelector("#add-experience-btn");
const expCtr = document.querySelector("#experience-container");

addBtn.addEventListener("click", ()=>{
    const form = document.createElement("form");
    const label1 = document.createElement("label");
    label1.innerHTML = "Job Title :";
    label1.setAttribute('for', "jobTitle")
    const input1 = document.createElement("input");
    input1.setAttribute('type', "text");
    input1.setAttribute('name', "jobTitle");
    input1.setAttribute('id', "jobTitle");

    const label2 = document.createElement("label");
    label2.innerHTML = "Company Name :";
    label2.setAttribute('for', "companyName")
    const input2 = document.createElement("input");
    input2.setAttribute('type', "text");
    input2.setAttribute('name', "companyName");
    input2.setAttribute('id', "companyName");

    const label3 = document.createElement("label");
    label3.innerHTML = "Duration :";
    label3.setAttribute('for', "duration")
    const input3 = document.createElement("input");
    input3.setAttribute('type', "text");
    input3.setAttribute('name', "duration");
    input3.setAttribute('id', "duration");

    const label4 = document.createElement("label");
    label4.innerHTML = "Description :";
    label4.setAttribute('for', "desc")
    const input4 = document.createElement("textarea");
    input4.setAttribute('cols', "10");
    input4.setAttribute('rows', "20");
    input4.setAttribute('id', "desc");

    form.appendChild(label1);
    form.appendChild(label2);
    form.appendChild(label3);
    form.appendChild(label4);
    
    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(input3);
    form.appendChild(input4);

    expCtr.appendChild(form);
})
