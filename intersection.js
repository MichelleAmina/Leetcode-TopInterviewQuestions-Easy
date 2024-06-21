function Intersection(nums1, nums2){

    // return arr1.filter(element => arr2.includes(element));

    let obj = {}
    let result = []

    for(let i of nums1){
        if(!obj[i]){
            obj[i] = 1
        }else{
            obj[i] ++
        }
    }


    for(let i of nums2){
        if(obj[i] > 0){
            result.push(i)
            obj[i] -- 
        }
    }

    return result

}


console.log(Intersection([1,2,2,1], [2,2])); // [2,2]
console.log(Intersection([4,9,5], [9,4,9,8,4])); // [4,9]