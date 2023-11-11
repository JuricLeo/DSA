// T: O(n)
// S: O(n)

function evalRPN(tokens: string[]): number {
  let stack: Array<string | number> = [];

  for (const c of tokens) {
    if (c === "+") {
      stack.push((stack.pop() as number) + (stack.pop() as number));
    } else if (c === "-") {
      let a = stack.pop() as number;
      let b = stack.pop() as number;
      stack.push(b - a);
    } else if (c === "*") {
      stack.push((stack.pop() as number) * (stack.pop() as number));
    } else if (c === "/") {
      let a = stack.pop() as number;
      let b = stack.pop() as number;
      stack.push(Math.trunc(b / a));
    } else {
      stack.push(parseInt(c));
    }
  }

  return stack[0] as number;
}
