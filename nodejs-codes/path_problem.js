const print = require("./print")

const hasPath_breadthFirst = (graph, source, destination) => {
    const queue = [source]

    while(queue.length > 0){
       let current = queue.shift()
       console.log(current)

       if(current === destination){
           return true
       }
       for(let neighbor of graph[current]){
              queue.push(neighbor)
       }
    }
  return false  //there is no path betwee the source and target
}

const hasPath_depthFirst = (graph, source, destination) => {
    if(source === destination) return true

    for(let neighbor of graph[source]){
      if(hasPath_depthFirst(graph, neighbor, destination)) {
          return true
      }
    }
    return false   
}

const acyclic_graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

print(" Result: " + (hasPath_depthFirst(
    graph = acyclic_graph, source = 'f', destination = 'k')
    ).toString()
)

print(" Result 2: " + (hasPath_breadthFirst(
    graph = acyclic_graph, source = 'f', destination = 'k')
    ).toString()
)
