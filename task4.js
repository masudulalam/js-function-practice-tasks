/*

*Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

*/


// *Task-4 solution:
function countZero (str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '0') {
            count++;
        }
    }
    return count;
}

const bString = '01110011011011111';
console.log(countZero(bString));