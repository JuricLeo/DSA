function isPalindrome(s: string): boolean {
  if (s.length === 0 || s.length === 1) {
    return true;
  }

  let cleanedS = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let left = 0;
  let right = cleanedS.length - 1;

  while (left <= right) {
    if (cleanedS[left] !== cleanedS[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}