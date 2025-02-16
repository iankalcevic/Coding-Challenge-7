// Task 1 - Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount; //Calculate total with tax and discount

console.log('Total invoice: $${total.toFixed(2)}'); //Log total invoice amount
};

calculateInvoice(100, 0.08, 5); //Expected output: $103.00
calculateInvoice(500, 0.1, 20); //Expected output: $530.00

// Task 2 - Employee Hourly Wage Calculation

const calculateHourlyWage = function(salary, hoursPerWeek) {
    const hourlyWage = salary / (hoursPerWeek * 52); //Salary by work hours in a year

    console.log('Hourly wage: $${hourlyWage.toFixed(2)}');
}; //Log hourly wage 

calculateHourlyWage(52000, 40); //Expeceted output: $25.00
calculateHourlyWage(75000, 35); //Expected output: $41.21
