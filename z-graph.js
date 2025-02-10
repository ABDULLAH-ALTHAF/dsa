class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.adjList = new Map();
    }

    addEdge(u, v) {
        if (!this.adjList.has(u)) this.adjList.set(u, []);
        if (!this.adjList.has(v)) this.adjList.set(v, []);
        this.adjList.get(u).push(v);
        this.adjList.get(v).push(u); 
    }

    isCyclicUtil(node, visited, parent) {
        visited[node] = true;

        for (let neighbor of this.adjList.get(node)) {
            if (!visited[neighbor]) {
                if (this.isCyclicUtil(neighbor, visited, node)) return true;
            } else if (neighbor !== parent) {
                return true;
            }
        }
        return false;
    }

    isCyclic() {
        let visited = {};

        for (let node of this.adjList.keys()) {
            if (!visited[node]) {
                if (this.isCyclicUtil(node, visited, -1)) return true;
            }
        }
        return false;
    }
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 0);

console.log(g.isCyclic());

//in a directed graph

// class Graph {
//     constructor(vertices) {
//         this.V = vertices;
//         this.adjList = new Map();
//     }

//     addEdge(u, v) {
//         if (!this.adjList.has(u)) this.adjList.set(u, []);
//         this.adjList.get(u).push(v);
//     }

//     isCyclicUtil(node, visited, recStack) {
//         if (!visited[node]) {
//             visited[node] = true;
//             recStack[node] = true;

//             for (let neighbor of this.adjList.get(node) || []) {
//                 if (!visited[neighbor] && this.isCyclicUtil(neighbor, visited, recStack)) {
//                     return true;
//                 } else if (recStack[neighbor]) {
//                     return true;
//                 }
//             }
//         }
//         recStack[node] = false; 
//         return false;
//     }

//     isCyclic() {
//         let visited = {};
//         let recStack = {};

//         for (let node of this.adjList.keys()) {
//             if (!visited[node]) {
//                 if (this.isCyclicUtil(node, visited, recStack)) return true;
//             }
//         }
//         return false;
//     }
// }


// let g = new Graph(4);
// g.addEdge(0, 1);
// g.addEdge(1, 2);
// g.addEdge(2, 0); 

// console.log(g.isCyclic());