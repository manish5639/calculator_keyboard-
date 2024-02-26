
const keyboardInput = document.getElementById('textview');
function backspace() {
    let exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0, exp.length - 1);
}



function insert(num) {
    let arr = ["+", "-", "*", "/", "%", "."];
    let a = keyboardInput.value[keyboardInput.value.length - 1];
    if (arr.includes(a) && a == num) { } else if (arr.includes(a) && arr.includes(num)) {
        backspace()
        document.form1.textview.value += num;
    } else {
        document.form1.textview.value += num;
    }
}


// keyboardInput.addEventListener("change", (e) => {

// })
document.addEventListener("keydown", (code) => {
    var arr = ["/","*","-","+",".","%"];
    var a = keyboardInput.value[keyboardInput.value.length - 1];
   

    if (code.key === "1") {
        (keyboardInput.value) += code.key;
    }
    if (code.key === "2") {
        (keyboardInput.value) += code.key;
    }
    if (code.key === "3") {
        (keyboardInput.value) += code.key;
    }
    if (code.key === "4") {
        (keyboardInput.value) += code.key;
    }
    if (code.key === "5") {
        (keyboardInput.value) += code.key;
    }
    if (code.key === "6") {
        (keyboardInput.value) += code.key;
    }
    if (code.key === "7") {
        (keyboardInput.value) += code.key;
    }
    if (code.key === "8") {
        (keyboardInput.value) += code.key;
    }
    if (code.key === "9") {
        (keyboardInput.value) += code.key;
    }
    if (code.key === "0") {
        (keyboardInput.value) += code.key;
    }
    if (code.key === "/") {
        // (keyboardInput.value) += code.key;
        if (arr.includes(a) && a == code.key) { } else if (arr.includes(a) && arr.includes(code.key)) {
            backspace()
            document.form1.textview.value += code.key;
        } else {
            document.form1.textview.value += code.key;
        }
    }
    if (code.key === "*") {
        // (keyboardInput.value) += code.key;
        if (arr.includes(a) && a == code.key) { } else if (arr.includes(a) && arr.includes(code.key)) {
            backspace()
            document.form1.textview.value += code.key;
        } else {
            document.form1.textview.value += code.key;
        }
    }
    if (code.key === "+") {
        // (keyboardInput.value) += code.key;
        if (arr.includes(a) && a == code.key) { } else if (arr.includes(a) && arr.includes(code.key)) {
            backspace()
            document.form1.textview.value += code.key;
        } else {
            document.form1.textview.value += code.key;
        }
    }
    if (code.key === "-") {
        // (keyboardInput.value) += code.key;
        if (arr.includes(a) && a == code.key) { } else if (arr.includes(a) && arr.includes(code.key)) {
            backspace()
            document.form1.textview.value += code.key;
        } else {
            document.form1.textview.value += code.key;
        }
    }
    if (code.key === ".") {
        // (keyboardInput.value) += code.key;
        if (arr.includes(a) && a == code.key) { } else if (arr.includes(a) && arr.includes(code.key)) {
            backspace()
            document.form1.textview.value += code.key;
        } else {
            document.form1.textview.value += code.key;
        }
    }

    if (code.key === "%") {
        // (keyboardInput.value) += code.key;
        if (arr.includes(a) && a == code.key) { } else if (arr.includes(a) && arr.includes(code.key)) {
            backspace()
            document.form1.textview.value += code.key;
        } else {
            document.form1.textview.value += code.key;
        }
    }

    if (code.key == 'Enter') {
        keyboardInput.value = eval(keyboardInput.value);
    }


    if (code.keyCode === 8 || code.key === "Backspace") {
        code.preventDefault();
        var value = textview.value;
        var newValue = value.slice(0, -1);
        textview.value = newValue;
    }
    if (code.keyCode === 46 || code.key === "Delete") {
        code.preventDefault();
        var value = textview.value;
        var newValue = '';
        textview.value = newValue;
    }


    // let arr1 = code.key["+", "-", "*", "/", "%", "."];
    // let a1 = keyboardInput.value[keyboardInput.value.length - 1];
    // if (arr1.includes(a1) && a1 == num) { } else if (arr1.includes(a1) && arr1.includes(num)) {
    //     backspace()
    //     document.form1.textview.value += code.key;
    // }
    // else {
    //     document.form1.textview.value += code.key;
    // }

    // console.log(code.key);
})

// let char = '08';
// let ascii = char.charCodeAt('08');
// console.log(ascii); // Output: 65
