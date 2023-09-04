//Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
// function countdown(num) {
//     //create and array to put our values in
//     my_arr = []
//     //create a loop to countdown from our number
//     for (var i=num; i>0-1;i--){
//         //push those values into our arr
//         my_arr.push(i)
//     }
//     //return the length of array
//     return my_arr
// }

// var len = countdown(10)
// console.log(len)
// console.log("Length: ",len.length)



//Your function will receive an array with two numbers. Print the first value, and return the second.
// function print_and_return(arr){
//     //take our array and return vlaue 1, print value 2
//     console.log("Print:",arr[0])
//     return arr[1]
// }
// var my_arr = print_and_return([1,2])
// console.log(my_arr)


//Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
// function first_plus_length(arr){
//     //variable to identify array's length
//     var len = arr.length
//     //iterate through arr to find first number
//     for(var i = 0;i<arr.length;i++){
//         if(isNaN(arr[i])){
//             continue;
//         }
//         else{
//             //add that number to array length
//             return arr[i]+len
//         }
//     }
// }
// var total = first_plus_length(['True',1,2,3,"Swiss Chard"])
// console.log(total)


//For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
// function greater_than_second(arr){
//     //create variable for array's length
//     var my_arr = arr.length
//     //create empty array for our values
//     const my_values = []
//     //iterate through array to determine which values are greater than second value
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>arr[1]){
//             my_values.push(arr[i])
//             console.log(arr[i])
//         }
//     }
//     //return lenght of array
//     return my_values
// }
// greater_than_second([1,3,5,7,9,13])


//Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
// function greater_than_second(arr){
//     //create variable for array's length
//     var my_arr = arr.length
//     if(arr.length <= my_arr){
//         var x="Array not long enough."
//         return x
//     }
//     else{
//         //create empty array for our values
//         const my_values = []
//         //iterate through array to determine which values are greater than second value
//         for(var i=0;i<arr.length;i++){
//             if(arr[i]>arr[1]){
//                 my_values.push(arr[i])
//                 console.log(arr[i])
//             }
//         }
//         //return lenght of array
//         return my_values
//     }
// }
// var result = greater_than_second([1])
// console.log(result)

//Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
// function two_num(arr){
//     //if num1 is equal to num2 print "jinx"
//     if(arr[0]==arr[1]){
//         var error = "Jinx!"
//         return error
//     }
//     else{
//         //create empty array
//         var total_arr = []
//         //create variable for arr length for num1
//         var num1 = arr[0]
//         //create variable of num2
//         var num2 = arr[1]
//         //create array of num2 that is num1 length long
//         for(var i=0; i<num1;i++){
//             total_arr.push(num2)
//         }
//     }
//     return total_arr
// }
// var result = two_num([10,5])
// console.log(result)


//Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
// function first_value(arr){
//     //create variable of array's length
//     var arr_len = arr.length
//     //determine if the first value is bigger or smaller than the length
//     if(arr[0]> arr_len){
//         x = "Too big!"
//         return x
//     }
//     else if(arr[0]< arr_len){
//         y = "Too small!"
//         return y
//     }
//     else{
//         z = "Just right!"
//         return z
//     }
// }
// var result = first_value([6,3,5,7,9,13])
// console.log(result)


// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
// function fahrenheitToCelsius(fDegrees){
//     //convert fdegress to celcius
//     var Celc = ((fDegrees - 32) * 5/9)
//     return Celc
// }
// var result = fahrenheitToCelsius(98)
// console.log(result)