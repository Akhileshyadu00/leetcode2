/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length -1;
    let curr = 0;

    while(curr <= right) {
        if(nums[curr] === 0) {
            [nums[left], nums[curr]] = [nums[curr],nums[left]];
            left++;
            curr++;
        }else if(nums[curr] === 2) {
             [nums[right], nums[curr]] = [nums[curr],nums[right]];
             right--;
        }else {
            curr++
        }
    }
};

// https://leetcode.com/problems/sort-colors/submissions/1569928458/

// Total Time Complexity=O(n)
// The function uses a single while loop that processes each element at most once:
// Inside the loop:
// Swapping and incrementing/decrementing happens in constant time → O(1)
// Each element is processed once → O(n)



// Total Space Complexity = O(1)
// The algorithm sorts the array in-place without using extra memory (aside from a few pointers):
// No additional arrays or data structures → O(1)
