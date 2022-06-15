//A variable that will hold the selected transaction is defined.
var Process = "";

var FirstNumber = 0; // Variable definition to memorize.

// Push button part
function AddTextValue(AValue) {

    var TxtResult = document.getElementById("TxtResult"); // The object is controlled.

    if (TxtResult !== undefined) { // If the object is undefined   

        if (TxtResult !== null) { // If the object does not exist.

            if (TxtResult.value === "0") { // TxtResult.value returns string expression.

                TxtResult.value = AValue;

            } else {

                TxtResult.value += AValue; // Add Value to whatever value is in it. If the incoming value + the expression in the box.
            }
        }
    }
}

// Clear part.
function Clear() {

    var TxtResult = document.getElementById("TxtResult");

    if (TxtResult !== undefined) {

        if (TxtResult !== null) {
            TxtResult.value = "0";
        }
    }
    Process = "";

    FirstNumber = 0;
}

// Dot controlled part.
function SetDot() {

    var TxtResult = document.getElementById("TxtResult");

    if (TxtResult !== undefined) {

        if (TxtResult !== "null") {

            if (TxtResult !== '') {

                var index = TxtResult.value.indexOf(','); // If it searches for the given character in a string expression, it returns the index number.

                if (index > -1) { // If not found, it returns -1. !== can also be used.
                    return;
                }
                TxtResult.value += ",";

            } else {

                TxtResult.value = '0,';
            }

        }
    }

}

// Addition Subtraction Division Multiplication part. Which process is held when each action button is pressed. Process and FirstNumber variable at the top.

function SetProcess(ProcessType) {

    Process = ProcessType;

    var TxtResult = document.getElementById("TxtResult");

    if (TxtResult !== undefined) {

        if (TxtResult !== "null") {

            FirstNumber = parseFloat(TxtResult.value.replace(',', '.'));
            TxtResult.value = "";
        }

    }
}

function EqualProcess() {

    var Result = "";

    var SecondNumber = 0;
    
    var TxtResult = document.getElementById("TxtResult");

    if (TxtResult !== undefined) {

        if (TxtResult !== null) {

            SecondNumber = parseFloat(TxtResult.value.replace(',', '.')); // By adding the replace method, parts with commas were made functional.
        }
    }

    if (Process === '+') {

        Result = FirstNumber + SecondNumber;

    } else if (Process === '-') {

        Result = FirstNumber - SecondNumber;

    } else if (Process === '*') {

        Result = FirstNumber * SecondNumber;

    } else if (Process === '/') {

        Result = FirstNumber / SecondNumber;
    }

    TxtResult.value = Result;
}

function Back() {
    var TxtResult = document.getElementById("TxtResult");

    if (TxtResult !== undefined) {

        if (TxtResult !== null);

        var AValue = TxtResult.value;

        var ANewValue = AValue.substring(0, AValue.length - 1);

        TxtResult.value = ANewValue;
    }
}

/*
function BackBack() {
    var TxtResult = document.getElementById("TxtResult");
    if (TxtResult !== undefined) {
        if (TxtResult !== null) {
            var AValue = TxtResult.value;
            var ANewValue = AValue.substring(0, AValue.length - 2); // substring(star)
            //var g = AValue.substr(-1);
            TxtResult.value = ANewValue;
        }
    }
}
*/

/*
Javascript slice() method, the array given to it as a parameter
Copies the values ​​in the range and returns it, creating a new array.
The indexOf() method searches for the value given in an array and returns the index of the element with the first match.
*/

function BackBack() {

    var TxtResult = document.getElementById('TxtResult');

    if (TxtResult !== undefined) {

        if (TxtResult !== null) {

            var index = TxtResult.value.indexOf(',');

            if (index > -1) {

                var AValue = TxtResult.value;

                var ANewValue = AValue.substring(0, AValue.length - 2);

                // var g = AValue.substring(-1);

                var AControlValue = ANewValue.slice(0, -1);

                var index = AControlValue.indexOf(',');

                if (index > -1) {

                    TxtResult.value = ANewValue;

                } else {

                    TxtResult.value = AControlValue;
                }
            } else {

                var AValue = TxtResult.value;

                var ANewValue = AValue.slice(0, -1);

                TxtResult.value = ANewValue;
            }
        }
    }
}