document.addEventListener("DOMContentLoaded", function () {
    const billTotalInput = document.getElementById("billTotal");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const tipSliderInput = document.getElementById("tipSlider");
    const totalWithTipInput = document.getElementById("totalWithTip");
    const tipCalculatorForm = document.getElementById("tipCalculator");

    tipCalculatorForm.addEventListener("input", calculateTip);

    function calculateTip() {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = tipSliderInput.value;
        const tipAmount = (billTotal * tipPercentage) / 100;
        const totalWithTip = billTotal + tipAmount;

        if (!isNaN(totalWithTip)) {
            tipPercentageInput.value = tipPercentage + "%";
            tipAmount = tipAmount.toFixed(2);
            totalWithTip = totalWithTip.toFixed(2);
            tipSliderInput.style.backgroundColor = "#4CAF50"; // Highlight the slider
        } else {
            tipSliderInput.style.backgroundColor = "#FF0000"; // Highlight the slider in case of an error
        }

        totalWithTipInput.value = totalWithTip;
    }
});
