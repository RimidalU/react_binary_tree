interface RawNodeDatum {
  name: string
  attributes?: Record<string, string | number | boolean>
  children: RawNodeDatum[]
}

export class TreeNode {
  value: number
  name: string
  children: RawNodeDatum[]
  left: TreeNode | null | undefined
  right: TreeNode | null | undefined

  constructor(item: number) {
    this.value = item
    this.name = item.toString(),
      this.children = [],
      this.left = null
    this.right = null
  }
}

class BinaryTree {
  root: TreeNode | undefined

  constructor() {
    this.root = undefined  //initial tree
  }

  addItem(item: number) {
    const newNode = new TreeNode(item)
    if (this.root === undefined) {
      this.root = newNode   // initial tree root
      return
    }
    this._addItem(this.root, newNode)  // add new node to tree
  }

  _addItem(currentNode: TreeNode, newNode: TreeNode) {

    if (newNode.value === currentNode.value) {
      return
    }

    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode
        currentNode.children = [newNode, ...currentNode.children]
      } else {
        this._addItem(currentNode.left!, newNode)
      }
    }

    if (newNode.value > currentNode.value) {
      if (currentNode.right === null) {
        currentNode.right = newNode
        currentNode.children = [...currentNode.children, newNode]
      } else {
        this._addItem(currentNode.right!, newNode)
      }
    }


  }

  getData() {
    return this.root
  }
}

export default BinaryTree