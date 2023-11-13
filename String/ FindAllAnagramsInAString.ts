//

function findAnagrams(s: string, p: string): number[] {
  const n = s.length;
  const k = p.length;

  const charMap = new Map();
  for (const c of p) {
    if (charMap.has(c)) {
      const val = charMap.get(c);
      charMap.set(c, val + 1);
    } else {
      charMap.set(c, 1);
    }
  }
  let count = charMap.size;

  let i = 0;
  let j = 0;

  let ans: number[] = [];

  while (j < s.length) {
    const char = s[j];

    if (charMap.has(char)) {
      const val = charMap.get(char);
      charMap.set(char, val - 1);
      if (charMap.get(char) === 0) {
        count--;
      }
    }

    const windowSize = j - i + 1;

    if (windowSize < p.length) {
      j++;
    } else if (windowSize === p.length) {
      if (count === 0) {
        ans.push(i);
      }
      const char = s[i];
      if (charMap.has(char)) {
        const val = charMap.get(char);
        charMap.set(char, val + 1);
        if (charMap.get(char) === 1) {
          count++;
        }
      }
      i++;
      j++;
    }
  }

  return ans;
}
