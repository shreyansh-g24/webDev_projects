const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

// Write a program to calculate the total price of your phone purchase.
// You will keep purchasing phones (hint: loop!) until you run out of bank balance.
// You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.

//After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

//Finally, check the amount against your bank account balance to see if you can afford it or not.

// Write a function called calculateTax which takes an argument 'amount' and calculates the tax you need to pay.

// Write a function named formatAmount which returns you amount in this format '$ 132.45' make the decimal fixed to 2 places.

var totalExp = 0;
var count = 0;
var tax = 0;

function calculateTax(amt, taxRate){
    return amt * taxRate;
}

function formatAmount(amt){
    console.log("Formatted amount: %d", amt.toFixed(2));
}

while(bank_balance > totalExp){
    var purchaseAmount = (PHONE_PRICE + ACCESSORY_PRICE);
    if(purchaseAmount <= 200)
    {
        console.log("Purchase allowed. Bank Balance: %d", bank_balance.toFixed(2));
        tax = calculateTax(purchaseAmount, TAX_RATE);
        totalExp = purchaseAmount + tax;
        count++;
        bank_balance -= totalExp;
        console.log("Purchase Made. New Bank Balance: %d\nTax Paid: %d", bank_balance.toFixed(2), tax.toFixed(2));
        formatAmount(totalExp);
    }
}

console.log("Short on bank balance.\nNo of phones: %d\nBank Balance: %d", count, bank_balance.toFixed(2));
