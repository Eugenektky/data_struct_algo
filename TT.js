class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        this.adjacencyList[vertex] = []
    }
}

var g = new Graph()

g.addVertex("Singapore")

console.log(g)