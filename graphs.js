class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            function(v){
                return v !== v2
            }
        )
        this.adjacencyList[v2] = this.adjacencyList[v1].filter(
            function(v){
                return v !== v1
            }
        )
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
    }
}

var g = new Graph()

g.addVertex("Singapore")
g.addVertex("Tokyo")
g.addVertex("Malaysia")

g.addEdge("Singapore", "Malaysia")
g.addEdge("Tokyo", "Malaysia")
g.addEdge("Singapore", "Tokyo")
g.removeVertex("Singapore")
console.log(g)