function jumpingOnClouds(c) {
    
    let totalJumps = 0;
    for (let i = 0; i < c.length; ) {

        // Check to see if i+2 is open. Jump to it if open.
        if (c[i+2] === 0) {
            i += 2;
        } else { // Assumes never 2 thunderheads in a row
            i++;
        }

        // Prevents adding extra jump once outsite the input array
        if (i < c.length) {
            totalJumps++;
        }
    }

    return totalJumps;
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])); // 3
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // 4
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])); // 3