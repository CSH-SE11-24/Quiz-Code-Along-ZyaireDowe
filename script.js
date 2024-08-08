// Console log "Script running" to make sure the linking worked

// TEXT INPUT
// Step 1: Select elements
// Select the first input and the result p tag


// Step 2: Listen for event
// Add an event listener to the input such that on input (or change), you console log the value



// Step 3: Execute action
// Modify the contents of the event listener
// If the value of the input is "Ms. Alder", change the text of the p tag to "Hello principal!". Else, change it to "Hello " + the input value



// RADIO INPUT
// Step 1: Select all elements with the class radio and select all the label elements
let radioButtons=document.querySelectorAll(".radio")
console.log(radioButtons)

let labels=document.querySelectorAll("label")
console.log(labels)
// Step 2: Loop through all the inputs and add an event listener such that on click, you console log the value
let answer=["paris", "jupiter"]
for(let i=0;i<radioButtons.length;i++){
  let question=Math.floor(i/3)
  radioButtons[i].addEventListener("click",function (e){
    if(radioButtons[i].value==answer[question]){
      labels[i].style.color="green"
    }else{
      labels[i].style.color="red"
    }
      
  })
  
}


// Step 3: Execute action
// Modify the contents of the event listener
// If the classList of the input contains correct, set the text color of the corresponding label to be green
// Else, set the text color of the label to be red





// FINAL SCORE
// Define a score variable and set it to 0 (do this before your radio input event listener)



// Go back to the content of the event listener and make score go up by 1 if the answer is correct. Console log score to check.




// Select the submit button and the result p tag


// Add an event listener such that on click, you change the result p tag to say "Your score is " + the score




