function PlusOne(digits){
    // let num = digits.join('')
    for (let i = digits.length - 1; i >= 0 ; i--){

        if (digits[i] !== 9){
            digits[i] ++
            return digits 
        } else {
           digits[i] = 0
        }
    }

    digits.unshift(1)
    return digits 

}

console.log(PlusOne([1,2,3])); // [1,2,4]
console.log(PlusOne([9])); // [1,0]


function PlusOne(digits) {
    // Join the array into a string, then convert it to a number, add one, and convert it back to a string
    let num = BigInt(digits.join('')) + BigInt(1);

    // Split the string back into an array of digits
    let result = num.toString().split('').map(Number);
    
    return result;
}

console.log(PlusOne([1, 2, 3])); // [1, 2, 4]

// Explanation:
// Join the array into a string: digits.join('') converts the array [1, 2, 3] into the string "123".
// Convert the string to a BigInt and add one: 
// BigInt(digits.join('')) + BigInt(1) converts the string "123" to a BigInt, adds one, resulting in the BigInt 124n.
// Convert the BigInt back to a string and split it into an array of characters:
// num.toString().split('') converts 124n to the string "124", then splits it into an array of characters ["1", "2", "4"].
// Convert the array of characters to an array of numbers: 
// .map(Number) converts the array of string digits ["1", "2", "4"] into an array of numbers [1, 2, 4].
