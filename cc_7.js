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

// Task 4 - Product Shipping Cost Calculation

function calculateShippingCost(weight, location, expedited = false) {

    let cost = 0; //Original cost

    if (location === 'USA') {
        cost= 5 + (0.5 * weight); //$5 plus $0.5 per pound
    } else if (location === 'Canada') {
        cost = 10 + (0.7 * weight); //$10 plus $0.7 per pound
    }
    
    if (expedited) cost += 10; //$10 expedited fee

    console.log('Shipping cost: $${cost.toFixed(2)}'); //Log shipping cost
};

calculateShippingCost(10, 'USA', true); //Expected output: $20.00
calculateShippingCost(5, 'Canada', false); //Expected output: $13.50

// Task 5 - Business Loan Interest Calculation

function calculateLoanInterest(principal, rate, years) {
    
    const interest = principal * rate * years; //Formula for interest

    console.log('Total interest: $${interest.toFixed(2)}'); //Log total interest
};

calculateLoanInterest(1000, 0.05, 3); //Expected output: $150.00
calculateLoanInterest(5000, 0.07, 5); //Expected output: $1750.00

// Task 6 - Filtering High Value Transaction

let transactions = [500, 1200, 3000, 800, 2200]; //Set an array of transactions

function filterHighValueTransactions(transactions, filterFunction) {

    const result = transactions.filter(filterFunction); //Apply the filter function

    console.log("High-value transactions:", result); //Log filtered transaction
};

filterHighValueTransactions(transactions, amount => amount > 1000); //Expected output: 1200, 3000, 2200

// Task 7 - Budget Tracker

function createBudgetTracker() {

    let balance = 0; //Initialize balance
    return function(expense) {
        balance -= expense; //Subtract expense from balance

        console.log('Current balance: -$${Math.abs(balance)}'); //Log negative balance
    };
};

let budget = createBudgetTracker(); //Budget tracker instance

budget(300); //Expected output: -$300
budget(200); //Expected output: -$500
