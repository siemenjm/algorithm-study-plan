// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.
 
// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:
// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

function checkInclusion(s1, s2) {
    // search s2 for first letter of each permutation
    // check s2 for first permutation
    // if perm is not in s2, create next permutation

    let testString = 'abc'; // abc, acb, bac, bca, cab, cba
    for (let i = 0; i < s1.length; i++) {
        
    }



    // this checks if perm is in s2
    // let index = s2.indexOf(s1);
    // if (index > -1) {
    //     console.log('true: ', index);
    //     return true;
    // }

    // return index;
}

console.log(checkInclusion('ba', 'eidbaooo')); // true
// console.log(checkInclusion('ab', 'eidbaooo')); // true
// console.log(checkInclusion('ab', 'eidboaoo')); // false