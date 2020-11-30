let displayValue = "";

let userInput = [];



const addition = function(a, b) {
    if (typeof(a) === "string" || typeof(b) === "string") {

        return parseInt(a) + parseInt(b);
    }
}


const subtraction = function(a, b) {
    if (typeof(a) === "string" || typeof(b) === "string") {

        return parseInt(a) - parseInt(b);
    }
}


const multiplication = function(a, b) {
    if (typeof(a) === "string" || typeof(b) === "string") {

        return parseInt(a) * parseInt(b);
    }

}

const division = function (a, b) {
    if (typeof(a) === "string" || typeof(b) === "string") {

        return parseInt(a) / parseInt(b);
    }

}



const operate = function (arr) {

    
    for (let i = 0; i < arr.length; i++) {
        
            let step;

            if (arr[i] === "+") {
             
                step = addition(arr[i - 1], arr[i + 1]); 
                arr[i + 1] = step.toString();
                arr.splice([i - 1], [i + 1]);
                
                i = 0;
                
            }
            
            
            if (arr[i] === "-") {
                step = subtraction(arr[i - 1], arr[i + 1]);
                arr[i + 1] = step.toString();
                arr.splice([i - 1], [i + 1]);
                
                i = 0;
            }  
            
            if (arr[i] === "*") {
                step = multiplication(arr[i - 1], arr[i + 1]);
                arr[i + 1] = step.toString();
                arr.splice([i - 1], [i + 1]);
                
                i = 0;
            } 


            if (arr[i] === "/") {
                
                if (arr[i + 1] === "0") {
                    const displayScreen = document.querySelector(".display-screen");
                    
                    return displayScreen.textContent = "ERROR";

                } else {
                step = division(arr[i - 1], arr[i + 1]);
                arr[i + 1] = step.toString();
                arr.splice([i - 1], [i + 1]);
                
                i = 0;
                }
            }
        
    
    const displayScreen = document.querySelector(".display-screen");
    
    
    if (userInput[0].length >= 7) {
        displayScreen.textContent = parseFloat(userInput[0]).toPrecision(6);
    } 
    else if (userInput[0].length >= 7 && parseFloat(userInput[0]) % 1 !== 0) {
        displayScreen.textContent = parseFloat(userInput[0]).toPrecision(6);
    
    }else {
        
        displayScreen.textContent = userInput[0];
    
    }

    

    displayValue = "";

    }

};



const btnAddition = document.querySelector('#button-addition');

btnAddition.addEventListener('click', () => {

    if (displayValue !== "") {
        userInput.push(displayValue);
    }
    
    if (userInput.length === 3) {
        operate(userInput);
        
    }

    userInput.push("+");


    displayValue = "";

    
    
});


const btnSubtraction = document.querySelector('#button-subtraction');

btnSubtraction.addEventListener('click', () => {
    if (displayValue !== "") {
        userInput.push(displayValue);
    }

    if (userInput.length === 3) {
        operate(userInput);
        
    }

    userInput.push("-");
    displayValue = "";

    
});

const btnMultiplication = document.querySelector('#button-multiplication');

btnMultiplication.addEventListener('click', () => {
    if (displayValue !== "") {
        userInput.push(displayValue);
    }

    if (userInput.length === 3) {
        operate(userInput);
        
    }

    userInput.push("*");
    displayValue = "";


    
});

const btnDivision = document.querySelector('#button-division');

btnDivision.addEventListener('click', () => {
    if (displayValue !== "") {
        userInput.push(displayValue);
    }

    if (userInput.length === 3) {
        operate(userInput);
        
    }

    userInput.push("/");
    displayValue = "";


    
});

const btnEqual = document.querySelector('.button-equal');

btnEqual.addEventListener('click', () => {
    userInput.push(displayValue);
    operate(userInput);

});

const btnClear = document.querySelector('.button-ac');

btnClear.addEventListener('click', () => {
    userInput.length = 0;
    displayValue= "";
    const displayScreen = document.querySelector(".display-screen");
    displayScreen.textContent = displayValue;

});



const btn1 = document.querySelector('#button-1');

btn1.addEventListener('click', () => {
    if (userInput[userInput.length - 1] !== "+" && userInput[userInput.length - 1] !== "-" && userInput[userInput.length - 1] !== "*" && userInput[userInput.length - 1] !== "/") {
        userInput.length = 0;
        
    } 

    const displayScreen = document.querySelector(".display-screen");
    displayValue += "1";
    displayScreen.textContent = displayValue;

});

const btn2 = document.querySelector('#button-2');

btn2.addEventListener('click', () => {
    if (userInput[userInput.length - 1] !== "+" && userInput[userInput.length - 1] !== "-" && userInput[userInput.length - 1] !== "*" && userInput[userInput.length - 1] !== "/") {
        userInput.length = 0;
        
    } 

    const displayScreen = document.querySelector(".display-screen");
    displayValue += "2";
    displayScreen.textContent = displayValue;


});


const btn3 = document.querySelector('#button-3');

btn3.addEventListener('click', () => {
    if (userInput[userInput.length - 1] !== "+" && userInput[userInput.length - 1] !== "-" && userInput[userInput.length - 1] !== "*" && userInput[userInput.length - 1] !== "/") {
        userInput.length = 0;
        
    } 

    const displayScreen = document.querySelector(".display-screen");
    displayValue += 3;
    displayScreen.textContent = displayValue;


});

const btn4 = document.querySelector('#button-4');

btn4.addEventListener('click', () => {
    if (userInput[userInput.length - 1] !== "+" && userInput[userInput.length - 1] !== "-" && userInput[userInput.length - 1] !== "*" && userInput[userInput.length - 1] !== "/") {
        userInput.length = 0;
        
    } 

    const displayScreen = document.querySelector(".display-screen");
    displayValue += 4;
    displayScreen.textContent = displayValue;

});

const btn5 = document.querySelector('#button-5');

btn5.addEventListener('click', () => {
    if (userInput[userInput.length - 1] !== "+" && userInput[userInput.length - 1] !== "-" && userInput[userInput.length - 1] !== "*" && userInput[userInput.length - 1] !== "/") {
        userInput.length = 0;
        
    } 

    const displayScreen = document.querySelector(".display-screen");
    displayValue += 5;
    displayScreen.textContent = displayValue;

});

const btn6 = document.querySelector('#button-6');

btn6.addEventListener('click', () => {
    if (userInput[userInput.length - 1] !== "+" && userInput[userInput.length - 1] !== "-" && userInput[userInput.length - 1] !== "*" && userInput[userInput.length - 1] !== "/") {
        userInput.length = 0;
        
    } 

    const displayScreen = document.querySelector(".display-screen");
    displayValue += 6;
    displayScreen.textContent = displayValue;

});

const btn7 = document.querySelector('#button-7');

btn7.addEventListener('click', () => {
    if (userInput[userInput.length - 1] !== "+" && userInput[userInput.length - 1] !== "-" && userInput[userInput.length - 1] !== "*" && userInput[userInput.length - 1] !== "/") {
        userInput.length = 0;
        
    } 

    const displayScreen = document.querySelector(".display-screen");
    displayValue += 7;
    displayScreen.textContent = displayValue;

});

const btn8 = document.querySelector('#button-8');

btn8.addEventListener('click', () => {
    if (userInput[userInput.length - 1] !== "+" && userInput[userInput.length - 1] !== "-" && userInput[userInput.length - 1] !== "*" && userInput[userInput.length - 1] !== "/") {
        userInput.length = 0;
        
    } 

    const displayScreen = document.querySelector(".display-screen");
    displayValue += 8;
    displayScreen.textContent = displayValue;

});

const btn9 = document.querySelector('#button-9');

btn9.addEventListener('click', () => {
    if (userInput[userInput.length - 1] !== "+" && userInput[userInput.length - 1] !== "-" && userInput[userInput.length - 1] !== "*" && userInput[userInput.length - 1] !== "/") {
        userInput.length = 0;
        
    } 

    const displayScreen = document.querySelector(".display-screen");
    displayValue += 9;
    displayScreen.textContent = displayValue;

});

const btn0 = document.querySelector('#button-0');

btn0.addEventListener('click', () => {
    if (userInput[userInput.length - 1] !== "+" && userInput[userInput.length - 1] !== "-" && userInput[userInput.length - 1] !== "*" && userInput[userInput.length - 1] !== "/") {
        userInput.length = 0;
        
    } 

    const displayScreen = document.querySelector(".display-screen");
    displayValue += 0;
    displayScreen.textContent = displayValue;

});



