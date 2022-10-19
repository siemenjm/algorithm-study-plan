// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

function firstBadVersion(n, bad) {
    // want to check if n is bad
    // if not bad, divide by 2 and then check again
    // if is bad, multiply by 1.5 and then check again
    // repeat until difference between n's is 1
}

function isBadVersion(n, bad) {
    if (n >= bad) {
        return true;
    }

    return false;
}

console.log(isBadVersion(5, 4)); // true
console.log(isBadVersion(4, 4)); // true
console.log(isBadVersion(3, 4)); // false