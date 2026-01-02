// ==================================================== Traversal Techniques =============================================
//
// GOAL:
// Understand HOW to traverse different data structures in JavaScript
// and KNOW WHEN to use WHICH traversal.
//
// Covered Data Structures:
// - Arrays
// - Strings
// - Objects
// - Maps
// - Sets
//
// Focus Areas:
// 1️⃣ Available traversal techniques
// 2️⃣ What works on which data structure
// 3️⃣ When to use what (DSA vs functional style)
// 4️⃣ Common mistakes to avoid
// ====================================================================


/** ====================================================
 * TRAVERSAL SYNTAX / METHODS
 * ====================================================
 *
 * LOOP-BASED (Imperative)
 * 1. for loop
 * 2. for...of
 * 3. forEach
 * 4. for...in
 * 5. while
 * 6. do...while
 *
 * ARRAY FUNCTIONAL METHODS
 * (Arrays can ALSO use all loop-based traversal)
 * 7. map()
 * 8. filter()
 * 9. reduce()
 * 10. some()
 * 11. every()
 *
 * OBJECT HELPERS
 * 12. Object.keys()
 * 13. Object.values()
 * 14. Object.entries()
 *
 * MAP & SET
 * 15. map.forEach()
 * 16. set.forEach()
 *
 * STRING
 * 17. for...of (character traversal)
 */


/** ====================================================
 * WHAT WORKS ON WHAT (VERY IMPORTANT)
 * ====================================================
 *
 * ARRAYS:
 * - for, for...of, forEach
 * - while / do...while
 * - map / filter / reduce / some / every
 *
 * STRINGS:
 * - for, for...of, while
 * - charAt / at
 * ❌ forEach / map / filter / reduce (array-only methods)
 *
 * OBJECTS:
 * - for...in
 * - Object.keys / values / entries
 * ❌ for...of directly (not iterable)
 *
 * MAP:
 * - for...of
 * - map.forEach
 * - map.keys / values / entries
 *
 * SET:
 * - for...of
 * - set.forEach
 */


/** ====================================================
 * WHEN TO USE WHICH (MENTAL MODEL)
 * ====================================================
 *
 * for loop:
 * - Index-based problems
 * - DSA, sliding window, two pointers
 *
 * for...of:
 * - Clean value traversal
 * - Best for strings, arrays, maps, sets
 *
 * forEach:
 * - Side effects (logging, counting)
 * - ❌ No break / continue
 *
 * for...in:
 * - Object keys
 * - ❌ Avoid for arrays
 *
 * map / filter / reduce:
 * - Data transformation
 * - Declarative & readable
 * - ❌ Avoid when early exit is required
 */


/** ====================================================
 * COMMON MISTAKES
 * ====================================================
 *
 * ❌ for...in on arrays
 * ❌ forEach in DSA problems
 * ❌ Expecting forEach to return values
 * ❌ Modifying original array inside map()
 * ❌ Using typeof to detect arrays
 */



// =================================== Array Traversal ========================================

let arr1 = [100, 15, 30, 45, 60, 75];

// for...of → values
for (let ele of arr1) {
    console.log(ele);
}

console.log("");

// for...in → indexes (keys)
for (let ele in arr1) {
    console.log(ele);
}

console.log("");

// accessing value using index
for (let ele in arr1) {
    console.log(arr1[ele]);
}

console.log("");

// while loop → best for DSA
let index1 = 0;
while (index1 < arr1.length) {
    console.log(arr1[index1]);
    index1++;
}

console.log("");

// forEach → side effects only
arr1.forEach((element) => {
    console.log(element);
});

console.log("");


// ================= Array Functional Methods =================

// filter → selection
console.log("Even elements:", arr1.filter(num => num % 2 === 0));
console.log("Divisible by 5:", arr1.filter(num => num % 5 === 0));

// map → transformation
console.log("Double:", arr1.map(ele => ele * 2));
console.log("4x odd:", arr1.filter(ele => ele % 2 !== 0).map(ele => ele * 4));
console.log("Squares:", arr1.map(num => num * num));
console.log("To strings:", arr1.map(ele => ele.toString()));

// reduce → aggregation
console.log("Sum:", arr1.reduce((acc, curr) => acc + curr, 0));
console.log("Product:", arr1.reduce((acc, curr) => acc * curr, 1));
console.log("Max:", arr1.reduce((max, curr) => max > curr ? max : curr, arr1[0]));
console.log("Min:", arr1.reduce((min, curr) => min < curr ? min : curr, arr1[0]));

// some → existence check
console.log("Divisible by 9:", arr1.some(ele => ele % 9 === 0));

let arr2 = [1, 2, "a", [10, 20]];
console.log("Contains string:", arr2.some(item => typeof item === "string"));
console.log("Contains array:", arr2.some(item => Array.isArray(item)));

// every → validation
let arr3 = [-1, 0, 2, 5, 10];
let arr4 = [40, 23, 2, 17, 10];
console.log("All positive arr3:", arr3.every(ele => ele > 0));
console.log("All positive arr4:", arr4.every(ele => ele > 0));



// ============================== String Traversal ==============================

let str1 = "abcdef";

// for...of → best for strings
for (let ch of str1) {
    console.log(ch);
}

console.log("");

// for...in → indexes (avoid for strings)
for (let ch in str1) {
    console.log(ch);
}

console.log("");

// index-based access
for (let ch in str1) {
    console.log(str1[ch]);
}

console.log("");

// while loop
let index2 = 0;
while (index2 < str1.length) {
    console.log(str1[index2]);
    index2++;
}

// ❌ forEach does NOT work on strings (array-only)



// ============================== Map Traversal ==============================

let arr5 = [10, 20, 30, 10, 10, 20, 10, 30, 40, 50, 40, 60, 40];
let myMap1 = new Map();

// Frequency map creation
for (let ele of arr5) {
    myMap1.set(ele, (myMap1.get(ele) || 0) + 1);
}

// for...of → [key, value]
for (let [key, value] of myMap1) {
    console.log(key, "-->", value);
}

console.log("");

// entries()
for (let entry of myMap1.entries()) {
    console.log(entry);
}

console.log("");

// Map.forEach → callback(value, key)
myMap1.forEach((value, key) => {
    console.log("key:", key, "value:", value);
});

// keys()
for (let key of myMap1.keys()) {
    console.log("key:", key);
}

// values()
for (let value of myMap1.values()) {
    console.log("value:", value);
}



// ============================== Set Traversal ==============================

let arr6 = [1, 1, 1, 1, 20, 14, 1, 20, 20, 14, 14, 14];
let mySet1 = new Set(arr6);

console.log("Set:", mySet1);

// for...of → values
for (let value of mySet1) {
    console.log(value);
}

// entries() → [value, value] (API consistency with Map)
for (let entry of mySet1.entries()) {
    console.log(entry);
}

/**
 * WHY [value, value]?
 * - Set has NO keys
 * - entries() exists only for consistency with Map
 */



// ============================== Object Traversal ==============================
// TODO:
// - for...in
// - Object.keys()
// - Object.values()
// - Object.entries()
