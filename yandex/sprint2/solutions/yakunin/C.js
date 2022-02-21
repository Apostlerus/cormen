// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function solution(node, idx) {
    let current = 0;
    let currentNode = node;
    let previous = null;
    while (currentNode) {
        if (current === idx) {
            if (!previous) {
                return node.next;
            }
            previous.next = currentNode.next
            return node;
        }
        previous = currentNode;
        currentNode = currentNode.next;
        current++;
    }
    return node
}

function printNode(node) {
    while(node) {
        console.log(node.value)
        node = node.next
    }
}

function test() {
    var node3 = new Node("node3");
    var node2 = new Node("node2", node3);
    var node1 = new Node("node1", node2);
    var node0 = new Node("node0", node1);
    var newHead = solution(node0, 0);
    printNode(newHead)
    // result is node0 -> node2 -> node3
}

// test()