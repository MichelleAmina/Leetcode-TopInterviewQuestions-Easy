function Duplicate(nums){
    // let newArr = new Set(nums)
    // return newArr.size !== nums.length

    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) { 
            return true;
        }
    }

    return false;

}

console.log(Duplicate([1,2,3,1])) // true
console.log(Duplicate([1,2,3,4])); // false
console.log(Duplicate([1,1,1,3,3,4,3,2,4,2])); // true