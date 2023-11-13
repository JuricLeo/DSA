// slow and takes more space

function isAnagram(s: string, t: string): boolean {
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  if (sortedS === sortedT) {
    return true;
  }

  return false;
}

// better, T: O(n+m), S: O(n)

function isAnagram1(s: string, t: string): boolean {
  if (!s.length || !t.length || s.length !== t.length) {
    return false;
  }

  const sCharMap = new Map<string, number>();

  for (const char of s) {
    const charCount = sCharMap.get(char);
    const newCharCount = charCount ? charCount + 1 : 1;
    sCharMap.set(char, newCharCount);
  }

  for (const char of t) {
    const freq = sCharMap.get(char);
    if (!freq) {
      return false;
    } else if (freq === 1) {
      sCharMap.delete(char);
    } else {
      sCharMap.set(char, freq - 1);
    }
  }

  return sCharMap.size === 0;
}
