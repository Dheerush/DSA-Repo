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
 * 21. for...in        -> ❌ AVOID: Iterates keys as strings; includes prototypes.
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













