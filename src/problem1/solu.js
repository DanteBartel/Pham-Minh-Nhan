// Provide 3 unique implementations of the following function in JavaScript.
// Input: n - any integer; Assuming this input will always produce a result lesser than Number.MAX_SAFE_INTEGER.
// Output: return - summation to n, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

var sum_to_n_a = function(n) {
    // your code here
    // basic for loop
    let sum = 0
    for (let i = 1; i <= n; i++) { sum += i }
    return sum
};

var sum_to_n_b = function(n) {
    // your code here
    // Using recursive function
    if (n <= 1) return n
    return sum_to_n_b(n-1) + n
};

var sum_to_n_c = function(n) {
    // your code here
    // Create an array, then use arrow function / functional programing to handle calculating the sum
    if (n <= 1) return n
    let arr = Array.from({ length: n }, (_, i) => i+1)
    return arr.reduce((pre, cur) => pre + cur, 0)
};

// Test
console.log(sum_to_n_a(5))
console.log(sum_to_n_b(6))
console.log(sum_to_n_c(7))