//!Challenge 1
//Display all numbers starting from 0 up to and including 20

for (i = 0; i <= 20; i++) {
    console.log(i);
}

//!Task1
//Create an array of your favourite films / TV shows, up to 5 items. Use an array method to add 2 more items to your array. Use a loop to cycle through the array and log each item to the console.

let movie = [
    `Die hard`,
    `Die hard 2`,
    `Die hard 3`,
    `Home Alone`,
    `Home Alone 2`
]
movie.push(`Home Alone 3`);
movie.push(`Home Alone 4`);

for(let i=0; i<movie.length; i++){
    console.log(movie[i])
}

//!Task2
//Generate 10 random numbers between 1-100 and log them to the console.

for(i=0;i<10;i++){
    console.log((Math.floor(Math.random()*100)+1))
}

//!Task3
//Create a loop that counts backwards from 20-0.
let number=20;
while(number>=0){
    console.log(number);
    number--;
}

//!Task4
//Generate 5 random numbers between 1-50. For each number generated,check if the number is divisible by 5 or not.Log whether it is divisible or not to the console.has context menu

for(i=0;i<5;i++){
    num = (Math.floor(Math.random()*50)+1)
    console.log(num);
    if(num%5==0){
        console.log(`The number is divible by 5`)
    }
    else{
        console.log(`The number is not divisible by 5`)
    }
}