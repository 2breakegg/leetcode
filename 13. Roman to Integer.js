/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num=0;
    let romanChar = {
        "CM":900,
        "CD":400,
        "XC":90,
        "XL":40,
        "IX":9,
        "IV":4,
        "M":1000,
        "D":500,
        "C":100,
        "L":50,
        "X":10,
        "V":5,
        "I":1
    }

    for(k in romanChar){
        //console.log(k);
        while(s.indexOf(k)!=-1){
            num+=romanChar[k];
            s=s.replace(k,"");
            //console.log(s,romanChar[k]);
            if(!s){console.log("num"+num); return num;}
        }
    }
    
    return num;
};