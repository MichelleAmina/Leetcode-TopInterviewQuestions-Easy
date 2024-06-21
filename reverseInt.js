function ReverseInt(num){
    let arr = num.toString().split('');

    let left = 0
    let right = arr.length-1

    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left ++
        right --
        
    }

    // Join the array back into a string and convert to number
    let reversedStr = arr.join('');
    let reversedNum = parseInt(reversedStr);

    if (num < 0) {
        reversedNum = -reversedNum;
    }
    
    return reversedNum;

    

}

// console.log(ReverseInt(123)); // 321
// console.log(ReverseInt(-123)); // -321
// console.log(ReverseInt(120)); // 21


var reverse = function(x) {
    let res = 0;
    if (x < 0) {
        res = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
    } else {
        res = parseInt(String(x).split('').reverse().join(''));
    }

    // if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
    //     return 0;
    // }

    return res;    
};

console.log(reverse(-123));