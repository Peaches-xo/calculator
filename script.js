// JS file for Calculator

const divBtns = document.querySelector(".div-btns");
const screen = document.querySelector(".screen");
const controlBtns = document.querySelectorAll(".btn-control");
    const btnEquals = document.querySelector ("#op-equals");
    const btnDecimal = document.querySelector("#num-decimal");

let firstNum = "";
let secondNum = "";
let operator = "";

divBtns.addEventListener("mousedown", (e)=>{
    btnDecimal.disabled = false;
    if(e.target.classList.contains('btn-control')) { //CONTROL BTNS
            switch (e.target.id){
            case "btn-CE": 
                clearEntry();
                break;
            case "btn-git": 
                const link = document.createElement("a");
                    link.setAttribute('href', 'http://github.com/Peaches-xo/calculator');
                    link.textContent = 'github.com/Peaches-xo/calculator';
                    screen.appendChild(link);
                    setTimeout(function(){
                        screen.textContent = "";
                    }, 2500);
               break;
            case "btn-onc": 
                screen.textContent = "✨🦄 giddy up 🦄 ✨";
                firstNum = "";
                secondNum = "";
                operator = "";
                break;
            case "btn-star":
                const jsConfetti = new JSConfetti();
                jsConfetti.addConfetti({
                    emojis: ['🌈', '⚡️', '🦄', '💥', '✨', '💫', '🌸'],
                    emojiSize: 50,
                    confettiNumber: 100,
                });
                break;
            };

    } else if(e.target.classList.contains('btn-num')) { // NUM BTNS
        if (screen.textContent == "✨🦄 giddy up 🦄 ✨") screen.textContent = "";

        if (operator == "="){
            firstNum = "";
            secondNum = "";
            operator = "";
            screen.textContent = "";
        };
    
        if (secondNum == "" && operator == ""){
            if (firstNum.includes(".") || firstNum.startsWith(".")){
                btnDecimal.disabled = true;
            };
            screen.textContent += e.target.textContent; //display clicked number on screen
            firstNum += e.target.textContent; //add to firstNum until number is finished being entered
            console.log ("firstNum: "+ firstNum);
        };

        if(firstNum!=="" && operator == ""){
            if (firstNum.includes(".") || firstNum.startsWith(".")){
                btnDecimal.disabled = true;
            }
        };
       
         if (firstNum !=="" && operator !==""){
             secondNum += e.target.textContent;  //add number to secondNum

             if (secondNum.includes(".") || secondNum.startsWith(".")){
                btnDecimal.disabled = true;
            };
            
            screen.textContent = `${firstNum} ${operator} ${secondNum}`;
            console.log ("secondNum: " + secondNum);
         };

    } else if(e.target.classList.contains('btn-op')) { //OP BTNS
      
        if (firstNum !== "" && secondNum == ""){
            operator = e.target.textContent;
            screen.textContent = `${firstNum} ${operator} `;
        }
        
        if (firstNum !== "" && secondNum !== ""){
            operate(firstNum, secondNum, operator);
            operator = e.target.textContent; 
        };

    }  else if (e.target == btnEquals){
        operate(firstNum,secondNum,operator);
        operator = "="; 
     
    }
});

// CONSOLE FUNCTIONS

function add(a,b){
    let result = +(a) + +(b);
    firstNum = result; 
    secondNum = "";

    if (result >= Number.MAX_VALUE) {
        return 'error - num too large';
    };

    if (result.toString().includes(".")){
        return result.toFixed(2);
    } else {
        return result;
    }
};  

function subtract (a,b){
    let result = +(a) - +(b);
    firstNum = result; 
    secondNum = "";

    if (result >= Number.MAX_VALUE) {
        return 'error - num too large';
    };

    if (result.toString().includes(".")){
        return result.toFixed(2);
    } else {
        return result;
    };
};

function multiply (a, b){
    let result = +(a) * +(b);
    firstNum = result; 
    secondNum = "";

   if (result >= Number.MAX_VALUE) {
        return 'error - num too large';
    };

    if (result.toString().includes(".")){
        return result.toFixed(2);
    } else {
        return result;
    }
};  

function divide (a,b){
    let result = +(a) / +(b);
    firstNum = result; 
    secondNum = "";

    if (result >= Number.MAX_VALUE) {
        return 'error - num too large';
    };

    if (result.toString().includes(".")){
        return result.toFixed(2);
    } else {
        return result;
    };
};

function operate(num1,num2,operator){
    if (operator == "+"){
        screen.textContent = add(num1,num2);
    } else if (operator == "-"){
        screen.textContent = subtract(num1,num2);
    } else if (operator == "x"){
        screen.textContent = multiply(num1, num2);
    } else if (operator == "÷"){
        if (num2 == 0){
            screen.textContent = "a wild UNICORNMAN appears...";
          
            setTimeout(function(){
                screen.textContent = "";
                firstNum = "";
                operator = "";
                secondNum = "";
                showImg();
            }, 1000);
            
        } else {
        screen.textContent = divide (num1,num2);
        }
    }
};

function clearEntry(){
    if (firstNum !== "" && secondNum !== ""){ //clear 2nd num
        secondNum = "";
        screen.textContent = `${firstNum} ${operator}`;
    } else if (firstNum !== "" && operator == "=" && secondNum == ""){ //clear result after =
            screen.textContent = "";
            firstNum = "";
            operator = "";
    } else if (firstNum !== "" && operator !== "" && secondNum == ""){ //clear operator
        operator = "";
        screen.textContent = `${firstNum}`;
    } else if (firstNum !== "" && operator == "" && secondNum == ""){ //clear 1st num
        firstNum = "";
        screen.textContent = "";
    } 
};

function showImg(){
    document.getElementById('unicornCard').style.display = "block";

    setTimeout(function(){
        document.getElementById('unicornCard').style.display = "none";
    }, 3000);
};












