var moveZeroes = function (nums) {
  // let outputArr = nums.filter(item => item != 0)
  // while(outputArr.length < nums.length){
  //     outputArr.push(0)
  // }
  // return outputArr

  let i = 0; // Pointer to track the position of the next non-zero element

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap using array destructuring
      i++;
    }
  }
};
