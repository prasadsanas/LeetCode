var lengthOfLastWord = function (s) {
  var output = 0;
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      count++;
      output = count;
    } else {
      count = 0;
    }
  }
  return output;
};
