
const depthFirstPrint = (graph, source) => {
    const stack = [source]
    while(stack.length > 0 ){
       let current = stack.pop()
       console.log(current)
       for(const neighbour of graph[current]){
            stack.push(neighbour)
       }
    }
 }

const sample_graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

depthFirstPrint (
       graph = sample_graph, source = 'a'
)  // abdfce

