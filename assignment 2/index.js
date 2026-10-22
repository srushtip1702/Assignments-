
const billInput = prompt("Enter the bill amount:");
const tipInput = prompt("Enter the tip percentage:");

// Explicit type conversion
const billAmount = Number(billInput);
const tipPercentage = Number(tipInput);

// Input validation
if (
    billInput === null ||
    tipInput === null ||
    billInput.trim() === "" ||
    tipInput.trim() === "" ||
    !Number.isFinite(billAmount) ||
    !Number.isFinite(tipPercentage) ||
    billAmount < 0 ||
    tipPercentage < 0
) {
    console.log("Please enter valid, non-negative numbers.");
} else {
    // Arithmetic operator
    const calculatedTip = billAmount * tipPercentage / 100;

    // Assignment operator
    let totalAmount = billAmount;
    totalAmount += calculatedTip;

    // Formatted output
    console.log(`Subtotal: $${billAmount}`);
    console.log(`Tip Percentage: ${tipPercentage}%`);
    console.log(`Calculated Tip: $${calculatedTip}`);
    console.log(`Total Amount to Pay: $${totalAmount}`);
}
