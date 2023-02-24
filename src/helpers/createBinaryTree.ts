class TreeNode {
  value: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(item: number) {
    this.value = item
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  root: TreeNode | null

  constructor() {
    this.root = null  //initial tree
  }

  addItem(item: number) {
    const newNode = new TreeNode(item)
    if (this.root === null) {
      this.root = newNode   // initial tree root
    } else {
      this._addItem(this.root, newNode)  // add new node to tree
    }
  }

  _addItem(currentNode: TreeNode, newNode: TreeNode) {

    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode
      } else {
        this._addItem(currentNode.left, newNode)
      }
    }

    if (newNode.value > currentNode.value) {
      if (currentNode.right === null) {
        currentNode.right = newNode
      } else {
        this._addItem(currentNode.right, newNode)
      }
    }

    if (newNode.value === currentNode.value) {
      console.log('ups! Duplicate((')
    }
  }
}

export default BinaryTree