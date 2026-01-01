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

//let's practice all string methods to learn 


// ==================================== LENGTH Related Quesitons =====================================
// Q1. Find the length of a string without using length.

function findLength(str) {
    let count = 0;
    for (let ele of str) {
        count++;
    }
    return count;
}
let string1 = "dheeru"
console.log("length of a string without using length property of string: ", findLength(string1));

// Q2.Check if a string is empty or not.
let str2 = ""
let str3 = "    "
console.log(`Is str2 empty ? `, !str2); // true
console.log(`Is str2 empty ? `, str2.length > 0 ? "No" : "Yes") // says
console.log(`Is str3 empty ? `, !str3); // false
console.log(`Is str3 empty ? `, str3.length > 0 ? "No" : "Yes") // No

// Q3. Given a string, print its middle character(s).
let str4 = "sheldon";
let str5 = "leonardo"
function findMiddle(str) {
    let n = str.length;
    let mid;
    if (n % 2 !== 0) {
        mid = Math.floor(n / 2);
    } else {
        mid = Math.floor((n + 1) / 2);
    }
    return str[mid];
}
console.log(`Middle character of ${str4}`, findMiddle(str4));
console.log(`Middle character of ${str5}`, findMiddle(str5));

// Q4. Truncate a string to first N characters.
// using a slice ; Truncate string = slice from 0 to N; slice(startindex, endIndex) --> When cutting a part of a string using indexes
let str6 = "abcd"
console.log("Truncate a string: ", str6.slice(1, 3)); // bc
console.log("Truncate a string: ", str6.slice(1, 4)); // bcd , if the 


// Q5. Find the frequency of each character of string
function findFrequencyOne(str) {
    let myMap = new Map()
    for (let ch of str) {
        myMap.set(ch, (myMap.get(ch) || 0) + 1)
    }
    for (let [key, value] of myMap.entries()) {
        console.log(`${key} --> `, `${value}`)
    }
}
let name1 = "downey";
findFrequencyOne(name1);




