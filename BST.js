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
}

var tree = new BST()

tree.insert(10)
tree.insert(11)
tree.insert(9)
console.log(tree.find(111))