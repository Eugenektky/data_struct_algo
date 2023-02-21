class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null
    }
    insert(value){
        var newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        } else {
            var current = this.root
            while(true){
                if(current.value > value){
                    if(current.left === null){
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if(current.value < value){
                    if(current.right === null){
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
    find(value){
        if(this.root === null){
            return undefined
        } else {
            var current = this.root
            while(current && current !== value){
                if(current.value > value){
                    current = current.left
                } else if (current.value < value){
                    current = current.right
                } else {
                    return true
                }
            }
            return false
        }
    }
    BFS(){
        var node = this.root
        var data = []
        var queue = []
        queue.push(node)
        while(queue.length){
            node = queue.shift()
            data.push(node.value)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        return data
    }
    DFSPreOrder(){
        var data = []
        var current = this.root
        function traverse(node){
            data.push(node.value)
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(current)
        return data
    }
    DFSPostOrder(){
        var data = []
        var current = this.root
        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            data.push(node.value)
        }    
        traverse(current)
        return data
    }
    DFSInOrder(){
        var data = []
        var current = this.root
        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            data.push(node.value)
            if(node.right){
                traverse(node.right)
            }
        }    
        traverse(current)
        return data
    }
}

var tree = new BST()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

// console.log(tree)
console.log(tree.DFSInOrder())