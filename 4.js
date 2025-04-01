//? Remove Duplicates from Sorted Array II
//? https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length; // Trường hợp mảng có 0, 1, 2 phần tử thì giữ nguyên

    let j = 2; // bắt đầu từ index 2 vì 2 phần tử đầu tiên luôn hợp lệ -> j đã sẵn sàng để gán phần tử hợp lệ đầu tiên

    for (let i = 2; i < nums.length; i++) {
        console.log(`\n=== Vòng lặp i = ${i} ===`);
        console.log(`So sánh nums[i] = ${nums[i]} với nums[j - 2] = ${nums[j - 2]}`);

        if (nums[i] !== nums[j - 2]) {
            nums[j] = nums[i];
            j++;
            console.log(`✔ Khác => Gán nums[${j}] = ${nums[i]}`);
        } else {
            console.log(`✘ Giống => Bỏ qua`);
        }

        console.log("Hiện tại nums:", nums.slice(0, j).concat(nums.slice(j).fill("_")));
    }

    return j;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
