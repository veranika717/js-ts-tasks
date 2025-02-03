export default class CustomCache<K, V> {
  private cache: Map<K, V>;
  private accessOrder: K[];
  private maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.cache = new Map<K, V>;
    this.accessOrder = [];
  }
  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      const index = this.accessOrder.indexOf(key);
      if (index !== -1) {
        this.accessOrder.splice(index, 1);
      }
    }
    else if (this.cache.size >= this.maxSize && this.accessOrder.length > 0) {
      const oldestKey = this.accessOrder[0];
      if (oldestKey !== undefined) {
        this.cache.delete(oldestKey);
        this.accessOrder.shift();
      }
    }
    this.cache.set(key, value);
    this.accessOrder.push(key);
  }
  get(key: K): V | undefined {
    const value = this.cache.get(key);
    
    if (value !== undefined) {
      const index = this.accessOrder.indexOf(key);
      if (index !== -1) {
        this.accessOrder.splice(index, 1);
        this.accessOrder.push(key);
      }
    }
    return value;
  }

  size(): number {
    return this.cache.size;
  }

  clear(): void {
    this.cache.clear();
    this.accessOrder = [];
  }
}