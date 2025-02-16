// Task 1 - Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount; //Calculate total with tax and discount

console.log('Total invoice: $${total.toFixed(2)}'); //Log total invoice amount
};

calculateInvoice(100, 0.08, 5); //Expected output: $103.00
calculateInvoice(500, 0.1, 20); //Expected output: $530.00
