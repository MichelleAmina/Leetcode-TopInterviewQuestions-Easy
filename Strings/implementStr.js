function str(needle, haystack){
    // return haystack.indexOf(needle);

    for(let i =0 ;i<haystack.length;i++){
        if(haystack.slice(i,i+needle.length)===needle){
            return i;
        }
    }
    return -1;
}

console.log(str("leeto", "leetcode")); // -1
console.log(str("sad","sadbutsad")); //0