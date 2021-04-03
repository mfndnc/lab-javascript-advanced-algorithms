class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl;
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    return this.queueControl.length == 0;
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    } else {
      return 'Queue Overflow';
    }
  }

  dequeue() {
    return !this.isEmpty() ? this.queueControl.pop() : 'Queue Underflow';
  }
}
