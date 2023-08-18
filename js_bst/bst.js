class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  isLeaf() {
    return !this.left && !this.right;
  }

  isOneBranch() {
    return this.left === null || this.right === null;
  }

  isTwoBranch() {
    return this.left && this.right;
  }

  getBranch() {
    return this.left ? this.left : this.right;
  }
}

class Tree {
  constructor(arr, root = null) {
    var uniqueSorted = [...new Set(arr)].sort((a, b) => {
      return a - b;
    });
    this.root = this.buildTree(uniqueSorted);
  }

  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) {
      return null;
    }

    var arrMid = Math.floor((start + end) / 2);

    var root = new Node(arr[arrMid]);

    root.left = this.buildTree(arr, start, arrMid - 1);
    root.right = this.buildTree(arr, arrMid + 1, end);

    return root;
  }

  insert(data, current = this.root) {
    if (current === null) {
      current = new Node(data, null, null);
      return current;
    }

    if (data < current.value) {
      current.left = this.insert(data, current.left);
    } else if (data > current.value) {
      current.right = this.insert(data, current.right);
    } else {
      console.log("value already exist in tree");
      return;
    }
    return current;
  }

  delete(data, current = this.root, previousNode = null) {
    if (current.value === data) {
      if (current.isLeaf()) {
        if (previousNode.value > current.value) {
          previousNode.left = null;
          return;
        } else {
          previousNode.right = null;
          return;
        }
      }
      if (current.isOneBranch()) {
        if (previousNode.value > current.value) {
          previousNode.left = current.getBranch();
          return;
        } else {
          previousNode.right = current.getBranch();
          return;
        }
      }
      if (current.isTwoBranch()) {
        var right_subtree_search = current.right;
        var replace = right_subtree_search;
        //search the lowest value in the right subtree
        while (right_subtree_search != null) {
          replace = right_subtree_search;
          right_subtree_search = right_subtree_search.left;
        }
        this.delete(replace.value, current, previousNode);
        current.value = replace.value;
      }
    } else if (current.value > data) {
      return this.delete(data, current.left, current);
    } else {
      return this.delete(data, current.right, current);
    }
  }

  find(data, current = this.root) {
    if (data === current.value) {
      return current;
    } else if (data > current.value) {
      return this.find(data, current.right);
    } else if (data < current.value) {
      return this.find(data, current.left);
    } else {
      console.log("value is not in the tree");
      return;
    }
  }

  levelOrder(
    f = (x) => {
      return x.value;
    },
    current = this.root
  ) {
    //breadth-first
    var queue = [];
    queue.push(current.left, current.right);
    var answer = [];
    answer.push(f(current));
    function helper(f, current, queue) {
      if (queue.length === 0) {
        return answer;
      } else {
        current = queue[0];
        current.left ? queue.push(current.left) : {};
        current.right ? queue.push(current.right) : {};
        queue.shift();
        answer.push(f(current));
        return helper(f, current, queue);
      }
    }
    return helper(f, current, queue);
  }

  inorder(
    f = (x) => {
      return x.value;
    },
    current = this.root,
    answer = []
  ) {
    function helper(f, current, answer) {
      if (current === null) {
        return;
      }
      helper(f, current.left, answer);
      answer.push(f(current));
      helper(f, current.right, answer);
    }
    helper(f, current, answer);
    return answer;
  }
  preorder(
    f = (x) => {
      return x.value;
    },
    current = this.root,
    answer = []
  ) {
    function helper(f, current, answer) {
      if (current === null) {
        return;
      }
      answer.push(f(current));
      helper(f, current.left, answer);
      helper(f, current.right, answer);
    }
    helper(f, current, answer);
    return answer;
  }
  postorder(
    f = (x) => {
      return x.value;
    },
    current = this.root,
    answer = []
  ) {
    function helper(f, current, answer) {
      if (current === null) {
        return;
      }
      helper(f, current.left, answer);
      helper(f, current.right, answer);
      answer.push(f(current));
    }
    helper(f, current, answer);
    return answer;
  }

  height(n, h = 0) {
    if (n === null) {
      return null;
    }
    if (n.isLeaf()) {
      return h;
    }
    var lheight = this.height(n.left, h++);
    var rheight = this.height(n.right, h++);

    return lheight > rheight ? lheight : rheight;
  }

  depth(n, d = 0, current = this.root) {
    // it's like find with a counter
    if (n === current) {
      return d;
    }
    if (n.value > current.value) {
      return this.depth(n, d + 1, current.right);
    } else if (n.value < current.value) {
      return this.depth(n, d + 1, current.left);
    } else {
      console.log("node is not in the tree");
    }
  }

  isBalanced(current = this.root) {
    var nodes = this.inorder((x) => {
      return x;
    });
    for (let n of nodes) {
      var diff = Math.abs(this.height(n.left) - this.height(n.right));
      if (diff > 1) {
        console.log("tree is not balanced");
        return false;
      }
    }
    console.log("tree is balanced");
    return true;
  }

  rebalance() {
    var arr = this.inorder();
    this.root = this.buildTree(arr);
  }
}

arr1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
arr2 = [1, 2, 3, 4, 5, 6, 7];

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function test() {
  var testArr = [];
  for (i = 0; i < 30; i++) {
    testArr.push(Math.floor(Math.random() * 100));
  }
  var testTree = new Tree(testArr);

  testTree.isBalanced();

  console.log(` LEVELORDER : ${testTree.levelOrder()}\n
                PREORDER : ${testTree.preorder()}\n 
                POSTORDER: ${testTree.postorder()}\n
                INORDER : ${testTree.inorder()}\n`);

  testTree.insert(150);
  testTree.insert(125);
  testTree.insert(127);
  //adding a value higher than the highest unbalance the tree,
  //this.buildTree can't create a balanced tree in these conditions
  testTree.insert(116754);
  testTree.insert(11675443);
  testTree.insert(1167544332);

  testTree.insert(1768);

  console.log("should be inbalanced");
  testTree.isBalanced();

  testTree.rebalance();

  console.log("should be balanced");
  testTree.isBalanced();

  console.log(` LEVELORDER : ${testTree.levelOrder()}\n
  PREORDER : ${testTree.preorder()}\n 
  POSTORDER: ${testTree.postorder()}\n
  INORDER : ${testTree.inorder()}\n`);

  prettyPrint(testTree.root);
}

test();
