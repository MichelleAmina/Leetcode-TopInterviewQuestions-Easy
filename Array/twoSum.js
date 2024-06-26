function TwoSum(nums, target){
    // for (let i=0 ; i < nums.length; i++){
    //     let j= i+1
    //     if(nums[i] + nums[j] === target){
    //         return [i, j]
    //         i++
    //     }
    // }

    // for(let i=0;i<nums.length;i++){
    //     dif=target-nums[i];
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[j]==dif){
    //             return [i,j];
    //         }
    //     }
    // }

    let map = new Map();

    for (let i = 0; i < nums.length; i++){
        if (map.has(target - nums[i])){
            return [map.get(target - nums[i]), i]
        }else{
            map.set(nums[i], i)
        }
    }
    return []

}

console.log(TwoSum([2,7,11,15], 9)); // [0,1]