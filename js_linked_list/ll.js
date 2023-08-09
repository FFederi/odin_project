class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(head = null, size = 0) {
    this.head = head;
    this.size = size;
  }

  list() {
    //prints all nodes in a list
    var current = this.head;
    if (!current) {
      console.log("LinkedList is empty");
    }
    while (current.nextNode) {
      console.log(current);
      current = current.nextNode;
    }
    //print last one
    console.log(current);
  }

  append(value) {
    var newNode = new Node(value, null);

    if (this.size === 0) {
      //if empty list
      this.head = newNode;
      this.size += 1;
    } else {
      //create reference to head node
      var current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      //current is now the last node
      current.nextNode = newNode;
      this.size += 1;
    }
  }

  sizem() {
    return this.size;
  }

  headm() {
    return this.head;
  }

  tailm() {
    var current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (this.size < index) {
      console.log("index is greater than list size");
      return;
    }

    var current = this.head;
    var searchIndex = 0;
    while (searchIndex < index) {
      current = current.nextNode;
      searchIndex++;
    }
    return current;
  }

  pop() {
    this.removeAt(this.size - 1);
  }

  contains(value, current = this.head) {
    // wrote this recursive
    if (current === null) {
      return false;
    }
    if (current.value === value) {
      return true;
    } else {
      return this.contains(value, current.nextNode);
    }
  }

  find(value, current = this.head, index = 0) {
    if (current === null) {
      return null;
    }
    if (current.value === value) {
      return index;
    } else {
      return this.find(value, current.nextNode, (index += 1));
    }
  }

  toString(current = this.head) {
    if (current === null) {
      return "null";
    }
    return `( ${current.value} ) -> ` + this.toString(current.nextNode);
  }

  insertAt(value, index) {
    if (this.size < index) {
      console.log("index is greater than list size");
      return;
    }

    var newNode = new Node(value, null);

    if (this.size === 0) {
      //if empty list
      this.head = newNode;
      this.size += 1;
    } else {
      //create reference to head node
      var current = this.head;
      var searchIndex = 0;
      var previousNode = null;
      while (searchIndex < index) {
        previousNode = current;
        current = current.nextNode;
        searchIndex++;
      }
      //current is the Node at index position before the insert
      newNode.nextNode = current;
      previousNode.nextNode = newNode;
      this.size += 1;
    }
  }

  removeAt(index) {
    if (this.size < index) {
      console.log("index is greater than list size");
      return;
    }

    if (this.size === 0) {
      console.log("list is empty");
      return;
    } else {
      //create reference to head node
      var current = this.head;
      var searchIndex = 0;
      var previousNode = null;
      while (searchIndex < index) {
        previousNode = current;
        current = current.nextNode;
        searchIndex++;
      }
      //current is the Node at index position before the removal
      previousNode.nextNode = current.nextNode;
      this.size -= 1;
    }
  }
}
var node3 = new Node("3", null);
var node2 = new Node("2", node3);
var node1 = new Node("1", node2);
var test_list = new LinkedList(node1, 3);

console.log(test_list.toString());
