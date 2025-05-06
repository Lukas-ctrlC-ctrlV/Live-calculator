let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector("#input3");
let select = document.querySelector("#select1");

function calculate() {
    let num1 = parseFloat(input1.value) || 0;
    let num2 = parseFloat(input2.value) || 0;
    let result = "";

    switch (select.value) {
        case "1":
            result = num1 + num2;
            break;
        case "2":
            result = num1 - num2;
            break;
        case "3":
            result = num2 !== 0 ? num1 / num2 : "Error (÷ by 0)";
            break;
        case "4":
            result = num1 * num2;
            break;
    }

    input3.value = result;
}

// Add event listeners for real-time updates
input1.addEventListener("input", calculate);
input2.addEventListener("input", calculate);
select.addEventListener("input", calculate);
