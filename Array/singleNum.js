function Single(nums){
    // let newArr = nums.sort((a, b) => a-b)
    // console.log(newArr)

    // if (newArr.length === 1){
    //     return newArr[0]
    // }

    // for (let i=0; i<newArr.length; i+=2){
    //     if (i + 1 === newArr.length || newArr[i] !== newArr[i + 1]) {
    //         return newArr[i];
    //     }

    // }

    let result=0;
    for(let i=0;i<nums.length;i++){
        result ^=nums[i]
        }
    return result;

}

console.log(Single([1])) //1
console.log(Single([2,2,1])); // 1
console.log(Single([4,1,2,1,2])); // 4