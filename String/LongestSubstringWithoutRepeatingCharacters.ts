function lengthOfLongestSubstring(s: string): number {
  const map: string[] = [];
  let maxSize = 0;

  for (const c of s) {
    let charIndex = map.indexOf(c);

    if (charIndex >= 0) {
      map.splice(0, charIndex + 1);
    }

    map.push(c);
    maxSize = Math.max(maxSize, map.length);
  }

  return maxSize;
}

// abcabcbb
