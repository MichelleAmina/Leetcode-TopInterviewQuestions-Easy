function isPalindrome(s){
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '')

    for(let i=0, j=s.length-1; i<=j; i++, j--){
        if(s[i] !== j[i]){
            return false
        }
    }

    return true

}

console.log(isPalindrome("A man, a plan, a canal: Panama"));