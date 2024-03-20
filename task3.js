/*

*Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

*/


// *Task-3 solution:

function makeAvg (arr, size) {
    let sum = 0;
    for(let i = 0; i < size; i++) {
        sum = sum + arr[i];
    } 

    return sum / size;
}

const array = [1, 2, 3, 4, 5];
const size = array.length;
const average = makeAvg(array, size);
console.log('Average:', average);