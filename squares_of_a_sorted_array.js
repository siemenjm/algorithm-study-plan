// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

function sortedSquares(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] ** 2;
    }

    return mergeSort(nums);
}

function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]