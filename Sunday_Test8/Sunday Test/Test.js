// Write a function to check if geekster exists in your array var list = ['geek', 'geekster', 'geeky'];If it exists  add some code to find the index of geekster and remove that item.

let arr = ["Geek", "Geekster", "Geeky", "GeeksforGeek"];

function checkGeeksterExists(arr) {
    // Check Geekster is in my Array
  console.log(arr);
  // find the Index of Geekster
  console.log(arr.indexOf("Geekster"));
  // Removing Geekster from my Array
  console.log(arr.shift())
  console.log(arr.shift())
  // now printing my array
  console.log(arr)
}

checkGeeksterExists(arr);

// In how many ways can we loop in an array describe each with an example ?

//6 different ways to loop through an array in javaScript

//1 :- for loop
//example: 
//for(initialization; Condition; Update statement ) {
    //code block to be executed
//}

//2 :- for/of loop
//example:
//for(variable of iterator) {
    // code of block to be executed
//}

//3 :- for each()
//examples:
//array.forEach(callback(currentValue[, index[, array]])) [, thisArg]);

//4 :- while loop
//example:

//while (condition) {
    //code block to be executed
//}

//5 :- do/while loop
//examples:
//do {
    // code block to be executed
//} while (condition)

//6 :- Map

// Question 3:
// What is the length of these arraysA. var arr1 = [,,,]; B. var arr2 = new Array(3)C. var arr3 = [1,2,3,4,5]D. var array = [ [1,2,3], [4,5,6]  ];E. var array[0].length = [ [1,2,3], [4,5,6]  ];

var arr1 = [,,,];
console.log(arr1.length);

var arr2 = new Array(3)
console.log(arr2.length);

var arr3 = [1,2,3,4,5];
console.log(arr3.length);

var array = [ [1,2,3], [4,5,6]  ];
console.log(array.length);

//var array[0].length = [ [1,2,3], [4,5,6]  ];
//console.log([0]);

// Q. Find the index position of b in this array var arr= ['a','b','c','d'];

var arrr= ['a','b','c','d'];

console.log(arrr.indexOf("b"));

//  What will be returned if you look for the index of something that does not exist?
 
// Ans: If the element does not exist then, -1 is returned or may be Undefined

// Q. Find the nth largest element in a sorted array

var a = ["Ajay", "rahul", "Rehan", "Karan", "Abhishek"]

function largestElementSorted(a) {
    for (i = 0; i <= n; i++) {
        
    }
    a.sort();
    console.log(a)

}

largestElementSorted(a)