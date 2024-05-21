// The initial numbers that must be verified.
const n1 = 24;
const n2 = 15;
const n3 = 10;
const n4 = 1;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
    ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
    !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
    (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// The below is my code going forward
// Check 6: All numbers are divisible by 5 - I'll use mod operand to achieve this
const divByFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log("divByFive: " + divByFive);

//Check 7: if the first number is larger than the last. Simple comparison operand will work
const firstBiggerThanLast = n1 > n4;
console.log("firstBiggerThanLast: " + firstBiggerThanLast);

//Check 8: Complete the following math - 
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
// Minding precedence of operands is key - * and % have the same precedence followed by -. Using () to conrol precedence.

const threeCalcs = ((n2 - n1) * n3) % n4;
console.log("threeCalcs: " + threeCalcs);

//Check 9: Change the way that isOver25 calculates so that we do not need to use the NOT operator in other logic comparisons.
// NOT is used in the uniqueness check so I'll just combine these checks. Using the fact the booleans conform to 1 or 0 when treated as numbers.

const isUnder25AndUnique = ((n1 > 25) + (n1 / n2 === 1) + (n1 / n3 === 1) + (n1 / n4 === 1) + (n2 > 25) + (n2 / n3 === 1) + (n2 / n4 === 1) + (n3 > 25) + (n3 / n4 === 1) + (n4 > 25)) === 0;
console.log("isUnder25AndUnique: " + isUnder25AndUnique);


//  Practical Math
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

//  PT 1: How many gallons of fuel will you need for the entire trip?
// Best idea is for me to give a range of low end to high end amount of fuel needed.

let hourLowSpeed;
let hoursMedSpeed;
let hoursHighSpeed;

const tripMiles = 1500;
const budget = 175;
const perGallon = 3;

const lowEndGallons = 1500 / 30;
const highEndGallons = 1500 / 23;

console.log("For a trip of " + tripMiles + " miles, you would need anywhere from " + lowEndGallons + " to " + highEndGallons + " gallons.")



