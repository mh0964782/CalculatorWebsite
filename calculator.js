"use strict";

var currentNumHTML = "";
var newNumHTML = "";
var operatorHTML = "";
var numCalcHTML = document.getElementById("num_calc");
var numResultHTML = document.getElementById("num_result");

document.getElementById("row_5_col_1").addEventListener("click", MakeFloat);

document.getElementById("row_5_col_2").addEventListener("click", () => Num("0"));

document.getElementById("row_5_col_3").addEventListener("click", FlipSigns);

document.getElementById("row_4_col_1").addEventListener("click", () => Num("1"));

document.getElementById("row_4_col_2").addEventListener("click", () => Num("2"));

document.getElementById("row_4_col_3").addEventListener("click", () => Num("3"));

document.getElementById("row_3_col_1").addEventListener("click", () => Num("4"));

document.getElementById("row_3_col_2").addEventListener("click", () => Num("5"));

document.getElementById("row_3_col_3").addEventListener("click", () => Num("6"));

document.getElementById("row_2_col_1").addEventListener("click", () => Num("7"));

document.getElementById("row_2_col_2").addEventListener("click", () => Num("8"));

document.getElementById("row_2_col_3").addEventListener("click", () => Num("9"));

document.getElementById("row_5_col_4").addEventListener("click", () => Operator(" + "));

document.getElementById("row_4_col_4").addEventListener("click", () => Operator(" - "));

document.getElementById("row_3_col_4").addEventListener("click", () => Operator(" &#215; "));

document.getElementById("row_2_col_4").addEventListener("click", () => Operator(" &#247; "));

document.getElementById("row_6_col_1").addEventListener("click", PI);

document.getElementById("row_6_col_2").addEventListener("click", Squared);

document.getElementById("row_7_col_1").addEventListener("click", ClearAll);

document.getElementById("row_7_col_2").addEventListener("click", Del);

document.getElementById("row_7_col_3").addEventListener("click", EqualsTo);

// Number Button Function
function Num(btnNum) {
    if (numCalcHTML.innerHTML == "" || (currentNumHTML != "" && operatorHTML == "" && newNumHTML == "")) {
        currentNumHTML += btnNum;
        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        return;
    }
    if ((currentNumHTML != "" && operatorHTML != "" && newNumHTML == "") || (currentNumHTML != "" && operatorHTML != "" && newNumHTML != "")) {
        if (!newNumHTML.includes("-")) {
            newNumHTML += btnNum;
            numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;

            return;
        }
        else {
            newNumHTML = newNumHTML.slice(0, newNumHTML.length - 1) + btnNum + ")";

            numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        }
    }
}

// Operator Button Function
function Operator(btnOp) {
    if ((currentNumHTML != "" && operatorHTML == "" && newNumHTML == "") || (currentNumHTML != "" && operatorHTML != "" && newNumHTML == "")) {
        operatorHTML = btnOp;
        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        return;
    }
    if ((currentNumHTML != "" && operatorHTML != "" && newNumHTML != "")) {
        let calc = 0.0;
        if (!newNumHTML.includes("-")) {
            if (operatorHTML == " + ") {
                calc = Number.parseFloat(currentNumHTML) + Number.parseFloat(newNumHTML);
            }
            else if (operatorHTML == " - ") {
                calc = Number.parseFloat(currentNumHTML) - Number.parseFloat(newNumHTML);
            }
            else if (operatorHTML == " &#215; ") {
                calc = Number.parseFloat(currentNumHTML) * Number.parseFloat(newNumHTML);
            }
            else if (operatorHTML == " &#247; ") {
                calc = Number.parseFloat(currentNumHTML) / Number.parseFloat(newNumHTML);
            }
        }
        else {
            if (operatorHTML == " + ") {
                calc = Number.parseFloat(currentNumHTML) + Number.parseFloat(newNumHTML.slice(1, newNumHTML.length - 1));
            }
            else if (operatorHTML == " - ") {
                calc = Number.parseFloat(currentNumHTML) - Number.parseFloat(newNumHTML.slice(1, newNumHTML.length - 1));
            }
            else if (operatorHTML == " &#215; ") {
                calc = Number.parseFloat(currentNumHTML) * Number.parseFloat(newNumHTML.slice(1, newNumHTML.length - 1));
            }
            else if (operatorHTML == " &#247; ") {
                calc = Number.parseFloat(currentNumHTML) / Number.parseFloat(newNumHTML.slice(1, newNumHTML.length - 1));
            }
        }

        numResultHTML.innerHTML = calc.toString();
        currentNumHTML = numResultHTML.innerHTML;
        operatorHTML = btnOp;
        newNumHTML = "";

        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
    }
}

// Special Button Functions
function MakeFloat() {
    if ((currentNumHTML != "" && operatorHTML == "" && newNumHTML == "")) {
        if (!currentNumHTML.includes(".")) {
            currentNumHTML += ".";

            numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
            return;
        }
    }
    if ((currentNumHTML != "" && operatorHTML != "" && newNumHTML != "")) {
        if (!newNumHTML.includes(".") && !newNumHTML.includes("-")) {
            newNumHTML += ".";

            numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
            return;
        }
        if (!newNumHTML.includes(".") && newNumHTML.includes("-")) {
            newNumHTML = newNumHTML.slice(0, newNumHTML.length - 1) + ".)";

            numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        }
    }
}

function FlipSigns() {
    let flip = 0.0;
    if ((currentNumHTML != "" && operatorHTML == "" && newNumHTML == "")) {
        flip = Number.parseFloat(currentNumHTML) * -1;
        currentNumHTML = flip.toString();

        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        return;
    }
    if ((currentNumHTML != "" && operatorHTML != "" && newNumHTML == "")) {
        newNumHTML = "(-" + newNumHTML + ")";

        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        return;
    }
    if ((currentNumHTML != "" && operatorHTML != "" && newNumHTML != "")) {
        if (!newNumHTML.includes("-")) {
            newNumHTML = "(-" + newNumHTML + ")";

            numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
            return;
        }
        else {
            newNumHTML = newNumHTML.slice(2, newNumHTML.length - 1);

            numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        }
    }
}

// ***Testing***
function PI() {
    let pi = Math.PI;
    if ((currentNumHTML != "" && operatorHTML == "" && newNumHTML == "")) {

        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        return;
    }
    if ((currentNumHTML != "" && operatorHTML != "" && newNumHTML == "")) {
        newNumHTML = pi;

        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        return;
    }
    if ((currentNumHTML != "" && operatorHTML != "" && newNumHTML != "")) {
        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
    }
}

// ***Testing***
function Squared() {

}

function ClearAll() {
    numCalcHTML.innerHTML = "";
    numResultHTML.innerHTML = "0";
    currentNumHTML = "";
    newNumHTML = "";
    operatorHTML = "";
}

function EqualsTo() {
    if ((currentNumHTML != "" && operatorHTML != "" && newNumHTML != "")) {
        let calc = 0.0;
        if (!newNumHTML.includes("-")) {
            if (operatorHTML == " + ") {
                calc = Number.parseFloat(currentNumHTML) + Number.parseFloat(newNumHTML);
            }
            else if (operatorHTML == " - ") {
                calc = Number.parseFloat(currentNumHTML) - Number.parseFloat(newNumHTML);
            }
            else if (operatorHTML == " &#215; ") {
                calc = Number.parseFloat(currentNumHTML) * Number.parseFloat(newNumHTML);
            }
            else if (operatorHTML == " &#247; ") {
                calc = Number.parseFloat(currentNumHTML) / Number.parseFloat(newNumHTML);
            }
        }
        else {
            if (operatorHTML == " + ") {
                calc = Number.parseFloat(currentNumHTML) + Number.parseFloat(newNumHTML.slice(1, newNumHTML.length - 1));
            }
            else if (operatorHTML == " - ") {
                calc = Number.parseFloat(currentNumHTML) - Number.parseFloat(newNumHTML.slice(1, newNumHTML.length - 1));
            }
            else if (operatorHTML == " &#215; ") {
                calc = Number.parseFloat(currentNumHTML) * Number.parseFloat(newNumHTML.slice(1, newNumHTML.length - 1));
            }
            else if (operatorHTML == " &#247; ") {
                calc = Number.parseFloat(currentNumHTML) / Number.parseFloat(newNumHTML.slice(1, newNumHTML.length - 1));
            }
        }

        numResultHTML.innerHTML = calc.toString();
        currentNumHTML = numResultHTML.innerHTML;
        operatorHTML = "";
        newNumHTML = "";

        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        return;
    }
    if ((currentNumHTML != "" && operatorHTML == "" && newNumHTML == "")) {
        numResultHTML.innerHTML = currentNumHTML;

        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
    }
}

function Del() {
    if ((currentNumHTML == "" && operatorHTML == "" && newNumHTML == "")) {
        numResultHTML.innerHTML = "0";
        return;
    }
    if ((currentNumHTML != "" && operatorHTML == "" && newNumHTML == "")) {
        currentNumHTML = currentNumHTML.slice(0, currentNumHTML.length - 1);

        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        return;
    }

    if ((currentNumHTML != "" && operatorHTML != "" && newNumHTML == "")) {
        operatorHTML = "";

        numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        return;
    }

    if ((currentNumHTML != "" && operatorHTML != "" && newNumHTML != "")) {
        if (!newNumHTML.includes("-")) {
            newNumHTML = newNumHTML.slice(0, newNumHTML.length - 1);

            numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        }
        else {
            newNumHTML = newNumHTML.slice(2, newNumHTML.length - 1);

            numCalcHTML.innerHTML = currentNumHTML + operatorHTML + newNumHTML;
        }
    }
}