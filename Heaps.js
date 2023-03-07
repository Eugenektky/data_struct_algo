class MaxBinaryHeap {
    constructor () {
        this.value = []
    }

    insert(element){
       this.value.push(element)
       this.bubbleUp()
       
    }
    bubbleUp(){
        var idx = this.value.length - 1
        const element = this.value[idx]
        while(idx > 0){
            var parentIdx = Math.floor((idx - 1)/2)
            var parent = this.value[parentIdx]
            if(this.value[parentIdx]<element){
                this.value[parentIdx] = element
                this.value[idx] = parent
                idx = parentIdx
            } else {
                break
            }
        }
    }
    extractMax(){
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
                if(leftChild > newMax){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.value[rightChildIdx]
                if(
                    (swap === null && rightChild > newMax) || 
                    (swap !== null && rightChild > leftChild)
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

var heap = new MaxBinaryHeap()

heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)

//change

console.log(heap)
console.log(heap.pop())


let heap = new Heap()

heap.insert(5)
heap.insert(1)
heap.insert(4)

