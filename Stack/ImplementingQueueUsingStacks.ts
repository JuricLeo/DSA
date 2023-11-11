class MyQueue {
  private input: number[];
  private output: number[];

  constructor() {
    this.input = [];
    this.output = [];
  }

  push(x: number): void {
    this.input.push(x);
  }

  pop(): number {
    this.peek();
    return this.output.pop()!;
  }

  peek(): number {
    if (!this.output.length) {
      while (this.input.length) {
        this.output.push(this.input.pop()!);
      }
    }
    return this.output[this.output.length - 1];
  }

  empty(): boolean {
    return !this.input.length && !this.output.length;
  }
}

