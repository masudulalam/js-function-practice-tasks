/*
*Task-1
Take four parameters. Multiply the four numbers and then return the result

*Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

*Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

*Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

*Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

*/


// *Task-1 solution:

function multiplyFourNumbers (a, b, c, d) {
    // const result = a * b * c * d;
    return a * b * c * d;   
}
const n1 = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;
const output = multiplyFourNumbers(n1, n2, n3, n4);
console.log('Result:', output);