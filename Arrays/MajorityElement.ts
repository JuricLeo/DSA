function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let freq = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      freq++;

      if (freq === Math.floor(nums.length / 2) + 1) {
        return nums[i];
      }
    }
  }

  return nums[0];
}

/* 
  function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
  }
  
  Ako je element koji je n/2 naš rezultat, znači da dok sortiramo listu da 
  će se taj element nalaziti na sredini liste.
*/
