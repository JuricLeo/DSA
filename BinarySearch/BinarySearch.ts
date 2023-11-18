function search(nums: number[], target: number): number {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    let midpoint = Math.floor((first + last) / 2);

    if (target < nums[midpoint]) {
      last = midpoint - 1;
    } else if (target > nums[midpoint]) {
      first = midpoint + 1;
    } else {
      return midpoint;
    }
  }

  return -1;
}
