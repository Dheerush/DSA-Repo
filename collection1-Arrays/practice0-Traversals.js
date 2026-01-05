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
 * - ❌ we can se for...in loop too but not recommended practice
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



// =========================================== Object Traversal ========================================
/** - Object
 *    --> An Object is a variable that can hold many variables.
 *    --> Objects are collections of key-value pairs, where each key (known as property names) has a value
 *    --> Objects can describe anything like houses, cars, people, animals, or any other subjects. 
 * */


// A basic object
let myObj1 = {
    name: "dheeru",
    age: 29,
    weight: 80,
    company: "Infosys",
    favoriteColor: "blue"
}


// - for...in
for (let key in myObj1) {
    console.log(key); // it will just print the key
}
console.log("")

// ✔️ for...in + bracket access (BEST BASIC WAY)
for (let key in myObj1) {
    console.log(key, "-->", myObj1[key])
}
console.log("")

// ✔️ Method 2: Object.entries() (BEST PRACTICE ⭐)
for (let [key, value] of Object.entries(myObj1)) {
    console.log(key, "-->", value)
}
console.log("")


// ✔️ Method 3: Object helpers individually
//only keys
Object.keys(myObj1).forEach(key => { console.log(key) })
console.log("")

//only values
Object.values(myObj1).forEach(value => { console.log(value) })
console.log("")


/** NOTE:
 * Q. We are able to traverse objects, so why do we say objects are NOT "iterable" in JavaScript?
 *
 * A.
 * - To be officially "iterable" in JavaScript, an object must implement the
 *   iterable protocol, i.e., it must have a method at the key `Symbol.iterator`.
 *
 * - This `Symbol.iterator` method tells JavaScript exactly HOW to produce
 *   values one by one during iteration.
 *
 * - Built-in iterables like Arrays, Strings, Maps, and Sets already provide
 *   a `Symbol.iterator`, which is why they work with the `for...of` loop.
 *
 * - A plain object `{}` does NOT implement `Symbol.iterator`.
 *   Therefore, using `for...of` on an object throws:
 *   ❌ TypeError: object is not iterable
 *
 * ----------------------------------------------------
 * THEN HOW DO WE "TRAVERSE" OBJECTS?
 * ----------------------------------------------------
 *
 * Even though objects are not formal iterables, we can still traverse
 * their contents using the following approaches:
 *
 * 1️⃣ for...in loop
 *    - The "classic" or "old-school" way.
 *    - Iterates over the object's ENUMERABLE property KEYS.
 *    - This is NOT value iteration; it is key enumeration.
 *
 * 2️⃣ Object.keys(), Object.values(), Object.entries()
 *    - These methods convert an object into an ARRAY.
 *    - Since arrays ARE iterable, we can then use `for...of`, `map`, etc.
 *
 * 3️⃣ Reflect.ownKeys()
 *    - Advanced use case.
 *    - Returns ALL keys (string + symbol), including non-enumerable ones.
 *
 * ----------------------------------------------------
 * WHAT DOES "ENUMERABLE" MEAN?
 * ----------------------------------------------------
 *
 * - In JavaScript, every object property has a hidden configuration
 *   called a "Property Descriptor".
 *
 * - One of the flags in this descriptor is:
 *     enumerable: true | false
 *
 * - Enumerable properties are "visible" during key-listing operations like:
 *     - for...in
 *     - Object.keys()
 *     - Object.entries()
 *
 * - Non-enumerable properties EXIST on the object,
 *   but are hidden from these loops.
 *
 * ----------------------------------------------------
 * FINAL SUMMARY (IMPORTANT)
 * ----------------------------------------------------
 *
 * - Iterable  → value-by-value traversal using Symbol.iterator (for...of)
 * - Enumerable → key-by-key listing of properties (for...in)
 *
 * - Objects are NOT iterable,
 *   but their properties CAN be enumerable.
 */


// ============================= Advance Traversal Practice: API responses : JSON/Object ====================================

const catalog = {
    store: "Fund Center",
    categories: [
        {
            id: "equity",
            name: "Equity Funds",
            funds: [
                { id: "EQ-101", name: "Alpha Growth", nav: 123.45, expenseRatio: 0.9, active: true },
                { id: "EQ-102", name: "Blue Chip Index", nav: 89.2, expenseRatio: 0.15, active: true },
                { id: "EQ-103", name: "Emerging Markets", nav: 123.45, expenseRatio: 1.1, active: true },
            ]
        },
        {
            id: "debt",
            name: "Debt Funds",
            funds: [
                { id: "DB-201", name: "Govt Bond", nav: 10.02, expenseRatio: 0.25, active: true },
                { id: "DB-202", name: "Corporate Bond", nav: 15.33, expenseRatio: 0.4, active: true },
            ]
        }
    ],
    lastUpdate: "2025*12-10T08:00:00:0000Z"
}

// Q1. give me an array of all the type of funds, ie fund categories name. Example : ["Equity Funds", "Debt Funds"]
// Method 1: ✔️using map (Recommended) 
let fundTypes = catalog.categories.map(currentObj => currentObj.name);
console.log(" All Fund types: ", fundTypes);

// Method 2: 
let answer1 = [];
catalog.categories.forEach((currentObj) => {
    answer1.push(currentObj.name);
})
console.log(" All Fund types: ", answer1);

/** - Why we should use map instead of forEach
 *    --> forEach() means Loop and DO something
 *    --> map() means: “Loop and RETURN something”.
 *
 *  - If you find yourself using forEach() + push(), you probably want map()
 *  - We used map() because the requirement is to transform an array into another array. forEach() is for side effects, not data transformation.
 *
 */


// Q2. Give me a list of all funds name. [Alpha Growth, Blue Chip Index, Emerging Markets, Govt Bond, Corporate Bond ]
// Method 1: use map()
let fundName1 = catalog.categories.map((category) => category.funds.map(prp => prp.name))
console.log(fundName1); // it will give an array of arrats
// Output: [  [ 'Alpha Growth', 'Blue Chip Index', 'Emerging Markets' ], ['Govt Bond', 'Corporate Bond']]


// Method 1: use flatMap()
let fundName2 = catalog.categories.flatMap((category) => category.funds.map(prp => prp.name))
console.log(fundName2);
// [ 'Alpha Growth','Blue Chip Index','Emerging Markets','Govt Bond','Corporate Bond']
// flatMap is a combination of .map() and .flat(). It maps each item to an array and then automatically flattens the result by one level.

// Method 3: The "Chain" Way: map() + flat()
let fundName3 = catalog.categories.map((category) => category.funds.map(prp => prp.name)).flat()
console.log(fundName3);




// Practice2: API Data
const orderHistory = {
    customer: "Dheeru",
    membership: "Gold",
    orders: [
        {
            orderId: "ORD-001",
            date: "2025-11-01",
            status: "delivered",
            items: [
                { productId: "P1", title: "Laptop", price: 1200, qty: 1, category: "Electronics" },
                { productId: "P2", title: "Mouse", price: 25, qty: 2, category: "Electronics" }
            ]
        },
        {
            orderId: "ORD-002",
            date: "2025-11-15",
            status: "pending",
            items: [
                { productId: "P3", title: "Yoga Mat", price: 50, qty: 1, category: "Fitness" },
                { productId: "P4", title: "Water Bottle", price: 15, qty: 3, category: "Fitness" }
            ]
        },
        {
            orderId: "ORD-003",
            date: "2025-12-01",
            status: "delivered",
            items: [
                { productId: "P5", title: "Monitor", price: 300, qty: 1, category: "Electronics" }
            ]
        },
        {
            orderId: "ORD-004",
            date: "2025-12-09",
            status: "pending",
            items: [
                { productId: "P6", title: "Trimmer", price: 1200, qty: 1, category: "Electronics" }
            ]
        },
    ]
};

// Q1. Get an array of all orderIds. 
const allOrderIds = orderHistory.orders.map((current) => current.orderId);
console.log("All Order IDs: ", allOrderIds);
// All Order IDs:  [ 'ORD-001', 'ORD-002', 'ORD-003' ]


// Q2. Get a flat list of all product titles purchased across all orders.
let allProductTitles = orderHistory.orders.map((current) => current.items.map((currentItem) => currentItem.title)).flat();
console.log("All Product Titles: ", allProductTitles);


// Q3. Get a flat list of items that belong to the "Electronics" category only.
let allElectornicItems =
    orderHistory.orders.flatMap((order) => order.items)
        .filter(item => item.category === 'Electronics')
        .map(obj => obj.title);
console.log("All Electornics Items: ", allElectornicItems);



// Q4. Calculate the total price of items bought (total price).
let totalPrice = orderHistory.orders.flatMap((category) => category.items.map(obj => obj.price)).reduce((curr, acc) => curr + acc, 0);
console.log("Total Price of items bought: ", totalPrice);


// Q5. Calculate the total number of items bought (sum of all qty).
let totalQuantity = orderHistory.orders.flatMap(category => category.items.map(curr => curr.qty)).reduce((curr, acc) => curr + acc, 0);
console.log("Total number of items bought: ", totalQuantity);


// Q6: Find the "Pending" Order IDs. Create an array of just the orderIds for orders that have a status of "pending".
const allPendingItems = orderHistory.orders.filter(order => order.status === 'pending').map(order => order.orderId)
console.log("All pending Items order id: ", allPendingItems);



// practice 3
const hospitalData = {
    hospitalName: "City General",
    departments: [
        {
            deptId: "D1",
            name: "Cardiology",
            doctors: [
                {
                    id: "DR-10",
                    name: "Dr. Smith",
                    specialty: "Surgeon",
                    patients: [
                        { pId: "P-500", name: "Alice", bills: [200, 500, 150], insurance: true },
                        { pId: "P-501", name: "Bob", bills: [1000, 250], insurance: false }
                    ]
                },
                {
                    id: "DR-11",
                    name: "Dr. Jones",
                    specialty: "General",
                    patients: [
                        { pId: "P-502", name: "Charlie", bills: [300], insurance: true }
                    ]
                },
                {
                    id: "DR-13",
                    name: "Dr. Cooper",
                    specialty: "Surgeon",
                    patients: [
                        { pId: "P-503", name: "Penny", bills: [700], insurance: true }
                    ]
                }
            ]
        },
        {
            deptId: "D2",
            name: "Pediatrics",
            doctors: [
                {
                    id: "DR-20",
                    name: "Dr. Adams",
                    specialty: "General",
                    patients: [
                        { pId: "P-600", name: "David", bills: [50, 75], insurance: true },
                        { pId: "P-601", name: "Eve", bills: [1200], insurance: false }
                    ]
                }
            ]
        }
    ]
};



// Q1. The Name Collector: Get a flat array of all patient names in the entire hospital. 
let allPatients = hospitalData.departments.flatMap(obj => obj.doctors.flatMap(current => current.patients.map(pat => pat.name)))
console.log("List of All Patients: ", allPatients);

// Q2. The Risk Report: Get an array of names of all patients who do NOT have insurance.
let allPatientsWithoutInsurance = hospitalData.departments.
    flatMap(obj => obj.doctors.flatMap(current => current.patients.filter(ele => ele.insurance !== true).map(pat => pat.name)))
console.log("All Patients without the insurance", allPatientsWithoutInsurance);


// Q3. The Financial Auditor (Hard): Calculate the total revenue of the hospital (the sum of every single number in every bills array).
let totalRevenue = hospitalData.departments.flatMap(currentObj => currentObj.doctors.flatMap(docObj => docObj.patients.flatMap(patObj => patObj.bills))).reduce((curr, acc) => curr + acc, 0);
console.log("Total Revenue of the Hospital: ", totalRevenue);

// Q4. The Specialist Finder: Find the names of all Doctors who work in the "Cardiology" department and are "Surgeons".
let cardioSurgeons = hospitalData.departments
    .filter(dept => dept.name === 'Cardiology') // 1. Get the Cardiology Dept
    .flatMap(dept => dept.doctors)              // 2. Get all doctors in that dept
    .filter(doc => doc.specialty === 'Surgeon') // 3. Keep only surgeons
    .map(doc => doc.name);                      // 4. Get the name string

console.log("Cardiology Surgeons:", cardioSurgeons);
// Output: ["Dr. Smith"]



// Q5. Give me the list of each doctor with their respective patients
// Q5. List of each doctor with their respective patients
const doctorPatientMap = hospitalData.departments.
    flatMap(dept => dept.doctors.map(doc => {
        const patientNames = doc.patients.map(p => p.name);
            return `${doc.name} : [${patientNames.join(", ")}]`;
        })
    );

console.log(doctorPatientMap);
/* Output: [
  "Dr. Smith : [Alice, Bob]",
  "Dr. Jones : [Charlie]",
  "Dr. Adams : [David, Eve]"
]
*/











