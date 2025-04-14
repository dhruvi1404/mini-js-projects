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

//create download button
const downloadBtn = document.createElement('button');
downloadBtn.textContent = "Download as JSON";
document.body.appendChild(downloadBtn);

//create Export as PDF button
const exportPDF = document.createElement('button');
exportPDF.textContent = "Export as PDF";
document.body.appendChild(exportPDF);


saveAll.addEventListener("click",()=>{

    const previewContainer = document.querySelector("#preview-container");

    // Clear old preview first
    previewContainer.innerHTML = "";

    let allExpBlocks = document.querySelectorAll('.exp-block');

    allExpBlocks.forEach(block => {
        let inputs = block.querySelectorAll('input, textarea');

        const experience = {
            jobTitle: inputs[0].value,
            companyName: inputs[1].value,
            duration: inputs[2].value,
            description: inputs[3].value
        };
        
        //create Display block
        const previewBlock = document.createElement('div');
        previewBlock.classList.add("preview-block");

        previewBlock.innerHTML = `
        <h3>${experience.jobTitle}</h3>
        <p><strong>Company:</strong> ${experience.companyName}</p>
        <p><strong>Duration:</strong> ${experience.duration}</p>
        <p><strong>Description:</strong> ${experience.description}</p>
      `;
  
        previewContainer.appendChild(previewBlock);
       
});

         


    
});


downloadBtn.addEventListener("click",()=>{


    let allExpBlocks = document.querySelectorAll('.exp-block');
    const allExpValue = [];

    allExpBlocks.forEach(block => {
        let inputs = block.querySelectorAll('input, textarea');

        const experience = {
            jobTitle: inputs[0].value,
            companyName: inputs[1].value,
            duration: inputs[2].value,
            description: inputs[3].value
        };
        
        allExpValue.push(experience);
       
});   
      // Step 1: Convert to JSON
  const jsonData = JSON.stringify(allExpValue, null, 2);

  // Step 2: Create a blob (file-like object in memory)
  const blob = new Blob([jsonData], { type: "application/json" });

  // Step 3: Create download link
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "resume_experience.json";
  a.click(); // this triggers the download

  // Step 4: Optional cleanup
  URL.revokeObjectURL(url); // releases memory

});

exportPDF.addEventListener("click",()=>{

});

