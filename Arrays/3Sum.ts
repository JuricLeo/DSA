function threeSum(nums: number[]): number[][] {
  const triplets: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      }
    }
  }

  return triplets;
}


