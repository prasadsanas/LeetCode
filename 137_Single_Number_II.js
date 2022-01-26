var singleNumber = function (nums) {
  var res = nums[0] ^ nums[1];
  for (var i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};

nums = [2, 2, 3, 2];
console.log(singleNumber(nums));
