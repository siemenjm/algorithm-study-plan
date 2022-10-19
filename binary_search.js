// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

function binarySearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            return -1;
        } else if (nums[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));