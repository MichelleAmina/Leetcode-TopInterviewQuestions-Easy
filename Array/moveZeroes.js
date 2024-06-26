function MoveZeroes(nums){

    let left = 0
    let right = left + 1

    while (right <= nums.length -1){
        if (nums[left] !== 0) {
            left++
            right++
        } else {
            if(nums[right]!== 0){
                [nums[left], nums[right]]= [nums[right], nums[left]]
                left++
            }
            right++
        }
    }

    // let k = 0
    // for(let i =0;i<nums.length;i++){
    //     if(nums[i]!==0){
    //         nums[k] = nums[i]
    //         if(k!== i){
    //            nums[i] = 0
    //         }
    //         k++
    //     }
    // }

    // // Pointer to the position of the last non-zero found
    // let lastNonZero = 0;

    // // Move all non-zero elements to the front of the array
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== 0) {
    //         nums[lastNonZero] = nums[i];
    //         lastNonZero++;
    //     }
    // }

    // // Fill the remaining positions with zeros
    // for (let i = lastNonZero; i < nums.length; i++) {
    //     nums[i] = 0;
    // }

}

console.log(MoveZeroes([0,1,0,3,12])); // [1,3,12,0,0]