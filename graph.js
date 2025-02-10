// class graph{
//     constructor(){
//         this.graph = {}
//     }
//     add(vertice){
//         if(!this.graph[vertice]){
//             this.graph[vertice] = []
//         }
//     }

//     addEdge(vertice1,vertice2){
//         if(this.graph[vertice1]&&this.graph[vertice2]){
//             this.graph[vertice1].push(vertice2)
//             this.graph[vertice2].push(vertice1)
//         }
//     }

//     display(){
//         for(let data in this.graph){
//             console.log(data +':'+ this.graph[data]);
//         }
//     }

//     dfs(strv,visited = new Set()){
//         if(!visited.has(strv)){
//             visited.add(strv)
//             console.log(strv);
//             for(let nighbour of this.graph[strv]){
//                 this.dfs(nighbour,visited)
//             }
//         }
//     }

// }

// let h1 = new graph()
// h1.add(1)
// h1.add(8)
// h1.add(3)
// h1.add(9)
// h1.add(5)

// h1.addEdge(1,8)
// h1.addEdge(9,5)
// h1.addEdge(3,8)
// h1.addEdge(9,1)

// h1.display()
// console.log('================');
// h1.dfs(1)

class graph{
    constructor(){
        this.graph = {}
    }

    add(vertice){
        if(!this.graph[vertice]){
            this.graph[vertice] = []
        }
    }

    addEdge(vertice1,vertice2){
        if(this.graph[vertice1] && this.graph[vertice2]){
            this.graph[vertice1].push(vertice2)
            this.graph[vertice2].push(vertice1)
        }
    }

    display(){
        for(let data in this.graph){
            console.log(data + '[' + this.graph[data]+']');
        }
    }

    dfs(start,visited = new Set()){
        if(!visited.has(start)){
            visited.add(start)
            console.log(start);
            for(let next of this.graph[start]){
                this.dfs(next,visited)
            }
        }
    }

    bfs(start,visited = new Set()){
        let queue = [start]
        if(!visited.has(start)){
            visited.add(start)
            
            while(queue.length>0){
                let vertex = queue.shift()
                console.log(vertex);

                for(let nbr of this.graph[vertex]){
                    if(!visited.has(nbr)){
                        visited.add(nbr)
                        queue.push(nbr)
                    }
                }
            }
        }
    }

}

let h1 = new graph()
h1.add(1)
h1.add(5)
h1.add(3)
h1.add(3)
h1.add(9)

h1.addEdge(1,5)
h1.addEdge(3,9)
h1.addEdge(5,3)

h1.display()
console.log('=========================');
h1.dfs(1)
console.log('=========================');
h1.bfs(1)