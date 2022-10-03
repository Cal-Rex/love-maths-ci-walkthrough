// step 1: create list of functions needed, then set them out
// step 2, create event listeners

//  ----needed functions---
//runGame()
//checkAnswer()
//calculateCorrectAnswer()
//incrementScore()
//incrementWrongAnswer()
//displayAdditionQuestion()
//displaySubtractQuestion()
//displayMultiplyQuestion()
//displayDivideQuestion()



/* Explanation.  -- block below
1. the first line here, prevents the code from running until the webpage has fully loaded.
2. first, the variable to find all the buttons on the page is established
3. then, the for>of loop organises the data returned to the buttons array 
   and re-establishes the data from being an html collection to organised objects in an array that can be called to
   for instance, logging button[0] will return = button.btn.btn--big.btn--green
4. add an event listener to the new button array, the event should listen out for a "click" on that button,
   which will then proceed to launch a function.
5. the function will launch an IF statement, which will target the button that has just been clicked (by using "this") 
   then getting its "data-type" attribute, then checking if it is equal to the value of "submit"
6. if it is, it will return a system alert to say "you clicked submit!"
7. if it does not have the value submit, the function will then go on to create a variable (gameType),
   then assigning the clicked button's "data-type" to it, then using that variable, return an alert message
   in template lietral quotation that `you just clicked ${gameType}`, which returns the value of the gametype variable
   in the quotation} 
*/
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })

    }

    runGame("addition");
})
/**
 * The ain game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${gameType}!`);
        throw `Unknown game type ${gameType}. aborting!`;
    }
}

/** Checks the answer againt the first element in the returned
 * calculateCorrectAnswer array
  */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if(isCorrect) {
        incrementScore();
        alert("hey you got it right!"); 
    } else {
        incrementWrongAnswer();
        alert(`woops! the answer was actually ${userAnswer}. You answered ${calculatedAnswer[0]}`)
    }
    runGame(calculatedAnswer[1]);
}
/**
 * Gets the 2 numbers from the dom and the operator, determines what sum to run
 * and returns the answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "-") {
        return [operand1 -= operand2, "subtract"];
    } else if (operator === "X") {
        return [operand1 * operand2, "multiply"];
    } else {
        alert(`unimplement operator ${operator}`)
        throw `unimplement operator ${operator}. aborting!`
    }
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById('score').innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "X";
}

// function displayDivideQuestion {

// }

