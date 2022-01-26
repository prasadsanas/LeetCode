var searchInsert = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (target > nums[nums.length - 1]) {
      return nums.length;
    }
    if (target <= nums[i]) {
      return i;
    }
  }
};

var nums = [1, 3, 5, 6];
var target = 7;

console.log(searchInsert(nums, target));
