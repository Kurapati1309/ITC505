document.addEventListener("DOMContentLoaded", function() {
    var x = document.lastModified;
    document.getElementById('lastModified').textContent = x;
});

function convertTemperature() {
    let tempInput = document.getElementById("temp-input").value;
    let tempType = document.getElementById("temp-type").value;
    let result;

    if (tempType === "C") {
        result = (tempInput * 9/5) + 32;
        result = result.toFixed(2) + "° Fahrenheit";
    } else {
        result = (tempInput - 32) * 5/9;
        result = result.toFixed(2) + "° Celsius";
    }

    document.getElementById("result").innerText = "Converted Temperature: " + result;
}
