//!Task1
//Write a conditional statement to check a customer’s age at a bar. 
//If the customer is under 18 log a message advising they are too young, 
//otherwise ask what they would like to drink.
let age = 18 //prompt(`Enter your age: `);
if(age<18){
    console.log(`You are too young.`)
}
else{
    console.log(`What would you like to drink?`)
}

//!Task2
//2: Declare a variable called "Password". Write an if statement
//that checks how many characters are in the password, 
//if the password has more than 8 characters log the password to the console, 
//if the password has less than 8 characters log to the console that the password is too short.
let password = `12345678` //prompt(`Please enter a password: `)
passwordLength = password.length;
if(passwordLength>8){
    console.log(`Password too long.`);
}
else if(passwordLength<8){
    console.log(`Password too short.`);
}
else{
    console.log(`Valid Password.`);
}

//!Task3
//3: Create a variable that stores a number. Check whether the number is divisible by 3 or 5, 
//if so log "This number is divisible by 3 or 5" to the console. 
//Otherwise log an alternate message to the console.
let num1=11;
if(num1%3==0 || num1%5==0){
    console.log(`${num1} is divisible by 3 or 5`);
}
else{
    console.log(`${num1} is not divisible by 3 or 5`);
}

//!Task4
//Create a variable that stores a number. If the number is divisible by 3, 
//log "fizz" to the console. If the number is divisible by 5 log "buzz" to the console. 
//If the number is divisible by both 3 and 5, log "fizz buzz" to the console. 
//Otherwise log the number to the console.
let num2=11;
if(num2%3==0 && num2%5==0){
    console.log(`fizz buzz`);
}
else if(num2%3==0){
    console.log(`fizz`)
}
else if(num2%5==0){
    console.log(`buzz`)
}
else{
    console.log(num2)
}