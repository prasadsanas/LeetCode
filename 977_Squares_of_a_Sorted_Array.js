var sortedSquares = function (nums) {
  var output = [];
  for (var i = 0; i < nums.length; i++) {
    output.push(nums[i] * nums[i]);
  }
  output.sort(function (a, b) {
    return a - b;
  });
  return output;
};

nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
