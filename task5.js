/*

*Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

*/


// *Task-5 solution:

function oddEven (int) {
    if(int % 2 === 1) {
        return 'Odd';
    }
    else {
        return 'Even';
    }
}

console.log(oddEven(10));