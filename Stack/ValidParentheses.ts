// T: O(n)
// S: O(n)

function isValid(s: string): boolean {
  if (s.length < 2) {
    return false;
  }

  let openBrackets = ["(", "[", "{"];

  if (openBrackets.includes(s[s.length - 1])) {
    return false;
  }

  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (openBrackets.includes(s[i])) {
      stack.push(s[i]);
      continue;
    }

    const topChar = stack[stack.length - 1];

    if (
      (topChar === "(" && s[i] === ")") ||
      (topChar === "{" && s[i] === "}") ||
      (topChar === "[" && s[i] === "]")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return !stack.length;
}
