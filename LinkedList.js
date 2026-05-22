import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }

    let currentNode = this.headNode;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.headNode;

    this.headNode = newNode;
  }

  size() {
    let count = 0;

    let currentNode = this.headNode;

    while (currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }

    return count;
  }

  head() {
    return this.headNode?.value;
  }

  tail() {
    if (this.headNode === null) {
      return undefined;
    }

    let currentNode = this.headNode;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  at(index) {
    if (index < 0) {
      return undefined;
    }

    let currentNode = this.headNode;

    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentIndex === index) {
        return currentNode.value;
      }

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return undefined;
  }

  pop() {
    if (this.headNode === null) {
      return undefined;
    }

    const removedValue = this.headNode.value;

    this.headNode = this.headNode.nextNode;

    return removedValue;
  }

  insertAt(index, ...values) {
    const listSize = this.size();

    if (index < 0 || index > listSize) {
      throw new RangeError("Index out of bounds");
    }

    if (values.length === 0) {
      return;
    }

    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }

      return;
    }

    let previousNode = this.headNode;

    for (let i = 0; i < index - 1; i++) {
      previousNode = previousNode.nextNode;
    }

    let nextNode = previousNode.nextNode;

    values.forEach((value) => {
      const newNode = new Node(value);

      previousNode.nextNode = newNode;
      previousNode = newNode;
    });

    previousNode.nextNode = nextNode;
  }

  removeAt(index) {
    const listSize = this.size();

    if (index < 0 || index >= listSize) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      return this.pop();
    }

    let previousNode = this.headNode;

    for (let i = 0; i < index - 1; i++) {
      previousNode = previousNode.nextNode;
    }

    const removedNode = previousNode.nextNode;

    previousNode.nextNode = removedNode.nextNode;

    return removedNode.value;
  }

  contains(value) {
    let currentNode = this.headNode;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let currentNode = this.headNode;

    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return -1;
  }

  toString() {
    if (this.headNode === null) {
      return "";
    }

    let currentNode = this.headNode;

    let result = "";

    while (currentNode !== null) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    result += "null";

    return result;
  }
}

export default LinkedList;
