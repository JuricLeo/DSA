// better space complexity
function sortColors(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
}

// better time complexity
function sortColors1(nums: number[]): void {
  const zero = nums.filter((x) => x == 0).length;
  const one = nums.filter((x) => x == 1).length;

  for (let i = 0; i < nums.length; i++) {
    if (i < zero) {
      nums[i] = 0;
    } else {
      if (i < one + zero) {
        nums[i] = 1;
      } else {
        nums[i] = 2;
      }
    }
  }
}
