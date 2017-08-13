// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

// click to show spoilers.

// Note:
// The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let out=0;
    let i=0;
    while(x){
        out=out*10+x%10;
        x=Math.trunc(x/10);
        i++;
        if(i>11)
            return 0;
    }
    if(out>=Math.pow(2,31) || out<-Math.pow(2,31)){
       return 0;
    }
    return out;
};