function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}

// better time complexity:
function containsDuplicate1(nums: number[]): boolean {
  const uniqueSet = new Set<number>();

  for (const num of nums) {
    if (uniqueSet.has(num)) {
      return true;
    }

    uniqueSet.add(num);
  }

  return false;
}
