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

// Task 3 - Customer Loyalty Discount

const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate; //Declare discount rate variable

    if (years >= 5) discountRate = 0.15; //15% discount for atleast 5 years

    else if (years >= 3) discountRate = 0.10; //10% discount for atleast 3 years

    else discountRate = 0.05; //5% discount for less than 3 years

    const discountedPrice = amount * (1 - discountRate); //Calculate discounted price

    console.log('Discounted price: $${discountedPrice.toFixed(2)}'); //Log discounted price
};

calculateLoyaltyDiscount(100, 6); //Expected output: $85.00
calculateLoyaltyDiscount(200, 2); //Expected output: $190.00
