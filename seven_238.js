/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);
    const result = new Array(n);

    for(let i=1; i<n; i++) {
        left[i] = left[i-1] * nums[i-1];
    }

    for(let i=n-2; i>=0; i--) {
        right[i] = right[i+1] * nums[i+1];
    }

    for(let i=0; i<n; i++) {
        result[i] = left[i] * right[i];
        
    }

    return result;
};

//  https://leetcode.com/problems/product-of-array-except-self/submissions/1569908428/


// 1. Time Complexity The function involves three passes through the nums array of size n:
// Building left product array → O(n)
// Building right product array → O(n)
// Building result array → O(n)

// Total Time Complexity=O(n)+O(n)+O(n)=O(3n)=O(n)

// 2. Space Complexity The function creates three arrays of size n:
// left[] → Size n
// right[] → Size n
// result[] → Size n

// Total Space Complexity=O(n)+O(n)+O(n)=O(3n)=O(n)