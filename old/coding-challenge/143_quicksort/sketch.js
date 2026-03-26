
// https://en.wikipedia.org/wiki/Quicksort

/*
    Quicksort is an in-place sorting algorithm. 
    Developed by British computer scientist Tony Hoare in 1959 and published in 1961,
        it is still a commonly used algorithm for sorting.
    When implemented well, it can be somewhat faster than merge sort and about two or three times
        faster than heapsort.
    
    Quicksort is a divide-and-concuer algorithm.
    It works by selecting a 'pivot' element from the array and partitioning the other elements
        into two subarrays, according to whether they are less than or greater than the pivot.
    For this reason, it is sometimes called partition-exchange sort.
    The sub-arrays are then sorted recursively.
    This can be done in-place, requiring small additional amounts of memory to perform the sorting.

    Quicksort is a comparison sort, meaning that it can sort items of any type for which a 'less-than'
        relation (formally, a total order) is defined.
    Efficient implementations of Quicksort are not a stable sort, meaning that the relative order
        of equal sort items is not preserved.

    Worst Case > O(n^2)
    Best  Case > O(nlogn) or O(n)
    Average    > O(nlogn) 


    - Lomuto Partition Scheme  -> use this!

    algorithm quicksort(A, lo, hi) is
        if lo < hi then
            p := partition(A, lo, hi)
            quicksort(A, lo, p - 1)
            quicksort(A, p + 1, hi)

    algorithm partition(A, lo, hi) is
        pivot := A[hi]
        i := lo
        for j := lo to hi do
            if A[j] < pivot then
                swap A[i] with A[j]
                i := i + 1
        swap A[i] with A[hi]
        return i



    - Hoare Partition Scheme 

    algorithm quicksort(A, lo, hi) is
        if lo < hi then
            p := partition(A, lo, hi)
            quicksort(A, lo, p)
            quicksort(A, p + 1, hi)

    algorithm partition(A, lo, hi) is
        pivot := A[ floor((hi + lo) / 2) ]
        i := lo - 1
        j := hi + 1
        loop forever
            do
                i := i + 1
            while A[i] < pivot
            do
                j := j - 1
            while A[j] > pivot
            if i ≥ j then
                return j
            swap A[i] with A[j]

*/


const w = 5;

let values;
let states = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
        states[i] = -1;
    }
    doQuickSort();
}

function doQuickSort() {
    quickSort(values, 0, values.length - 1).then(
        () => {
            values = new Array(floor(width / w));
            for (let i = 0; i < values.length; i++) {
                values[i] = random(height);
                states[i] = -1;
            }
            doQuickSort();
        }
    );
}

async function quickSort(arr, sidx, eidx) {
    if (sidx >= eidx) return;
    const idx = await partition(arr, sidx, eidx);
    states[idx] = -1;

    await Promise.all([
        quickSort(arr, sidx, idx-1),
        quickSort(arr, idx+1, eidx)
    ]);
}

async function partition(arr, sidx, eidx) {
    
    for (let i = sidx; i < eidx; i++) {
        states[i] = 1;
    }
    const pivotValue = arr[eidx];
    let pivotIndex = sidx;
    states[pivotIndex] = 0;
    for (let i = sidx; i < eidx; i++) {
        if (arr[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            states[pivotIndex] = -1;
            pivotIndex++;
            states[pivotIndex] = 0;
        }
    }
    await swap(arr, pivotIndex, eidx);

    for (let i = sidx; i < eidx; i++) {
        if (i !== pivotIndex) {
            states[i] = -1;
        }
    }

    return pivotIndex;
}

async function swap(arr, i0, i1) {
    await sleep(50);
    [arr[i0], arr[i1]] = [arr[i1], arr[i0]];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function draw() {
    background(51);
    for (let i = 0; i < values.length; i++) {
        noStroke();
        if (states[i] === 0) {
            fill('#E0777D');
        } else if (states[i] === 1) {
            fill('#D6FFB7');
        } else {
            fill(255);
        }
        rect(i * w, height - values[i], w, values[i]);
    }
}
