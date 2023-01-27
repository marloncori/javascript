
const recursiveDepthFirst = (graph, source) => {
    console.log(source)
    for(const neighbour of graph[source]){
       recursiveDepthFirst(graph, neighbour)
    }
 }

const sample_graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

recursiveDepthFirst (
       graph = sample_graph, source = 'a'
)  // abdfce
