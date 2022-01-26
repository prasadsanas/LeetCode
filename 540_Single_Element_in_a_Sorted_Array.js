/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (right + left) / 2;

    if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
      return nums[mid];
    }

    if (nums[mid] == nums[mid - 1]) {
      mid = mid - 1;
      if (mid % 2 == 0) {
        left = mid + 2;
      } else {
        right = mid - 1;
      }
    }

    if (nums[mid] == nums[mid + 1]) {
      if (mid % 2 == 0) {
        left = mid + 2;
      } else {
        right = mid - 1;
      }
    }
  }
};
