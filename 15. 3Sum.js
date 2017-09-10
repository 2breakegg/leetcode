var threeSum = function(nums) {
    let nums1=[];
    let key1=[];
    let arrs=[];
    
    nums.map(function(v){
        if(nums1[v]===undefined){
            nums1[v]=1;

            let max=key1.length-1;
            let min=0;
            let keyNow=0;
            let dif=0;
            while(min<=max){
                keyNow=~~((max+min)/2);
                if(v<key1[keyNow]){
                    max=keyNow-1;
                }else{
                    min=keyNow+1;
                }
            }
            
            key1.splice(min,0,v);
        }else{
            nums1[v]++;
        }
    });
    console.warn(key1,nums1);
    for(k in key1){
        v=key1[k];
        if(v>0) break;
        if(v===0 && nums1[v]>=3){
            arrs.push([0,0,0]);
            break;
        }
        if(nums1[v]>=2){
            let v3=0-v-v;
            if(nums1[v3]!==undefined && v3>v)
                arrs.push([v,v,v3])
        }
        for(let k2=~~k+1; k2<key1.length; k2++){
            let v2=key1[k2];
            let v3=0-v-v2;
            if(v2>v3) break;
            if(nums1[v3]!==undefined){
                if (v2==v3 && nums1[v3]<2) continue
                arrs.push([v,v2,v3])
            }
        }   
    }
    return arrs;    
};

