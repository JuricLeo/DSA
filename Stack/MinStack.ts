class MinStack {
  private stack: { value: number; min: number }[];

  constructor() {
    this.stack = [];
  }

  push(value: number): void {
    const min = this.stack.length > 0 ? Math.min(this.getMin(), value) : value;

    this.stack.push({value, min})
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].value;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min;
  }
}
