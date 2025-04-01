//? Merge Sorted Array
//? https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
  
    console.log("Initial State:");
    console.log("nums1:", nums1);
    console.log("nums2:", nums2);
  
    while (p1 >= 0 && p2 >= 0) {
      console.log(`Comparing nums1[${p1}] = ${nums1[p1]} and nums2[${p2}] = ${nums2[p2]}`);
      if (nums1[p1] > nums2[p2]) {
        nums1[p] = nums1[p1];
        console.log(`Placing nums1[${p1}] at nums1[${p}]`);
        p1--;
      } else {
        nums1[p] = nums2[p2];
        console.log(`Placing nums2[${p2}] at nums1[${p}]`);
        p2--;
      }
      p--;
      console.log("Current nums1:", nums1);
    }
  
    // Nếu còn sót nums2 thì chép phần còn lại vào đầu nums1
    while (p2 >= 0) {
      console.log(`Copying leftover nums2[${p2}] = ${nums2[p2]} to nums1[${p}]`);
      nums1[p] = nums2[p2];
      p2--;
      p--;
      console.log("Current nums1:", nums1);
    }
  
    console.log("Final merged nums1:", nums1);
  }
  
  merge([1,2,3,0,0,0], 3, [2,5,6], 3)
  