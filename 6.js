//? Rotate
//? https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

// Gồm 3 bước:

// Đảo toàn bộ mảng.

// Đảo lại phần đầu (0 đến k - 1).

// Đảo lại phần còn lại (k đến cuối mảng).

var rotate = function (nums, k) {
    const n = nums.length;
    k = k % n; // Nếu k > n, lấy phần dư
    console.log(`📌 Bắt đầu: nums = [${nums}], k = ${k}`);

    // Helper: Đảo một đoạn trong mảng
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            console.log(`🔁 Đảo vị trí ${start} và ${end} => [${nums}]`);
            start++;
            end--;
        }
    }

    console.log("\n👉 Bước 1: Đảo toàn bộ mảng");
    reverse(0, n - 1);

    console.log("\n👉 Bước 2: Đảo phần đầu (0 đến k - 1)");
    reverse(0, k - 1);

    console.log("\n👉 Bước 3: Đảo phần còn lại (k đến cuối)");
    reverse(k, n - 1);

    console.log(`\n✅ Kết quả cuối: [${nums}]`);
};


rotate([1, 2, 3, 4, 5, 6, 7], 3)