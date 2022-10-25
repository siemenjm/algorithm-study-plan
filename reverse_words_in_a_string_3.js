// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"
 

// Constraints:
// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

function reverseWords(s) {
    let arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        let wordArr = arr[i].split('');
        for (let j = 0, k = wordArr.length - 1; j < k;) {
            [wordArr[j], wordArr[k]] = [wordArr[k], wordArr[j]];

            j++;
            k--;
        }

        const joined = wordArr.join('');
        arr[i] = joined;
    }
    
    return arr.join(' ');
}

console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("God Ding")); // "doG gniD"