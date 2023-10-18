let interestRate = .07;
let accountBalance = 700;
const time = ((72/interestRate.toFixed(2))/ 100);

const accountBalanceUpdated = accountBalance * 2;

console.log("At a " + interestRate + " (percentage as a decimal) interest rate, your savings account will be worth " + accountBalanceUpdated + " in " + time + " years.");