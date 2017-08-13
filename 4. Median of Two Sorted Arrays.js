// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const maxlength=nums1.length+nums2.length;
    let length1=Math.ceil((maxlength+1)/2);
    let length2=Math.floor((maxlength+1)/2);

    let nums3=[];
    let i=0;
    let j=0;
    while(i<nums1.length && j<nums2.length && i+j<length1){
        if(nums1[i]>nums2[j]){
            nums3.push(nums2[j++]);
        }else{
            nums3.push(nums1[i++]);
        }
    }
    if(i+j>length1){
        return (nums3[length1-1]+nums3[length2-1])/2;
    }else{
        console.log(nums3);
        nums3=nums3.concat(nums1.splice(i));
                console.log(nums3);

        nums3=nums3.concat(nums2.splice(j));
                console.log(nums3);
        console.log(length1);
        console.log(length2);

        console.log(nums3[length1-1]+"+"+nums3[length2-1]);

        return (nums3[length1-1]+nums3[length2-1])/2;
    }
    
};