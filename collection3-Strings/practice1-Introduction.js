/** ==================================================== String ============================================= */

/** NOTES:
 * - In JavaScript, strings are IMMUTABLE.
 *   → Any string method returns a NEW string.
 *   → Original string never changes.
 *
 * - ALL STRING PROPERTIES & METHODS (GROUPED)
 *   1️⃣ Length-related
 *       1. length


 *   2️⃣ Case Conversion
 *       2. toUpperCase()
 *       3. toLowerCase()


 *   3️⃣ Character Access
 *       4. charAt(index)
 *       5. charCodeAt(index)
 *       6. at(index)
 *       7. str[index]   // bracket notation
 

 *   4️⃣ Searching & Checking
 *       8. includes(substring)
 *       9. startsWith(substring)
 *      10. endsWith(substring)
 *      11. indexOf(substring)
 *      12. lastIndexOf(substring)
 *      13. search(regex)
 

 *   5️⃣ Extracting Substrings
 *      14. slice(start, end)
 *      15. substring(start, end)
 *      16. substr(start, length)   // deprecated
    

 *   6️⃣ Replace & Modify
 *      17. replace(old, new)
 *      18. replaceAll(old, new)


 *   7️⃣ Split & Join
 *      19. split(separator)
 

 *   8️⃣ Trimming (Whitespace Removal)
 *      20. trim()
 *      21. trimStart()
 *      22. trimEnd()
 

 *   9️⃣ Concatenation
 *      23. concat(str1, str2, ...)
 

 *   🔟 Comparison 
 *      24. localeCompare(otherString)
 
 
 *   1️⃣1️⃣ Pattern Matching (Regex)
 *      25. match(regex)
 *      26. matchAll(regex)

 
 *   1️⃣2️⃣ Padding
 *      27. padStart(targetLength, padString)
 *      28. padEnd(targetLength, padString)
 
 
 *   1️⃣3️⃣ Conversion
 *      29. toString()
 *      30. valueOf()
 *
 *   1️⃣4️⃣ Unicode & Normalization
 *      31. normalize()
 

 *    1️⃣5️⃣ HTML Wrapper Methods (LEGACY – avoid)
 * ------------------------------------------------------
 *      32. bold()
 *      33. italics()
 *      34. link()
 *      35. small()



 * ======================================================
 * ❌ Methods that DO NOT exist for strings
 * ======================================================
 * - splice()   ❌ (Array only)
 * - push()    ❌
 * - pop()     ❌
 *
*/

// ===================================== Practice ==============================================

// let's practice all string methods to learn
let str1 = "dheeru";
let str2 = "DHEERU";

// .length returns the total number of characters in the string
console.log("Length is: ", str1.length); // 6


// Case conversion: Since Strings are IMMUTABLE → these methods return NEW strings
console.log("UPPERCASE: ", str1.toUpperCase()); // "DHEERU"
console.log("lowercase: ", str2.toLowerCase()); // "dheeru"


// Character access
let str3 = 'abcdefghij';

// Option 1) charAt(index)
//     - Returns the character at the given index
//     - Does NOT support negative indexing
console.log("Character at index 2: ", str3.charAt(2));  // c
console.log("Character at index -1: ", str3.charAt(-1)); // "" (returns nothing)

// Option 2) charCodeAt(index)
//   ❗ COMMON MISTAKE:
//     - This does NOT return a character
//     - It returns the Unicode (ASCII) NUMBER of the character
//     - 'c' → 99
console.log("Character at index 2: ", str3.charCodeAt(2)); // 99

// Option 3) at(index)
//    - Modern method: 
//    - Supports NEGATIVE indexing
console.log("Character at index 2: ", str3.at(2));   // c
console.log("Character at index -1: ", str3.at(-1)); // j
console.log("Character at index -5: ", str3.at(-5)); // f ; means 5th from the last 

// NOTE:
// - Negative index means: count from the END
// - -1 → last character
// - -2 → second last character


// Option 4) Bracket notation (PREFERRED in practice)
// - Most readable and commonly used
// - Does NOT support negative indexing
console.log("Character at index 2: ", str3[2]); // c
console.log("Character at index -2: ", str3[-2]); // undefined


// Searching & Checking
// indexOf(): returns the first index of character/number
let str4 = 'qertyw@123w';
let myChar1 = 'w'
console.log(`Index of first occurrence of ${myChar1}: `, str4.indexOf(myChar1)); // 5 
console.log(`Index of first occurrence of k: `, str4.indexOf('k')); // -1 means does not exist
console.log(`Index of first occurrence of 3: `, str4.indexOf(3)); // 9 --> Here 

// lastIndexOf()
console.log(`Index of first occurrence of ${myChar1}: `, str4.lastIndexOf(myChar1)); // 10
console.log(`Index of first occurrence of c: `, str4.lastIndexOf('c')); // -1
console.log(`Index of first occurrence of q: `, str4.lastIndexOf('q')); // 0

// includes(); return true or false
let str5 = 'mnopqrstuvwxyz8'
let myWord1 = 'pqr'
console.log(`Does ${str5} include ${myWord1}: `, str5.includes(myWord1)); // true
console.log(`Does ${str5} include abc: `, str5.includes("abc")); // false
console.log(`Does ${str5} include 8: `, str5.includes(8)); // true





// --------------------------------------------------------------------
// 1) substring(startIndex, endIndex)
// - endIndex is NOT included
// - Negative values are treated as 0
// - If startIndex > endIndex → JS SWAPS them
// --------------------------------------------------------------------

let str6 = "leonardo"; // length = 8
console.log("Length of str6: ", str6.length);

console.log("Substring: ", str6.substring(0, 2));
// "le" → characters from index 0 to 1

console.log("Substring: ", str6.substring(2, 2));
// "" → start === end → empty string

console.log("Substring: ", str6.substring(0, -1));
// "" → -1 is treated as 0 → substring(0, 0)

console.log("Substring: ", str6.substring(-1, 2));
// "le" → -1 → 0 → substring(0, 2)

console.log("Substring: ", str6.substring(0, 7));
// "leonard" → index 7 NOT included

console.log("Substring: ", str6.substring(7, 2)); // index swapped ; startIndex>endIndex
// "leonard" → index 7 NOT included

console.log("Substring: ", str6.substring(4));
// "ardo" → from index 4 to END of string



let random = 'abcdefg';
console.log("Checking substring: ", random.substring(4, 1)); // bcd---> index swapped; so it became (1,4), so from 1 to 4(exlucing 4), hence bcd




// --------------------------------------------------------------------
// 2) slice(startIndex, endIndex)
// - endIndex is NOT included
// - Supports NEGATIVE indexing
// - DOES NOT swap indexes
// --------------------------------------------------------------------

let str7 = "leonardo";

console.log("slice: ", str7.slice(0, 2));
// "le"

console.log("slice: ", str7.slice(2, 2));
// "" → start === end → empty string

console.log("slice: ", str7.slice(0, -1));
// "leonard" → -1 means (length - 1), last char excluded

console.log("slice: ", str7.slice(-1, 2));
// "" → start (-1 → 7) > end (2) → NO swapping → empty

console.log("slice: ", str7.slice(0, 7));
// "leonard"

console.log("slice: ", str7.slice(4));
// "ardo" → from index 4 to END


// ============================================================================
// KEY DIFFERENCES (VERY IMPORTANT)
// ============================================================================
// substring():
// ✔ Negative values → treated as 0
// ✔ Swaps start & end if start > end
// ❌ No negative indexing support
//
// slice():
// ✔ Supports negative indexing
// ❌ Does NOT swap start & end
// ✔ Preferred for real-world usage


// ============================================================================
// 3) substr(fromIndex, length)  ❌ DEPRECATED
// Topic: Deprecated string methods & modern alternatives
// ============================================================================

// ❌ substr() is deprecated and should NOT be used in new code
// Reason:
// - Second parameter is LENGTH (not end index) → confusing & inconsistent
// - Not part of modern ECMAScript standard
// - May be removed in future JavaScript engines
// - Replaced by slice() and substring()

let myName1 = "Jamie Lannister";

console.log("Substr: ", myName1.substr(1, 3));
// "ami"
// Explanation:
// - Starts from index 1 (included)
// - Takes NEXT 3 characters (length = 3)


// ============================================================================
// WHY substr() WAS CONFUSING (MAIN REASON FOR DEPRECATION)
// ============================================================================
// slice(start, end)      → end index
// substring(start, end) → end index
// substr(start, length) → character COUNT ❌
//
// Example:
// substr(1, 3)  → "ami"
// slice(1, 3)   → "am"


// ============================================================================
// MODERN & SAFE ALTERNATIVES (USE THESE)
// ============================================================================

console.log("slice alternative: ", myName1.slice(1, 4));
// "ami" → same result using slice

console.log("substring alternative: ", myName1.substring(1, 4));
// "ami"


// ============================================================================
// INTERVIEW NOTE (VERY IMPORTANT)
// ============================================================================
// ❓ Q: Why is substr() deprecated?
// ✔ Uses length instead of end index (inconsistent API)
// ✔ Not part of modern ECMAScript specification
// ✔ slice() does everything substr() can — and more (negative indexing)


// ============================================================================
// FINAL RULE
// ============================================================================
// ❌ Do NOT use substr()
// ✅ Use slice() (preferred) or substring()




// Modifying: We are not modifying the String, as they are immutable in JS. (so medofying returns NEW strings):
// replace() REQUIRES arguments → (whatToReplace, replaceWith)
let employer1 = "Microsofting"
console.log("Modifying: ", employer1.replace('i', 'z')); // Mzcrosofting --> so it will replace the first character occurrence 
console.log("Modifying: ", employer1.replaceAll('i', 'z')); // Mzcrosoftzng --> so it will replace all the occurrences


// trim(), trimStart(), trimEnd()
let employer2 = "    Goggle   "
console.log("Removing starting spaces", employer2.trimStart());
console.log("Removing end spaces", employer2.trimEnd());
console.log("Removing starting spaces", employer2.trim());
console.log("Original employer2cwith spaces", employer2);





// 4) Splitting & Joining:
//   Topic: split(), join(), concat(), + operator

// split(sepeartor); converts string into the array: split cuts ONLY where the knife (separator) exists
let myCar1 = "defender";
console.log("Splitting the string characters: ", myCar1.split("->")); // [ 'defender' ] ; as "->" does not exist in the string , hence no split happens
console.log("Splitting the string characters: ", myCar1.split("_"));  // [ 'defender' ] ; as "_" does not exist in the string , hence no split happens

// so correct method of using split
console.log("Splitting the string characters: ", myCar1.split(""));   // ["d","e","f","e","n","d","e","r"]

let mySentence1 = "This is my JavaScript Learning";
console.log("", mySentence1.split(" "));  // [ 'This', 'is', 'my', 'JavaScript', 'Learning' ]

let skills1 = "HTML,CSS,JavaScript,React,NextJs";
console.log("All Skills: ", skills1.split(",")); // [ 'HTML', 'CSS', 'JavaScript', 'React', 'NextJs' ]

let myPath1 = "src/component/button";
console.log("path structure: ", myPath1.split("/")); // [ 'src', 'component', 'button' ]


// join()
// Topic: Convert ARRAY → STRING

let myDevice1 = "laptop";
let myDevice2 = "mobile";

let arr7 = ['m', 'o', 'b', 'i', 'l', 'e'];

// join(separator)
// - ARRAY method (not string method)
// - Joins all elements into ONE STRING
// - separator = "" means no space between characters
console.log("Join: ", arr7.join(""));
// "mobile"


// ❌ COMMON MISTAKE
// JavaScript keyword is `typeof`, NOT `typeOf`
console.log("Type of: ", typeof (arr7.join("")));
// "string"


// ============================================================================
// IMPORTANT NOTES
// ============================================================================
// ✔ join() ALWAYS returns a STRING
// ✔ Original array is NOT modified
// ✔ join("") → commonly used to rebuild strings after split()
// ✔ typeof result of join() is always "string"


// ============================================================================
// STRING ↔ ARRAY CYCLE (RECAP)
// ============================================================================
// string → split() → array
// array  → join()  → string


// ============================================================================
// INTERVIEW TRAP
// ============================================================================
// Q: Is join() a string method?
// A: ❌ No → it is an ARRAY method



// Concatenation
// - Joins strings together. Returns a NEW string (strings are immutable)
// - Does NOT add space automatically
let myFighter1 = "Jamie Lannnister"
let myFighter2 = "John Snow"
console.log("Concatenated : ", myFighter1.concat(myFighter2)); // Jamie LannnisterJohn Snow --> no space is inserted 
console.log("Concatenated : ", myFighter1.concat(" ", myFighter2)); // adding space explicitly

let neighbour1 = "Bangladesh"
let neighbour2 = "Nepal"
let neighbour3 = "Pakistan"
let neighbour4 = "Afghanistan"
let neighbour5 = "China"
console.log("All neighbour joined: ", neighbour1.concat(" ", neighbour2, " ", neighbour3, " ", neighbour4, " ", neighbour5))

// prefferd WAY : Using + operator
console.log("All neighbours joined: ", neighbour1 + neighbour2 + neighbour3 + neighbour4 + neighbour5); // no space
console.log("All neighbours joined: ", neighbour1 + " " + neighbour2 + " " + neighbour3 + " " + neighbour4 + " " + neighbour5);


// ============================================================================
// 🔟 Comparison
// localeCompare(otherString)
// ============================================================================
// - Compares two strings lexicographically
// - Returns:
//   0  → strings are equal
//   <0 → reference string comes BEFORE argument
//   >0 → reference string comes AFTER argument

let city1 = "Delhi";
let city2 = "Mumbai";
let city3 = "Delhi";

console.log("Compare Delhi vs Mumbai: ", city1.localeCompare(city2)); // negative
console.log("Compare Mumbai vs Delhi: ", city2.localeCompare(city1)); // positive
console.log("Compare Delhi vs Delhi: ", city1.localeCompare(city3));  // 0


// ============================================================================
// 1️⃣1️⃣ Pattern Matching (Regex)
// match(regex)
// matchAll(regex)
// ============================================================================

let text = "JavaScript is awesome. JavaScript is powerful";

// match()
// - Returns FIRST match details
// - Without /g → returns match object
// - With /g → returns array of matches
console.log("match: ", text.match("JavaScript"));
// ["JavaScript", index: 0, input: "..."]

console.log("match with global: ", text.match(/JavaScript/g));
// ["JavaScript", "JavaScript"]


// matchAll()
// - Returns an ITERATOR
// - ALWAYS used with /g flag
// - More powerful for advanced use cases
let matches = text.matchAll(/JavaScript/g);

for (let match of matches) {
    console.log("matchAll: ", match[0]);
}


// ============================================================================
// 1️⃣2️⃣ Padding
// padStart(), padEnd()
// ============================================================================
// - Used to add characters until a target length is reached
// - Common in formatting (IDs, dates, OTPs)

let orderId = "45";

console.log("padStart: ", orderId.padStart(5, "0"));
// "00045"

console.log("padEnd: ", orderId.padEnd(5, "*"));
// "45***"


// ============================================================================
// 1️⃣3️⃣ Conversion
// toString(), valueOf()
// ============================================================================

// toString()
// - Converts value to string explicitly
let num = 100;
console.log("toString: ", num.toString());
// "100"

// valueOf()
// - Returns primitive value of the string
let strObj = new String("hello");
console.log("valueOf: ", strObj.valueOf());
// "hello"

let x = new String("hi");
console.log(x == "hi");
// true → JS internally calls x.valueOf()

/** Should we ever use valueOf()?
 * - We almost never call it manually. 
 * - Exists mainly for:
 *   1. Internal JS engine conversions
 *   2. Custom objects (advanced use cases)
 */

// NOTE: Avoid using `new String()` in real code — creates wrapper objects


// parsing
let version1 = "1.002.33.0";
let versionArray = version1.split(".");// all the element will be 
console.log("Version Array: ", versionArray);
for (let i = 0; i < versionArray.length; i++) {
    parseInt(versionArray[i]); // parseInt returns a new number and we did not store it
}
console.log("Version Array: ", versionArray); // [ '1', '002', '33', '0' ]
// this is ❌  WRONG: parseInt() returns a new number , It does NOT modify the original array element

/**CORRECT WAY */
for (let i = 0; i < versionArray.length; i++) {
    versionArray[i] = parseInt(versionArray[i]); // parseInt returns a new number and we did not store it
}
console.log("Version Array: ", versionArray);  //  [ 1, 2, 33, 0 ]







// ============================================================================
// FINAL INTERVIEW NOTES (STRINGS)
// ============================================================================
// ✔ Strings are IMMUTABLE
// ✔ Most string methods return NEW strings
// ✔ Prefer slice(), split(), join(), + operator
// ✔ Know deprecated methods (substr)
// ✔ Regex methods are powerful but optional for juniors

