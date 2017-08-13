// Determine whether an integer is a palindrome. Do this without extra space.

// click to show spoilers.

// Some hints:
// Could negative integers be palindromes? (ie, -1)

// If you are thinking of converting the integer to string, note the restriction of using extra space.

// You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

// There is a more generic way of solving this problem.

//题目要求判断是否是回文 
// 需要让 第1位和倒数第1位(N位) 第2位和倒数第2位(N-1位)... 进行比较
// 如果都相等则返回 true 否则 返回false
// 所以需要先算出数的位数,长度N(length)
// 然后比较第1位和倒数第N位...
// 由于负数开头带'-'所以直接false

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(!x) return true;
    if(x<0)return false;
    let length=Math.round(Math.log(Math.abs(x))/Math.LN10)+1;
    length= (Math.abs(x)/Math.pow(10,length))>=0.1 ? length:length-1;

    for(let i=0; i<length;i++){
        // console.log(length, Math.floor(x/Math.pow(10,i)%10),Math.floor(x/Math.pow(10,length-1-i)%10));
        if(Math.floor(x/Math.pow(10,i)%10)!=Math.floor(x/Math.pow(10,length-1-i)%10)){
           return false;
        }
    }
    return true;
};