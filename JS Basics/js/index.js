
debugger
var x = 7;
a();
b();
function a(){
    var x =100;
    console.log(x)
}


function b(){
    var x =100;
    console.log(x)
}












































/**Convert String from Snake case to camel case */
// let s1 = "hello_world";
// const convertSnakeToCamel = (s) => s.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1));
// console.log(convertSnakeToCamel(s1));     //helloWorld

/**Get First Char of Each Word */
// const str = "Java Script Object Notation";
// const acronym = str.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '');
// console.log(acronym);  //JSON

// const matches = str.match(/\b(\w)/g); // ['J','S','O','N']
// console.log(matches.join('')); // JSON]

/**Find Unique values from Array */
// const findUniquesInArray = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i)); 
// let arr1 = [1, 2, 3, 4, 5, 1, 2, 3];
// console.log(findUniquesInArray(arr1));   //[4,5] prints only unique values

/***Remove Duplicate elements from array with using filter*/
// var names = ["Mike", , "Nancy", 'Mike', "Jane"];
// uniqueArray = names.filter(function (item, pos) {
//     return names.indexOf(item) == pos;
// });
// console.log(uniqueArray); // ['Mike', 'Nancy', 'Jane']

/***Remove Duplicate elements from array without using filter*/
// var namesArray = [];
// names.forEach((i) => {
//     namesArray[i] = true;
// })
// console.log(Object.keys(namesArray)); // ['Mike', 'Nancy', 'Jane']


/**Sort */

// function sortArray(arr) {
//     var temp = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {    //Swap positions of elements
//                 temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }
//     return arr;
// }

// // console.log(sortArray([2, 6, 0, 4, 3, 4, 3, 5, 9, 6, 12, 43, 6]));   
// //[0, 2, 3, 3, 4, 4, 5, 6, 6, 6, 9, 12, 43]

/** Sort Using Recursion */
// function sort(x, i = 0) {
//     if (i == x.length) {
//         return x;
//     }
//     if (x[i - 1] > x[i]) {
//         var tmp = x[i - 1];
//         x[i - 1] = x[i];
//         x[i] = tmp;
//     }
//     return sort(x, i + 1);
// }
// console.log(sort([2, 5, 100, 6, 85, 12, 45])); //[2, 5, 6, 85, 12, 45, 100]


/**Sort Using Reduce */

// let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

// console.log(numbers.reduce((accumulator, current) => {
//     let index = 0;
//     while (index < accumulator.length && current > accumulator[index]) {
//         index++
//     };
//     accumulator.splice(index, 0, current);   // Add Current element at index position
//     return accumulator;
// }, []));

