/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output = {};

    for(let i = 0; i<nums.length; i++) {
        let elements = target - nums[i];

        if(output[elements] !== undefined) {
            return [output[elements], i]
        }

        output[nums[i]] = i;
    }
    return []
};

// 1: https://leetcode.com/problems/two-sum/submissions/1568954241/

// Time Complexity --> O(n), only one iteration

// Space Complexity --> O(n), due to Output array