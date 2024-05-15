#! /usr/bin/env node 
import inquirer from "inquirer"

const currencies : any = {
    USD : 1,   //based currency
    PKR : 278.21,
    INR : 74.57,
    EUR : 0.91,
    GBP : 0.74,
};

let userCurrency = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: ["USD", "PKR","INR","EUR","GBP"]
        },
        {
            name:"to",
            message: "Enter to currency", 
            type: "list", 
            choices: ["USD", "PKR","INR","EUR","GBP"]
        },
        {
            name:"amount",
            message:"Enter your Amount",
            type: "number"
        }
    ]
)


let fromAmount = currencies[userCurrency.from]

let toAmount = currencies[userCurrency.to]

let amount = userCurrency.amount;

let baseAmount = amount / fromAmount;     // for based usd currency

let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount)
