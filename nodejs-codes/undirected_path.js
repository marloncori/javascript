const print = require('./print')

const buildGraph = (edges) => {
    const graph = {}
    for(let edge of edges){
       const [a, b] = edge
       if(!(a in graph)) graph[a] = []
       if(!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

const undirected_path = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    console.log("  Your graph ==>\n\t")
    for(let a in graph){
        print(JSON.stringify(a))
    }
}

const edges_array = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

undirected_path(
    edges = edges_array, 
    nodeA = 'j',
    nodeB = 'm'
)



