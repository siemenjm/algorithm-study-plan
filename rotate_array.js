// Given an array, rotate the array to the right by k steps, where k is non-negative.

function rotate(nums, k) {
    // for (let i = 1; i <= k; i++) {
    //     nums.unshift(nums.pop());
    // }

    // return nums;

    const first = nums.slice(-k);
    const resultArray = first.concat(nums.slice(0, -k));

    return resultArray;
}

console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2)); // [3,99,-1,-100]