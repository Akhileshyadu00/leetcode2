/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxima = nums[0];
    let sum = 0;

    nums.forEach((num) => {
        sum +=num;
        maxima = Math.max(maxima, sum)

        if(sum < 0) {
            sum = 0;
        }
    })
    return maxima;
};
 
// https://leetcode.com/problems/maximum-subarray/submissions/1569162436/

//  Time Complexity: O(n) (single pass through the array)
//  Space Complexity: O(1) (only a few extra variables)