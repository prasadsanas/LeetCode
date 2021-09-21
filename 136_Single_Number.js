var singleNumber = function (nums) {
  let result = A[0];
  for (var i = 1; i < A.length; i++) {
    result = result ^ A[i];
  }
  return result;
};
