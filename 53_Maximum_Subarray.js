var maxSubArray = function (A) {
  var max = -Infinity;
  var sum = 0;
  for (var i = 0; i < A.length; i++) {
    sum = sum + A[i];
    if (max < sum) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
