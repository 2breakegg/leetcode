// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example:

// Input: "babad"

// Output: "bab"

// Note: "aba" is also a valid answer.
// Example:

// Input: "cbbd"

// Output: "bb"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let middle=(s.length-1)/2;
    let interval=0;
    let longest=s[0] || s;
    loop1:
    while(interval<=middle && middle-interval>=(longest.length-1)/2){
        let j=0;
        for(let i=(middle+interval)%1; i+interval<=middle; i++){
            if(s[middle+interval+i]!=s[middle+interval-i])
                break;
            j=i;
        }
        if(j){
            let now=s.substr(middle+interval-j, j*2+1);
            longest=longest.length>now.length?longest:now;
        }
        j=0;
        for(let i=(middle+interval)%1; i+interval<=middle; i++){
            if(s[middle-interval+i]!=s[middle-interval-i])
                break;
            j=i;
        }
        if(j){
            let now=s.substr(middle-interval-j, j*2+1);
            longest=longest.length>now.length?longest:now;
        }
        interval+=0.5;
    }
    return longest;
}
/*
var longestPalindrome = function(s) {
    loop1:for(let i=s.length-1; i>=0; i--){
        loop2:for(let j=0;j+i<s.length;j++){
            if(s[j]==s[j+i]){
                for(let k=0; k<i/2+1; k++){
                    if(s[j+k]!=s[j+i-k])
                        continue loop2;
                }
                return s.substr(j,i+1)
            }
        }
    }
    return s;
}
*/
/**
var longestPalindrome = function(s) {
    loop1:for(let i=s.length-1; i>=0; i--){
        loop2:for(let j=0;j+i<s.length;j++){
            if(s[j]==s[j+i]){
                var str1=s.substr(j,i+1);
                if(str1==str1.split('').reverse().toString().replace(/,/g,''))
                return str1
            }
        }
    }
    return s;
}
*/