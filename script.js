document.addEventListener("DOMContentLoaded", function () {
    const billTotalInput = document.getElementById("billTotal");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const tipSliderInput = document.getElementById("tipSlider");
    const totalWithTipInput = document.getElementById("totalWithTip");

    const tipCalculatorForm = document.getElementById("tipCalculator");

    tipCalculatorForm.addEventListener("input", calculateTip);

    function calculateTip() {
        const billTotal = parseFloat(billTotalInput.value);
        if (isNaN(billTotal)) {
            totalWithTipInput.value = "$0.00";
            return;
        }

        const tipPercentage = tipSliderInput.value;
        const tipAmount = (billTotal * tipPercentage) / 100;
        const totalWithTip = billTotal + tipAmount;

        tipPercentageInput.value = tipPercentage + "%";
        totalWithTipInput.value = "$" + totalWithTip.toFixed(2);
    }
});
