// JS file for Calculator

const divBtns = document.querySelector(".div-btns");
const screen = document.querySelector(".screen");
const btnOnc = document.querySelector("#btn-onc");
const btnCE = document.querySelector("#btn-CE");


// let equation = [];
let firstNum = "";
let secondNum = "";
let operator = "";

divBtns.addEventListener("click", (e)=>{

    if (e.target == btnOnc){ //Clicked ON/C button
        screen.textContent = "";
        firstNum = "";
        secondNum = "";
        operator = "";
    }

    if (e.target == btnCE){
        screen.textContent = "";
        //clear number from whichever num var (either 1 or 2)
    }

    
    if (e.target.classList.contains('btn-num')) { //if NUMBER btn is clicked
        
        screen.textContent += e.target.textContent; //display the clicked number on screen
        firstNum += e.target.textContent; //add to firstNum variable until number is finished being entered
        console.log ("firstNum: "+ firstNum);

        // addToEquation(e.target.textContent);
    
       
 } else if(e.target.classList.contains('btn-op')){ //if OPERAND is clicked
        
        operator = e.target.textContent; //put into operator variable
        console.log("operator: " + operator);
        
        e.target.classList.toggle('.clicked'); //change style of clicked button 

        // screen.textContent = e.target.textContent; //add operand to screen.        
 }
});

function addToEquation(number){
    
    // equation[0] = Number(number);
    // console.log("value at equation[0] is: " + equation[0]);
    
}



// CONSOLE FUNCTIONS

function add (a, b){
    console.log (a + b);
    // return a + b;
};  

function subtract (a,b){
    console.log (a - b);
    // return a - b;
};

function multiply (a, b){
    console.log (a * b);
    // return a * b;
};  

function divide (a,b){
    console.log (a / b);
    // return a / b;
};


function operate (num1,num2,operand){
    if (operand == "+"){
        add(num1,num2);
    } else if (operand == "-"){
        subtract(num1,num2);
    } else if (operand == "*"){
        multiply(num1, num2);
    } else if (operand == "/"){
        divide (num1,num2);
    }
};

// operate(100,20,"/");










