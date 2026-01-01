// ===================================== SORTING ALGORITHMS =====================================

// ===================================== 1. Selection Sort =====================================
/**
 * Approach:
 *  - Divide the array into two parts: sorted and unsorted
 *  - Repeatedly find the minimum element from the unsorted part
 *  - Swap it with the first element of the unsorted part
 *
 * Time Complexity:
 *  - Best Case: O(N^2)
 *  - Average Case: O(N^2)
 *  - Worst Case: O(N^2)
 *
 * Space Complexity: O(1)  (In-place)
 * Stable: ❌ No
 */

var selectionSort = function (arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
};

let arr1 = [70, 30, 50, 20, 40, -50];
console.log("Selection Sort:", selectionSort([...arr1]));
console.log("");


// ===================================== 2. Bubble Sort =====================================
/**
 * Approach:
 *  - Repeatedly compare adjacent elements
 *  - Swap if they are in the wrong order
 *  - After each pass, the largest element bubbles to the end
 *
 * Time Complexity:
 *  - Best Case: O(N)   (Already sorted, with optimization)
 *  - Average Case: O(N^2)
 *  - Worst Case: O(N^2)
 *
 * Space Complexity: O(1)
 * Stable: ✅ Yes
 */

var bubbleSort = function (arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) break;
    }
    return arr;
};

let arr2 = [70, 30, 50, 20, 40, -50];
console.log("Bubble Sort:", bubbleSort([...arr2]));
console.log("");


// ===================================== 3. Insertion Sort =====================================
/**
 * Approach:
 *  - Assume the first element is already sorted
 *  - Take the next element (key)
 *  - Shift all larger elements to the right
 *  - Insert the key in its correct position
 *
 * Time Complexity:
 *  - Best Case: O(N)   (Nearly sorted array)
 *  - Average Case: O(N^2)
 *  - Worst Case: O(N^2)
 *
 * Space Complexity: O(1)
 * Stable: ✅ Yes
 */

var insertionSort = function (arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    return arr;
};

let arr3 = [70, 30, 50, 20, 40, -50];
console.log("Insertion Sort:", insertionSort([...arr3]));
console.log("");


// ===================================== 4. Quick Sort =====================================
/**
 * Approach:
 *  - Choose a pivot element
 *  - Partition the array such that:
 *      elements < pivot → left
 *      elements > pivot → right
 *  - Recursively apply Quick Sort on left & right subarrays
 *
 * Time Complexity:
 *  - Best Case: O(N log N)
 *  - Average Case: O(N log N)
 *  - Worst Case: O(N^2)  (Bad pivot selection)
 *
 * Space Complexity:
 *  - O(log N)  (Recursion stack)
 *
 * Stable: ❌ No
 * In-place: ✅ Yes
 */
var quickSort = function (arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
};

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

let arr4 = [70, 30, 50, 20, 40, -50];
console.log("Quick Sort:", quickSort([...arr4]));
console.log("");

// ====================================== 5.Merge Sort  =================================== 















