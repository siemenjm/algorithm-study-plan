// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

function searchInsertPosition(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }

    return nums.length;
}

console.log(searchInsertPosition([1,3,5,6], 5)); // 2
console.log(searchInsertPosition([1,3,5,6], 2)); // 1
console.log(searchInsertPosition([1,3,5,6], 7)); // 4