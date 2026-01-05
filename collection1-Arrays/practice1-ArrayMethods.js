// =============================================================================
//                      JAVASCRIPT ARRAYS: MASTER REFERENCE
// =============================================================================

/**
 * 📌 CORE CONCEPTS
 * - Type: A special kind of OBJECT used for ordered data.
 * - Traits: Dynamic sizing, mixed data types, 0-based indexing.
 * - Memory: Passed by reference; mutable and iterable.
 * - Check: Use Array.isArray(obj) -> returns true/false.
 */

/**
 * 🛠️ BASIC METHODS (ADD / REMOVE / CONVERT)
 * 1.  push(el)        -> Adds to END, returns new length. [MUTATES]
 * 2.  pop()           -> Removes from END, returns element. [MUTATES]
 * 3.  unshift(el)     -> Adds to START, returns new length. [MUTATES]
 * 4.  shift()         -> Removes from START, returns element. [MUTATES]
 * 5.  toString()      -> Converts to comma-separated string.
 * 6.  join(separator) -> Joins into string with custom separator (e.g., "-").
 * 7.  concat(arr2)    -> Merges arrays, returns a NEW array.
 * 8.  flat(depth)     -> Flattens nested arrays (e.g., [1, [2]] -> [1, 2]).
 * 9.  delete arr[i]   -> ❌ AVOID: Leaves "undefined" holes in memory.
 */



/**
 * 🔍 SEARCH & ACCESS
 * 10. at(index)       -> Modern access; supports negative (arr.at(-1) for last).
 * 11. indexOf(val)    -> Returns first index of value, or -1.
 * 12. lastIndexOf(v)  -> Returns last index of value.
 * 13. includes(val)   -> Returns true if value exists (Best for checks).
 */

/**
 * ✂️ SLICING & SPLICING
 * 14. slice(s, e)     -> Returns a shallow copy of a portion. [NON-MUTATING]
 * 15. splice(s, c, i) -> Removes/Adds items at index s. [MUTATES]
 * 16. toSpliced()     -> Modern version of splice that returns NEW array.
 * 17. copyWithin()    -> Copies array elements to another position in same array.
 */

/**
 * 🔄 ITERATION & TRAVERSAL
 * 18. for...of        -> ✅ BEST: Cleanest way to iterate values.
 * 19. forEach(cb)     -> Runs logic per item. (Note: No 'break' or 'continue').
 * 20. for (let i...)  -> Standard for index-heavy logic.
 * 21. for...in        -> ❌ iterates enumerable keys, including inherited enumerable properties; (this is why it’s unsafe for arrays).
 */

/**
 * 🧪 FUNCTIONAL METHODS (HIGHER-ORDER)
 * 22. map(cb)         -> Returns NEW array with transformed elements.
 * 23. filter(cb)      -> Returns NEW array with items passing a condition.
 * 24. reduce(acc, v)  -> Distills array to ONE value (Always set initial value!).
 * 25. some(cb)        -> Returns true if AT LEAST ONE item passes test.
 * 26. every(cb)       -> Returns true if ALL items pass test.
 */

/**
 * 🔢 SORTING & REVERSING
 * 27. sort(cb)        -> Default: sorts as strings!
 * For numbers: arr.sort((a, b) => a - b). [MUTATES]
 * 28. reverse()       -> Reverses the order in place. [MUTATES]
 * 29. toSorted()      -> Modern non-mutating version of sort.
 */

/**
 * 📋 CLONING & DESTRUCTURING
 * 30. Shallow Copy    -> [...arr], arr.slice(), or Array.from(arr).
 * 31. Destructuring   -> let [a, b] = arr; (Useful for value swapping).
 * ⚠️ Note: Shallow copies still share references to nested objects.
 */

/**
 * 🛑 COMMON INTERVIEW TRAPS
 * - typeof [] is "object", use Array.isArray().
 * - sort() on [1, 10, 2] results in [1, 10, 2] without a comparator.
 * - map() vs forEach(): map returns an array, forEach returns undefined.
 * - Mutating the original array accidentally when you meant to copy it.
 */

// =============================================================================


// let's practice the array

let arr1 = [10, 20, 30, 40, 50, 60];
console.log("Original array: ", arr1);

//push element ; it will add another element at the end
arr1.push('a');
console.log("arr1 afting pushing new element: ", arr1);


arr1.pop(); // removes the last element of the array
console.log("arr1 after popping: ", arr1);


arr1.shift(); // removes the first element from the array
console.log("arr1 after shift(): ", arr1);


arr1.unshift(100); // add a new element at the front/start of that array
console.log("arr1 after  unshift(): ", arr1);

/**Methods like toString(), join(), concat(), slice(), map(), and filter() are non-mutating. They return a result but leave the original data exactly as it was. */


let result = arr1.toString(); // toString() 
console.log("Result (string): ", result); // it will be a string: "100,20,30,40,50,60"
console.log("type of result", typeof (result[0])); // string 
console.log("result[0]: ", result[0]); // "1"
console.log("result[1]: ", result[1]); // "0" 
console.log("result[2]: ", result[2]); // "0" 
console.log("result[3]: ", result[3]); // ","" 


// join seperator: 
// Just like toString(), the .join() method takes all elements of your array and "glues" them together into one long string using a separator ("->")
let newArr1 = arr1.join("->");
console.log("newArr1: ", newArr1); // "100 -> 20 -> 30 -> 40 -> 50 -> 60"
console.log("newArr1[0]: ", newArr1[0]);
console.log("type of newArr1[0]: ", typeof (newArr1[0]));
console.log("newArr1[1]: ", newArr1[1]);
console.log("newArr1[3]: ", newArr1[3]);
console.log("newArr1[4]: ", newArr1[4]);


// concat
let arr2 = [true, false, 100, 200, 300]
let arr3 = ['penny', 'leonard', 4.75]
let result1 = arr2.concat(arr3)
let result2 = arr3.concat(arr2)
console.log("new concat array (result1): ", result1); // [ true, false, 100, 200, 300, 'penny', 'leonard', 4.75 ]
console.log("new concat array (result2): ", result2); // [ 'penny', 'leonard', 4.75, true, false, 100, 200, 300 ]


//flat() ;flate expects a number 
let arr4 = [10, 20, 30, [40, 50, 60]]
let result3 = arr4.flat(); // Flat level 1 (default)
console.log("result3: ", result3); //  [ 10, 20, 30, 40, 50, 60 ]

let arr5 = [100, 200, 300, ['a', 'b', 'c', [20, 30, 40, [800, 1000]]]]
let result4 = arr5.flat(2);
console.log("result4: ", result4); // [ 100, 200, 300, 'a', 'b', 'c', 20, 30, 40, [ 800, 1000 ] ] 

let arr6 = [[[10, 20], 74, [true, ['a', 'b', ['c', ['d', ['e']]]]]]];
let result5 = arr6.flat(Infinity);
console.log("result5: ", result5); //[ 10,   20,  74, true, 'a', 'b', 'c',  'd', 'e']

//delete:  ❌ NOT a recommended practice; delete is actually an operator, not a method.
let arr7 = [10, 20, 40, 70, 100];
delete arr7[2];
console.log("arr7: ", arr7);
console.log("Length after deleting: ", arr7.length); // 5

/** NOTE:
 * - delete is actually an operator, not a method.
 * - delete removes the value, but it does not remove the space.
 *   # E.g: [ 10, 20, <1 empty item>, 70, 100 ]
 * - It leaves a "hole" (often called an "empty slot" or "sparse array"). The length of the array remains exactly the same.
*/


//at(index)       -> Modern access; supports negative (arr.at(-1) for last).
let arr8 = [10, 20, 40, 50, 70];
console.log("Element at index2: ", arr8.at(1)); // 20
console.log("Element at index2: ", arr8.at(2)); // 40
console.log("Element at index2: ", arr8.at(-1)); //70 --> (-1) will give us last


// indexOf(val)    -> Returns first index of value, or -1.
let arr9 = [10, 10, 10, 20, 30, 45, 70, 10, 80, 90, 20];
console.log(arr9.indexOf(10)); // 0
console.log(arr9.indexOf(20)); // 3
console.log(arr9.indexOf(200)); // -1 means it does not exist

// lastIndexOf
console.log(arr9.lastIndexOf(10)) // 7
console.log(arr9.lastIndexOf(100)) // -1

// includes(val)   -> Returns true if value exists (Best for checks).
let arr10 = [100, 200, 300, 400, 500];
console.log("does arr10 has 400: ", arr10.includes(400)); //true
console.log("does arr10 has 5100: ", arr10.includes(5100)); //false


// slice(s, e)     -> Returns a shallow copy of a portion. [NON-MUTATING], e is not included
let nums1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let newNums1 = nums1.slice(0, 4);
console.log("newNums1: ", newNums1); //  [ 10, 20, 30, 40 ]
let newNums2 = nums1.slice(0, 14);
console.log("newNums2: ", newNums2); //  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let newNums3 = nums1.slice(0, -1);
console.log("newNums3: ", newNums3); //  [10, 20, 30, 40, 50, 60, 70, 80, 90], so why 100 was not coming
let newNums4 = nums1.slice(-1, -1);
console.log("newNums4: ", newNums4); //  [ ]
let newNums5 = nums1.slice(-1, 4);
console.log("newNums5: ", newNums5); //  [ ]
let newNums6 = nums1.slice(0, 0);
console.log("newNums6: ", newNums6); //  [ ]
let newNums7 = nums1.slice(4, 1);
console.log("newNums7: ", newNums7); //  [ ]


/**
 * ✂️ THE SLICE RULES
 * 1. Range: Extracts from 'start' up to (BUT NOT INCLUDING) 'end'.
 * 2. Non-Mutating: Always returns a NEW array; original is safe.
 * 3. Direction: Always moves LEFT to RIGHT. 
 * - If start > end (in terms of position), returns [].
 * 4. Out of Bounds: 
 * - If 'end' is greater than array length, it just stops at the end.
 * 5. Negative Indices:
 * - -1 = Last element
 * - -2 = Second to last element
 * - Formula: index = array.length + negativeIndex
 */

// Quick Examples for your file:
// let arr = [10, 20, 30];
// arr.slice(0, 2);   // [10, 20]
// arr.slice(-2);     // [20, 30] (If 'end' is omitted, goes to the very end)
// arr.slice();       // [10, 20, 30] (Fast way to shallow copy an entire array)


// splice(start, deleteCount, item1, item2, ..., itemN)
// 
let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer1 = nums2.splice(); // without passing any arguments and returns [] and DOES NOT modify the array as it doesn't know where to start or how many to delete
console.log("answer1: ", answer1); //  [ ]


let answer2 = nums2.splice(2, 3); // means Start at index 2, delete 3 elements
console.log("answer2: ", answer2); // [3, 4 ,5]
console.log("nums2 after splice: ", nums2); // [3, 4 ,5] were deleted -->  [ 1, 2, 6, 7, 8, 9 ]


// since nums2 is [1,2,6,7,8,9]
let answer3 = nums2.splice(2, 3); // means Start at index 2, delete 3 elements
console.log("answer2, items to be removed from nums2: ", answer3); // [6,7,8]
console.log("nums2 after splice: ", nums2); // [3, 4 ,5] were deleted -->  [ 1, 2, 9 ]

let nums3 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
let answer4 = nums3.splice(2, 3, 4); // meaning from index 2, remove 3 items and add/insert the item 4 from where we started the deletion (i.e at index 2 insert 4)
console.log("answer4, items to be removed from nums3: ", answer4); // [ 300, 400, 500 ] these were removed
console.log("nums3 after splice: ", nums3); // nums3 after splice:  [100, 200, 4, 600, 700, 800, 900]



// =============================================================================
//                      ADVANCED & MODERN ARRAY METHODS
// =============================================================================

/**
 * 🆕 toSpliced(start, deleteCount, ...items) 
 * - The modern, SAFE version of splice().
 * - Logic: Identical to splice() but does NOT change the original array.
 * - Return: A brand NEW array with the changes applied.
 */
let fruits = ["Apple", "Orange", "Banana", "Mango"];
let safeSpliced = fruits.toSpliced(1, 2, "Kiwi");

console.log("Original fruits:", fruits);      // ["Apple", "Orange", "Banana", "Mango"] (Safe!)
console.log("toSpliced result:", safeSpliced); // ["Apple", "Kiwi", "Mango"]


/**
 * 📋 copyWithin(target, start, end)
 * - Copies a part of the array to another location in the SAME array.
 * - Logic: Overwrites existing values but NEVER changes the length.
 * - Mutating: ✅ YES. Changes the original array.
 */
let numsCopy = [1, 2, 3, 4, 5, 6];
// Copy elements from index 3 to 5 (4, 5) and paste them starting at index 0
numsCopy.copyWithin(0, 3, 5);
console.log("After copyWithin:", numsCopy); // [4, 5, 3, 4, 5, 6]


/**
 * 🧪 FUNCTIONAL METHODS (Higher-Order Functions)
 * These take a callback function as an argument: (element, index, array) => { ... }
 */

let numbers = [10, 20, 30, 40];

// 22. map() -> Returns NEW array by doing something to every item
let doubled = numbers.map(num => num * 2); // [20, 40, 60, 80]

// 23. filter() -> Returns NEW array with items that pass a test
let greaterThan25 = numbers.filter(num => num > 25); // [30, 40]

// 24. some() -> Returns true if at least ONE item passes the test
let hasHugeNum = numbers.some(num => num > 100); // false

// 25. every() -> Returns true only if ALL items pass the test
let allPositive = numbers.every(num => num > 0); // true

// 26. reduce(accumulator, current) -> Squashes array into ONE value (sum, obj, etc.)
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 100


/**
 * 🔢 SORTING & REVERSING (Modern vs Classic)
 */

let letters = ["d", "a", "c", "b"];

// Classic: sort() and reverse() [MUTATE original]
letters.sort();
console.log("Original letters changed:", letters); // ["a", "b", "c", "d"]

// Modern: toSorted() and toReversed() [NON-MUTATING]
let unsorted = [10, 5, 8];
let sorted = unsorted.toSorted((a, b) => a - b);
console.log("Original remains [10, 5, 8]:", unsorted);
console.log("New sorted array:", sorted); // [5, 8, 10]


/**
 * 🏁 SUMMARY OF MODERN (ES2023) NON-MUTATING METHODS
 * If you want to keep your original data safe, use these "to..." versions:
 * 1. toSpliced() instead of splice()
 * 2. toSorted()  instead of sort()
 * 3. toReversed() instead of reverse()
 * 4. with(index, value) -> Returns new array with one value changed.
 */

// Example of .with():
let myArr = [1, 2, 3];
let updatedArr = myArr.with(1, 99); // [1, 99, 3]
console.log("Original still [1, 2, 3]:", myArr);


let arr11 = [10, 20, 30, 40];
console.log("Reverse: ", arr11.reverse()); // reverse() does not return a new array. It mutates original one.



