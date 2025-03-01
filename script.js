function floatToIEEE754(num) {
    let buffer = new ArrayBuffer(4);
    let floatView = new Float32Array(buffer);
    let intView = new Uint32Array(buffer);

    floatView[0] = num;
    let binaryString = intView[0].toString(2).padStart(32, '0');

    let sign = binaryString[0];
    let exponent = binaryString.substring(1, 9);
    let mantissa = binaryString.substring(9);

    return { binaryString, sign, exponent, mantissa };
}

function convertToIEEE() {
    let decimalInput = document.getElementById("decimalInput").value;
    if (decimalInput === "") {
        alert("Please enter a valid number!");
        return;
    }

    let num = parseFloat(decimalInput);
    let ieee = floatToIEEE754(num);

    document.getElementById("decimal").textContent = num;
    document.getElementById("binary").textContent = ieee.binaryString;
    document.getElementById("sign").textContent = ieee.sign;
    document.getElementById("exponent").textContent = ieee.exponent;
    document.getElementById("mantissa").textContent = ieee.mantissa;
    
    document.getElementById("result").classList.remove("hidden");
}
