//

class LRUCache {
  private capacity: number;
  private map: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const val = this.map.get(key)!;
      this.map.delete(key);
      this.map.set(key, val);
      return val;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    if (this.get(key) === -1) {
      if (this.capacity === this.map.size) {
        const firstKey = this.map.keys().next().value;
        if (firstKey !== undefined) {
          this.map.delete(firstKey);
        }
      }
    }

    this.map.set(key, value);
  }
}

