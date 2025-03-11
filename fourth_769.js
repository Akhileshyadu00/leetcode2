/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let l = arr.length;
    let maxElem = 0;
    let chunk = 0;
  
    for(let i=0; i<l; i++) {
      maxElem = Math.max(maxElem, arr[i]);
  
      if(maxElem === i) {
          chunk ++;
      }
    }  
    return chunk;
  };

//https://leetcode.com/problems/max-chunks-to-make-sorted/submissions/1570013473/
  
// Time Complexity--> The loop runs through the array once → O(n)
// Math.max() operation is O(1)
// Total Time Complexity=O(n)

// Space Complexity
// maxElem and chunk are constant extra variables → O(1)
// No additional data structures used
// Total Space Complexity=O(1)