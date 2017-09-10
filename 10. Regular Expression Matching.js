// Implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") ? false
// isMatch("aa","aa") ? true
// isMatch("aaa","aa") ? false
// isMatch("aa", "a*") ? true
// isMatch("aa", ".*") ? true
// isMatch("ab", ".*") ? true
// isMatch("aab", "c*a*b") ? true

从第一个开始比较

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let char1;
    let asterisk;

    char1=p[0];
    asterisk=p[1]=="*" ? true:false;
};