///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let allApples = fujiAcres.concat(galaAcres, pinkAcres); //I did this because I am either lazy or really smart... In all seriousness, I did this because I couldn't think of a better way to add everything together in the least amount of code.
let totalAcres = 0;   //I did this to make the loop easier for me to write.
for (let i = 0; i < allApples.length; i++){
    totalAcres += allApples[i]; // This adds the next item ini the array to be added to the current value of totalAcres.
}
console.log(totalAcres);


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / 7;  //This seemed to be the most direct way to get my results.
console.log(averageDailyAcres);


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0){
    acresLeft -= averageDailyAcres;  //I would have just had the acres divided by 9 (the average for the day) but I wanted to make sure that if the average changed for some reason that the code would still work! :)
    days++;  //I feel that a lot of my comments are very unnecessary but this is increasing the days each time when the acresLeft is greater than 0.
}
console.log(days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []; //I made all 3 of these empty arrays to make it easier to pass new values to them.
let galaTons = [];
let pinkTons = [];

let fujiTotal = fujiAcres.slice();  //I made an array that is an exact copy of the orginal but this is so I don't accidentally change the orginals values.
for (let i = 0; i < fujiTotal.length; i++){  //I copied my loop from earlier but changed the values (obviously).
    fujiTons.push(fujiTotal[i] * 6.5);  //I made it so the math would be done inside of the push to make it as efficient as I could. Multiplying the number I 'pulled' from the array by 6.5.
}
console.log(fujiTons);
let galaTotal = galaAcres.slice();  //I shouldn't have to mention it but I will, I just used the same loop for these 2, I simply changed the values.
for (let i = 0; i < galaTotal.length; i++){
    galaTons.push(galaTotal[i] * 6.5);
}
console.log(galaTons);
let pinkTotal = pinkAcres.slice();
for (let i = 0; i < pinkTotal.length; i++){
    pinkTons.push(pinkTotal[i] * 6.5);
}
console.log(pinkTons);







// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0; //I did the same loop that I did in, albiet, I changed the values
let galaPounds = 0;
let pinkPounds = 0;

for (let i = 0; i < fujiTons.length; i++){ //I don't think it is necessary to repeat myself from earlier.
    fujiPounds += (fujiTons[i] * 2000);  //I added the pounds to the converted tons to pounds number by keeping the conversion in the ().
}
console.log(fujiPounds);
for (let i = 0; i < galaTons.length; i++){
    galaPounds += (galaTons[i] * 2000);
}
console.log(galaPounds);
for (let i = 0; i < pinkTons.length; i++){
    pinkPounds += (pinkTons[i] * 2000);
}
console.log(pinkPounds);




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

/* I moved this down here so I wouldn't need to keep scrolling to the top.
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55
*/

let fujiProfit = (fujiPrice * fujiPounds);  //I set the value of the profits to the math we needed to find the Profit!
let galaProfit = (galaPrice * galaPounds);
let pinkProfit = (pinkPrice * pinkPounds);

console.log('$' + fujiProfit); // I added the dollar signs to make the console log easier to read.

console.log('$' + galaProfit);

console.log('$' + pinkProfit);




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = (fujiProfit += galaProfit += pinkProfit); //This seems to be straightforward but I set the value of the total to the sum of the profits.
console.log('$' + totalProfit);  //I added the dollar sign because it is a dollar amount.