var longestCommonPrefix = function(strs) {
    let longestStr="";
    if(!strs.length) return longestStr;
    longestStr=strs[0];
    strs.map(function(str){
        for(let i=0; i<longestStr.length &&i<str.length;i++){
            if(longestStr[i]!==str[i]){
                longestStr=longestStr.slice(0,i);
                return;
            }
        }
        longestStr=str.length<longestStr.length? str:longestStr;
    })
    return longestStr;
};