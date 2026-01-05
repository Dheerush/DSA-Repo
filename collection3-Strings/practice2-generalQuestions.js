// General Question: Basics 

/** Questions
 *                                               SET 1 
 * Q1. Reverse a String
 * Q2. Reverse Vowels of a String
 * Q3. Reverse characters of each word separately.
 * Q4. Reverse only the first half of the string and reverse second half. * 
 * Q5. Check if s2 is a rotation of s1.
 
 *                                               SET 2
 * Q5. Remove all adjacent duplicates in a string.
 * Q6. Check if one string is a subsequence of another.
 * Q7. Find the first mismatch character between two strings.
 * Q8. Reverse only letters in a string (keep digits/symbols in place)..
 * Q9. Check if a string can become a palindrome by deleting at most one character.
 * Q10. Return minimum steps to delete a string by removing palindromic subsequences.
 * 
 *                                               SET 3
 * Q11. Compare two strings as if # is backspace.
 * Q12. Compare version strings like "1.0.3" and "1.0.7".
 * Q13. Check if a typed string is a long-pressed version of a name.
 * Q14. Check if two strings follow the same character pattern.
 * Q15. Merge two strings by alternating characters.
 * 
 *                                               SET 4
 * Q15. Merge two strings by alternating characters.
 * Q16. Remove all non-alphanumeric characters and check palindrome.
 * Q17. Remove all vowels from a string.
 * Q18. Check if a string is a palindrome (ignore non-alphanumeric, ignore case).
 * Q19. Check if a string is symmetric around the center.
 * Q20. Find the first index where two strings stop matching.
 * 
 */




// =============================================== SET 1 ==============================================
// Q1. Reverse a String
//NORMAL instinc: 
function reverseStringMethod(str) {
    let n = str.length;
    let start = 0;
    let end = n - 1;
    while (start < end) {
        [str[start], str[end]] = [str[end], str[start]]
        start++;
        end--;
    }
    return str1
}
// this is WRONG ❌ --> strings are immutable in JS

function reverseString(str) {
    // Approach : we convert the string into array; i.e array consisting of char of strings
    let arr = str.split("");
    return arr.reverse().join("");
}

let myString1 = "medicine"
console.log("Reversing the string: ", reverseString(myString1)); // enicidem


// Q2. Reverse Vowels of a String. example: "leetcode" --> "leotcede"
function isVowel(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
        || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        return true
    } else {
        return false;
    }
}

function reverseVowels(str) {
    let arr = str.split("");
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (!isVowel(arr[start])) {
            start++;
        } else if (!isVowel(arr[end])) {
            end--;
        } else {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++;
            end--;
        }
    }
    return arr.join("");
}
let myWord2 = "leetcode"
console.log("Word after swapping vowel: ", reverseVowels(myWord2));


// Q3. Reverse characters of each word separately.
let mySentence1 = "Stranger things is currently trending";
function reverseEachWord(sentence) {
    let arr = sentence.trim().split(" ");
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        arr[i] = arr[i].split("").reverse().join("");
    }
    return arr.join(" ").trim();
}
console.log("New Sentence: ", reverseEachWord(mySentence1));


// Q4. Reverse the first and second half of the string.
function reverseFirstHalf(str) {
    let arr = str.split("");
    let n = arr.length;
    let middleIndex = Math.floor(n / 2);
    let start = 0;
    let end = middleIndex - 1
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr.join("");
}

function reverseSecondHalf(str) {
    let arr = str.split("");
    let n = arr.length;
    let middleIndex = Math.floor(n / 2);
    let start = middleIndex;
    let end = n - 1
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr.join("");
}

let word1 = "lactose";
console.log("Reversing first half: ", reverseFirstHalf(word1))
console.log("Reversing second half: ", reverseSecondHalf(word1))

// Q5. Check if s2 is a rotation of s1.
// Approch1 :Concat s1 with itself and then check
function checkRotation(str1, str2) {
    if (str1.length !== str2.length) return false;
    return str1.concat(str1).includes(str2)
}
let str1 = 'waterbottle'
let str2 = 'erbottlewat'
console.log("Is s2 a rotation of s1", checkRotation(str1, str2)); // true
let str3 = 'dheeraj'
let str4 = 'rajdhee'
console.log("Is s2 a rotation of s1", checkRotation(str3, str4)); // true



// =============================================== SET 2 ==============================================
// Q6. Remove all adjacent duplicates in a string.
// Example 1: "abbaca" --> "ca"
// Example 2: "azxxzy" --> "ay"

function removeAllAdjacentDuplicates(str) {
    let arr = str.split("");
    let n = arr.length;
    let myStack = [];
    for (let i = 0; i < n; i++) {
        if (myStack.length > 0 && myStack[myStack.length - 1] === arr[i]) {
            myStack.pop();
        } else {
            myStack.push(arr[i]);
        }
    }
    return myStack.join("");
}
let str5 = "abbaca";
console.log("String after removing all adjacent duplicates: ", removeAllAdjacentDuplicates(str5))








// =============================================== SET 3 ==============================================
// =============================================== SET 4 ==============================================
// =============================================== SET 5 ==============================================














