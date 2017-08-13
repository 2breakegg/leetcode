// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows==1){
        return s;
    }
    let strArr=new Array();
    let out="";
    let j=0;
    let j2=1;
    for(let i=0; i<numRows; i++){
        strArr[i]="";
    }
    for(let i=0; i<s.length; i++){
        strArr[j]+=s[i];
        if(j+j2<numRows && j+j2>=0){
            j+=j2;
        }else{
            j2=-j2;
            j+=j2;
        }
    }
    
    for(let i=0; i<numRows; i++){
        out+=strArr[i];
    }
    return out;
};