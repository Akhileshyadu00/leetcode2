/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) {
        return [];
    }

    nums = nums.sort((a,b) => a-b);
    let result = [];

    for(let i = 0; i < nums.length; i++) {
        if(i>0 && nums[i] === nums[i-1]) {
            continue;
        }

        let j = i+1;
        let k = nums.length-1;

        while(j<k) {
            let sum = nums[i]+nums[j]+nums[k];

            if(sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);

                while(j<k && nums[j] === nums[j+1]) j++;
                j++;
                
                while(j<k && nums[k] === nums[k-1]) k--;
                k--;
            }else if(sum < 0) {
                j++;
            }else {
                k--;
            }
        }
    }
    return result;
};



//  https://leetcode.com/problems/3sum/submissions/1569018502/

// Time Complexity- O(nlogn) + O(n2) = O(n2). // sorting + loop


//Space Complexity- O(n2) if triplets are unique
//	                O(1) if ignore result