//? Remove Element
//? https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

// TODO: Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// TODO: Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = function (nums, val) {
    let j = 0 // giu cac phan tu kh trung VAL -> j đã sẵn sàng để gán phần tử hợp lệ đầu tiên

    for (let i = 0; i < nums.length; i++) {
        console.log('')
        console.log('---START---')
        console.log('i index: ', i)
        if (nums[i] !== val) {
            console.log('j index: ', j)
            nums[j] = nums[i]
            j++
        }
        console.log('nums for 1', nums)
        console.log('---END----')
        console.log('')

    }

    // for (let i = j + 1; i < nums.length; i++) {
    //     nums[i] = -1;
    // }
    nums = nums.slice(0, j + 1)

    console.log('nums res', nums)
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
// Output: nums [0, 1, 3, 0, 4, -1, -1, -1]

// removeElement([3, 2, 2, 3], 3);
// Output: nums [2, 2, -1, -1]
