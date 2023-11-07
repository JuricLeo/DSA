// T: O(n)

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }

    if (result < area) {
      result = area;
    }
  }

  return result;
}

const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(result);
