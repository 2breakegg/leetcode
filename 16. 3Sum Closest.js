var threeSumClosest = function(nums,target) {
    // console.time('总时间');
    let nums1=[];
//     nums2[nums1[n]]= undefined or sum
    let key1=[];
    let closest=nums[0]+nums[1]+nums[2];
    
    // console.time('排序');
    nums.map(function(v){
        if(nums1[v]===undefined){
            nums1[v]=1;

            let max=key1.length-1;
            let min=0;
            let keyNow=0;
            let dif=0;
            while(min<=max){
//                 console.log("v:",v,min,max)
                keyNow=~~((max+min)/2);
//                 console.warn(v<key1[keyNow],v,key1[keyNow],keyNow)
                if(v<key1[keyNow]){
//                     console.error("v:",v,min,max)
                    max=keyNow-1;
                }else{
//                     console.warn("v:",v,min,max)
                    min=keyNow+1;
                }
            }
            
            key1.splice(min,0,v);
        }else{
            nums1[v]++;
        }
    });
    // console.timeEnd('排序');
    // console.time('插入');
//     key1.sort((a,b)=>a-b);
//     console.warn(key1,nums1);
//     console.error(nums1);
    for(k in key1){
        v=key1[k];
//         console.info(k,v,key1);
        if(nums1[v]>=3){
            closest=getClosest(v,v,v,closest,target);
            
        }
        if(nums1[v]>=2){
            for(let k3=~~k+1; k3<key1.length; k3++){
                let v3=key1[k3];
                closest=getClosest(v,v,v3,closest,target);
            }
        }
        if(closest==target) {
            // console.timeEnd('插入2');
            // console.timeEnd('总时间2');
            return closest;
        }
        for(let k2=~~k+1; k2<key1.length; k2++){
            let v2=key1[k2];
            for(let k3=k2; k3<key1.length; k3++){
                let v3=key1[k3];
                if(v3==v2 && nums1[v3]<2) continue;
                closest=getClosest(v,v2,v3,closest,target);
            }
            if(closest==target) {
                // console.timeEnd('插入3');
                // console.timeEnd('总时间3');
                return closest;
            }
        }   
    }
    return closest;
};


function getClosest(v1,v2,v3,closest,target){
    sum=v1+v2+v3;
//     console.log(v1,v2,v3);
    return Math.abs(sum-target)<Math.abs(closest-target)?sum:closest;
}