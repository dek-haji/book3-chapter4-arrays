                        //Chalenge//






// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.





 const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
// // Sort the numbers in descending order (10, 9, 8, 7, etc).
// integers.sort(function(a, b){return b-a});
// document.write(integers)

// Remove any integers greater than 19.

var filtered = integers.filter(function(value, index, arr){

    if(value < 19){
        console.log(arr)
    };
})
