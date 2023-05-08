var calcScreen = document.querySelector("#calc-screen");
var startMin = document.querySelector("#start-minus").getAttribute('value');
var clearOne = document.querySelector("#clear-one").getAttribute('value');
var clearAll = document.querySelector("#clear-all").getAttribute('value');
var backspace = document.querySelector("#back-img").getAttribute('value');
var div = document.querySelector("#div").getAttribute('value');
var multi = document.querySelector("#multi").getAttribute('value');
var sub = document.querySelector("#sub").getAttribute('value');
var add = document.querySelector("#add").getAttribute('value');
var equal = document.querySelector("#equal").getAttribute('value');
var point = document.querySelector("#point").getAttribute('value');
var num0 = document.querySelector("#num-0").getAttribute('value');
var num1 = document.querySelector("#num-1").getAttribute('value');
var num2 = document.querySelector("#num-2").getAttribute('value');
var num3 = document.querySelector("#num-3").getAttribute('value');
var num4 = document.querySelector("#num-4").getAttribute('value');
var num5 = document.querySelector("#num-5").getAttribute('value');
var num6 = document.querySelector("#num-6").getAttribute('value');
var num7 = document.querySelector("#num-7").getAttribute('value');
var num8 = document.querySelector("#num-8").getAttribute('value');
var num9 = document.querySelector("#num-9").getAttribute('value');

var calcScreen = [];
var answerArr = [];

function numZero() {
    calcScreen.push(num0);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numZero() {
    calcScreen.push(num0);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numZero() {
    calcScreen.push(num0);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numZero() {
    calcScreen.push(num0);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numOne() {
    calcScreen.push(num1);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numTwo() {
    calcScreen.push(num2);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numThree() {
    calcScreen.push(num3);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numFour() {
    calcScreen.push(num4);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numFive() {
    calcScreen.push(num5);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numSix() {
    calcScreen.push(num6);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numSeven() {
    calcScreen.push(num7);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numEight() {
    calcScreen.push(num8);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function numNine() {
    calcScreen.push(num9);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function addition() {
    calcScreen.push(add);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function subtraction() {
    calcScreen.push(sub);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function multiply() {
    calcScreen.push(multi);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function divide() {
    calcScreen.push(div);
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function decimal() {
    calcScreen.push(".");
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function square() {
    calcScreen.push("<sup class='square'>2</sup>");
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function root() {
    calcScreen.push("√");
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function answer() {
    var length = calcScreen.length
    

    for (var i = 0; i < length; i++) {
        if (calcScreen[i] === "+") {
            var addAns = Number(calcScreen.slice(0, i).join("")) + Number(calcScreen.slice(i + 1).join(""))
            answerArr.push(addAns)

        }

        else if (calcScreen[i] === "-") {
            var addAns = Number(calcScreen.slice(0, i).join("")) - Number(calcScreen.slice(i + 1).join(""))
            answerArr.push(addAns)
        }

        else if (calcScreen[i] === "*") {
            var addAns = Number(calcScreen.slice(0, i).join("")) * Number(calcScreen.slice(i + 1).join(""))
            answerArr.push(addAns)
        }

        else if (calcScreen[i] === "/") {
            var addAns = Number(calcScreen.slice(0, i).join("")) / Number(calcScreen.slice(i + 1).join(""))
            answerArr.push(addAns)

        }

        else if (calcScreen[i] === "%") {
            var addAns = Number(calcScreen.slice(0, i).join("")) % Number(calcScreen.slice(i + 1).join(""))
            answerArr.push(addAns)
        }

        else if (calcScreen[i] === "√") {
            var addAns = Math .sqrt(Number(calcScreen.slice(i+1).join("")))
            answerArr.push(addAns)
        }

        else if (calcScreen[i] === "<sup>2</sup>") {
            var addAns = Number(calcScreen.slice(0, i).join("")) * Number(calcScreen.slice(0, i).join(""))
            answerArr.push(addAns)
        }        
    }

    document.querySelector("#calc-screen").innerHTML = answerArr.join("")
    console.log(answerArr)
    for (i = 0; i < length; i++) {
        calcScreen.pop()
    }
}

function backSpace() {
    calcScreen.pop();
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}

function allClear() {
    var length = answerArr.length
    for (i = 0; i < length; i++) {
        answerArr.pop()
        calcScreen.pop()
    }
    document.querySelector('#calc-screen').innerHTML = calcScreen.join("")
}




