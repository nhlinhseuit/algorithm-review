//? Majority Element
//? https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
    const hash = {}
    let flag = -1

    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1

        if (hash[num] > nums.length / 2) return num;
    }

    //? 1 dòng if kia thay cho đoạn code dưới

    // const keyList = Object.keys(hash)
    // const valueList = Object.values(hash)

    // for (let i = 0; i < keyList.length - 1; i++) {
    //     if (hash[keyList[i + 1]] > hash[keyList[i]]) flag = keyList[i + 1]
    // }

    // return flag

};

let res = majorityElement([2, 2, 1, 1, 1, 2, 2])
console.log('res', res)