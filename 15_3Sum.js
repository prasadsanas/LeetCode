var threeSum = function (nums) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      for (var k = 0; k < nums.length; k++) {
        var output = [];
        if (i != j && i != k && j != k && nums[i] + nums[j] + nums[k] == 0) {
          output.push(nums[i]);
          output.push(nums[j]);
          output.push(nums[k]);
          result.push(output);
        }
      }
    }
  }
};
