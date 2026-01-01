// ==================================================== Traversal Techniques =============================================

// The purpose of this section is to understand how to TRAVERSE
// different data structures like:
// Arrays, Strings, Objects, Maps, Sets
//
// We focus on:
// 1️⃣ How many traversal ways exist
// 2️⃣ Which traversal works on which data structure
// 3️⃣ When to use which traversal
// 4️⃣ What NOT to use (common mistakes)

/** ====================================================
 * TRAVERSAL SYNTAX / METHODS
 * ====================================================
 *
 * 1. for loop (classic)
 * 2. for...of
 * 3. forEach
 * 4. for...in
 * 5. while
 * 6. do...while
 *
 * Array-specific (functional traversal) + All loops
 *  - Arrays can use ALL loops as well.
 *  - But below are the array method traverse arrays.
 * 7. map()
 * 8. filter()
 * 9. reduce()
 * 10. some()
 * 11. every()
 *
 * Object-specific:
 * 12. Object.keys()
 * 13. Object.values()
 * 14. Object.entries()
 *
 * Map & Set:
 * 15. map.forEach()
 * 16. set.forEach()
 *
 * String-specific:
 * 17. for...of (character traversal)
 */

/** ====================================================
 * WHAT WORKS ON WHAT (IMPORTANT)
 * ====================================================
 *
 * ARRAYS:
 * - for
 * - for...of
 * - forEach
 * - while / do...while
 * - map / filter / reduce / some / every
 *
 * STRINGS:
 * - for
 * - for...of
 * - while
 * - charAt / at (manual traversal)
 *
 * OBJECTS:
 * - for...in
 * - Object.keys()
 * - Object.values()
 * - Object.entries()
 *
 * MAP:
 * - for...of
 * - map.forEach()
 *
 * SET:
 * - for...of
 * - set.forEach()
 */

/** ====================================================
 * WHEN TO USE WHICH (MENTAL MODEL)
 * ====================================================
 *
 * for loop:
 * - When index control is needed
 * - When modifying elements by index
 * - Best for DSA problems
 *
 * for...of:
 * - Clean traversal of values
 * - Works on iterable data structures
 * - Best for strings, arrays, maps, sets
 *
 * forEach:
 * - Functional style
 * - When NO break / continue needed
 * - Side effects only (logging, counting)
 *
 * for...in:
 * - Traversing object KEYS
 * - NOT recommended for arrays
 *
 * while:
 * - Condition-based traversal
 * - Sliding window, two pointers
 *
 * map / filter / reduce:
 * - Transforming data
 * - Declarative, readable
 * - Avoid when early exit is needed
 */

/** ====================================================
 * COMMON MISTAKES (VERY IMPORTANT)
 * ====================================================
 *
 * ❌ Using for...in on arrays
 * ❌ Expecting break/continue in forEach
 * ❌ Modifying original array inside map()
 * ❌ Treating objects as iterable directly
 * ❌ Using forEach for DSA problems
 */

/** ====================================================
 * QUICK SUMMARY (INTERVIEW READY)
 * ====================================================
 *
 * - Arrays & Strings → for / for...of
 * - Objects → for...in / Object.entries
 * - Maps & Sets → for...of
 * - DSA → classic for / while
 * - Functional ops → map / filter / reduce
 */




// =================================== Array traversal ========================================
let arr1 = [100, 15, 30, 45, 60, 75];
for (let ele of arr1) {
    console.log(ele);
}
console.log("")
for (let ele in arr1) {
    console.log(ele); // it will print the index, so for...in used when we need index
}
console.log("")
for (let ele in arr1) {
    console.log(arr1[ele]); // it will print the index, for...in iterates over keys (indexes), not values. 
}
console.log("")
let index1 = 0;
while (index1 < arr1.length) {
    console.log(arr1[index1])
    index1++;
}
console.log("")
arr1.forEach((element) => {
    console.log(element);
})
console.log("")


// array methods for traversal 
console.log("Even elements: ", arr1.filter((number) => number % 2 === 0));
console.log("Divisible by 5: ", arr1.filter((number) => number % 5 === 0));

//double each element
console.log("Double each element", arr1.map((ele) => ele * 2));
console.log("4x each odd element", arr1.filter((ele) => ele % 2 !== 0).map((ele) => ele * 4));
console.log("Square each element", arr1.map((num) => num * num));
console.log("Converting all numbers to strings: ", arr1.map((ele) => ele.toString()));

//reduce: Combine all elements into ONE value , Returns a single value (number, object, array, etc.)
console.log("Syntax for using reduce is:  arr1.reduce((acc, curr) => acc + curr, intialValue))  "),
    console.log("Sum of all numbers : ", arr1.reduce((acc, curr) => acc + curr, 0)); //235
console.log("Product of all numbers : ", arr1.reduce((acc, curr) => acc * curr, 1));
console.log("Find maximum : ", arr1.reduce((max, curr) => max > curr ? max : curr, arr1[0]));
console.log("Find minimum : ", arr1.reduce((mini, curr) => mini < curr ? mini : curr, arr1[0]));

//some: some() → At least ONE element matches condition; It returns true / false
console.log("Does a number divisible by 9 exists in this array ?: ", arr1.some((ele) => ele % 9 === 0));
let arr2 = [1, 2, "a", [10, 20]];
console.log("Does a string exists in this array: ", arr2.some((item) => typeof (item) === "string")); //true
console.log("Does an array exists in this array: ", arr2.some((item) => Array.isArray(item))); // true

// every : when all element match the condition; return true/false
let arr3 = [-1, 0, 2, 5, 10];
console.log("Are all elements of arr1 positive", arr1.every((ele) => ele > 0)); // true
console.log("Are all elements of arr3 positive", arr3.every((ele) => ele > 0)); // false

// ============================== String Traversal ===========================================
let str1 = "abcdef";
for (let ch of str1) {
    console.log(ch)
}
console.log("")

for (let ch in str1) {
    console.log(ch) // for...in gives index 
}
console.log("")

for (let ch in str1) {
    console.log(str1[ch])
}
console.log("")

let index2 = 0;
while (index2 < str1.length) {
    console.log(str1[index2]);
    index2++;
}
console.log("")



// str1.forEach((ch) => {
//     console.log(ch)
// }) ❌ forEach is an array method




