function longestPalindrome(s: string): number {
  let result = 0;
  const map = new Map<string, number>();

  for (const c of s) {
    let n: number | undefined = 0;
    if (map.has(c)) {
      n = map.get(c);
      if (n! % 2) {
        result += 2;
      }
    }
    map.set(c, n! + 1);
  }

  return s.length > result ? result + 1 : result;
}


