function FirstUnique(s){
    // let arr = s.split('')
    let newDict= {}

    /*
    for(let i=0; i<s.length; i++){
        let letter = s[i]
        newDict[letter] = (newDict[letter] + 1) || 1
    }

    for(let i=0; i<s.length; i++){
        if (newDict[s[i]] === 1){
            return i
        }
    }

    return -1
    */


    for (let letter of s) {
        newDict[letter] = (newDict[letter] + 1) || 1;
    }

    for (let [index, letter] of [...s].entries()) {
        if (newDict[letter] === 1) {
            return index;
        }
    }

    // for (let i = 0; i < s.length; i++) {
    //     const char = s[i];
    //     if (charCount[char] === 1) {
    //         return i;
    //     }
    // }

    return -1

}

console.log(FirstUnique("leetcode")); //0
console.log(FirstUnique("loveleetcode")); // 2
