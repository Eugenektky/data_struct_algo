class PriorityQueue {
    constructor () {
        this.value = []
    }

    enqueue(element, priority){
        let newNode = new Node(element, priority)
        this.value.push(newNode)
        this.bubbleUp()
    }
    bubbleUp(){
        var idx = this.value.length - 1
        const element = this.value[idx]
        while(idx > 0){
            var parentIdx = Math.floor((idx - 1)/2)
            var parent = this.value[parentIdx]
            if(parent.priority <= element.priority){
                this.value[parentIdx] = element
                this.value[idx] = parent
                idx = parentIdx
            } else {
                break
            }
        }
    }
    dequeue(){
        const max = this.value[0]
        const end = this.value.pop()
        if(this.value.length > 0){
            this.value[0] = end
            this.sinkDown()
        }
        return max
    }
    sinkDown(){
        let idx = 0
        const length = this.value.length
        const newMax = this.value[idx]
        while(true){
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null;
            
            if(leftChildIdx < length){
                leftChild = this.value[leftChildIdx]
                if(leftChild.priority > newMax.priority){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.value[rightChildIdx]
                if(
                    (swap === null && rightChild.priority > newMax.priority) || 
                    (swap !== null && rightChild.priority > leftChild.priority)
                ){
                    swap = rightChildIdx
                }
            }

            if(swap === null){
                break
            }

            this.value[idx] = this.value[swap]
            this.value[swap] = newMax
            idx = swap
        }
    }
}

class Node {
    constructor(element, priority){
        this.element = element
        this.priority = priority
    }
}

var heap = new PriorityQueue()
heap.enqueue("high fever", 2)
heap.enqueue("accident", 1)
heap.enqueue("mild stomachache", 5)


console.log(heap)
console.log(heap.dequeue())
console.log(heap)