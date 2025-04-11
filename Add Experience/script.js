const addBtn = document.querySelector("#add-experience-btn");
const expCtr = document.querySelector("#experience-container");

addBtn.addEventListener("click", () => {
  const block = document.createElement("div");
  block.classList.add("exp-block"); // for styling

  // Helper function to create a label + input
  function createInput(labelText, name, type = "text") {
    const label = document.createElement("label");
    label.innerText = labelText;
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.placeholder = labelText;
    label.appendChild(input);
    return label;
  }

  // Job Title
  const jobTitle = createInput("Job Title", "jobTitle");

  // Company Name
  const company = createInput("Company Name", "companyName");

  // Duration
  const duration = createInput("Duration", "duration");

  // Description (special case for textarea)
  const descLabel = document.createElement("label");
  descLabel.innerText = "Description";
  const textarea = document.createElement("textarea");
  textarea.name = "description";
  textarea.cols = 30;
  textarea.rows = 4;
  textarea.placeholder = "Enter role description";
  descLabel.appendChild(textarea);

  // Append all to block
  block.appendChild(jobTitle);
  block.appendChild(company);
  block.appendChild(duration);
  block.appendChild(descLabel);

  expCtr.appendChild(block);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
 
  removeBtn.addEventListener("click", (e) => {
    e.target.closest(".exp-block").remove();
  });
  
  block.appendChild(removeBtn);
});

// create save all button

const saveAll = document.createElement('button');
saveAll.textContent = "Save All";
document.body.appendChild(saveAll);

saveAll.addEventListener("click",()=>{
    const allExpValue = [];
    let allExpBlocks = document.querySelectorAll('.exp-block');

    allExpBlocks.forEach(block => {
        let inputs = block.querySelectorAll('input, textarea');

        const experience = {
            jobTitle: inputs[0].value,
            companyName: inputs[1].value,
            duration: inputs[2].value,
            descLabel: inputs[3].value
        };
        
        allExpValue.push(experience);
});

    console.log("All Expereince data : " , allExpValue);


    
});