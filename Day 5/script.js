//Create a function wich will say Hello `Person name` How are you, that you pass as an argument

function greeting(name) {
    console.log(`Hello ${name}, how are you?`);
}
greeting(`John`);
greeting(`Jacob`);

//!Task 1
//Write a function that takes in a first name and a surname as arguments
//and returns a message greeting them

function welcome(firstName, lastName) {
    return `Welcome ${firstName} ${lastName}, I hope you are well!`
}
console.log(welcome("John", "Smith"));

//!Task 2
//Write a function that takes in a string as an argument
//and sorts the string into alphabetical order and returns the result.







let string = prompt(`Enter a string:`);
function alphabetical(string) {
    //!Created this first, unneccessary, can just use split() instead.
    // let stringArray = []
    // for(i=0;i<string.length;i++){
    //     stringArray.push(string[i])
    // }
    // stringArray.sort()
    string = string.split("")
    string = string.sort()
    string = string.join("");
    return string;
}
console.log(alphabetical(string))




//!Task 3
//Write a cash machine / atm function that takes in a withdrawal amount 
//and a pin number as an argument and compares the pin and withdrawal amount 
//against a stored pin and account balance. If the pin matches and the balance is 
//sufficient approve the transaction, if not decline the transaction.

function atm(userPin, userAmount) {
    let pin = 2839;
    let amount = 500;
    //!This method tests both before return whether one of them is wrong.
    // if (userPin == pin && userAmount <= amount){
    //     amount = amount - userAmount;
    //     console.log(`Transaction approved. New Balance: ${amount}.`);
    // } else {
    //     console.log(`Transaction Declined.`)
    // }
    // while(userPin != pin){
    //     userPin = prompt(`Invalid pin. Enter your pin:`)
    // }
    //! END OF METHOD
    //! This method asks for both, tests the pin first and only when it is correct will it check the balance.
    //!If you run out of attempts(3) then it will tell you out of attempts, and exit.
    //! Insufficient funds, out of attempts will decline your request.
    if (userPin != pin) {
        for (i = 2; i > -1; i--) {
            userPin = prompt(`Invalid pin. ${i+1} attempts left. Enter your pin:`);
            if (userPin == pin) {
                console.log(`Correct Pin.`);
                break;
            } else if (i == 0) {
                console.log(`Out of attempts.`);
            }
        }
    } 
    if (userPin == pin && userAmount <= amount) {
        amount = amount - userAmount;
        console.log(`Transaction approved. New Balance: ${amount}.`);
    } else if (userPin == pin && userAmount > amount) {
        console.log(`Insufficient funds.`)
    }
}
atm(prompt("Enter your pin:"), prompt("Withdrawel amount:"));