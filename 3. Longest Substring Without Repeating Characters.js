// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest=""
    let now=""
    
    for(let i=0; i<s.length; i++){
        // console.log(" now:"+now);
        // console.log(" longest:"+longest);

        for(let j=0; j<now.length; j++){
            if(now[j]==s[i]){
                longest=longest.length>=now.length? longest:now;
                now=now.substr(j+1);
                break;
            }
        }
        now+=s[i];
    }
    return longest.length>=now.length? longest.length:now.length;
};