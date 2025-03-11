/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let i = 0;
    let j = 0;

    while(j<typed.length) {
        if(i<name.length && name[i] === typed[j]) {
            i++;
            j++;
        }else if(j>0 && typed[j] === typed[j-1]) {
            j++;
        }else {
            return false;
        }
    }
    return i === name.length;
};

//  https://leetcode.com/problems/long-pressed-name/submissions/1570022891/


//Time Complexity: O(n), where n is the length of the typed string. Each character in typed is processed once.
//Space Complexity: O(1), as the solution uses a fixed amount of extra space regardless of the input size.