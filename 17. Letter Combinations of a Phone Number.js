/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const digitsArr=digits.split('');
    const charMap=[
        [],
        [],
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i'],
        ['j','k','l'],
        ['m','n','o'],
        ['p','q','r','s'],
        ['t','u','v'],
        ['w','x','y','z']
    ];
     return getletters(digitsArr,charMap,[]);
};

function getletters(digits,charMap,prefix){
    let prefixNew=[];
    if(!digits.length) return prefix;
    charMap[digits[0]].map((v)=>{
        if(!prefix.length) prefixNew.push(v);
        return prefix.map((v2)=>{
            return prefixNew.push(v2+v);
        })
    })

    digits.splice(0,1);
    return getletters(digits,charMap,prefixNew);
    
}

