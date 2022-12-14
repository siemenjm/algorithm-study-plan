// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// function lengthOfLongestSubstring(s) {
//     // find all substings
//     // ignore substrings that have repeated characters?...
//     // return remaining substring with longest length

//     let substringList = [];
//     for (let i = 0; i < s.length; i++) {
//         let currentSubstring = [];
//         for (let j = i; j < s.length; j++) {
//             if (!currentSubstring.includes(s[j])) {
//                 currentSubstring.push(s[j]);
//                 const thisSubstring = currentSubstring.join('');
                
//                 if (!substringList.includes(thisSubstring)) {
//                     substringList.push(thisSubstring);
//                 }
//             } else {
//                 break;
//             }
//         }
//     }

//     let longestSubstring = {
//         string: '',
//         length: 0
//     };
//     for (let i = 0; i < substringList.length; i++) {
//         if (substringList[i].length > longestSubstring.length) {
//             longestSubstring.string = substringList[i];
//             longestSubstring.length = substringList[i].length;
//         }
//     }

//     return longestSubstring.length;
// }

function lengthOfLongestSubstring(s) {
    // track longest string and current string
    // check if current letter is in current string
    // if above is true -> compare current string length to longest string length, replace if longer
    // if about is false -> add letter to current string
    // return longest string length

    let longestString = '';
    let currentString = '';

    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i];
        let index = currentString.indexOf(currentLetter);

        if (index > -1) {
            if (currentString.length > longestString.length) {
                longestString = currentString;
            }

            currentString = currentString.slice(index + 1) + currentLetter;
        } else {
            currentString += currentLetter;
        }
    }

    if (currentString.length > longestString.length) {
        longestString = currentString;
    }

    return longestString.length;

}

console.log(lengthOfLongestSubstring('tree')); // tre?...
console.log(lengthOfLongestSubstring('abcabcbb')); // abc
console.log(lengthOfLongestSubstring('bbbbb')); // b
console.log(lengthOfLongestSubstring('pwwkew')); // wke