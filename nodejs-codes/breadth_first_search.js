const print = require('./print')

const breadthFirst = (graph, source) => {
    const queue = [source]
    while(queue.length > 0) {
        let current = queue.shift()
        print("\t\t" + current)
        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
}

const my_graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

breadthFirst(
    graph = my_graph, source = 'a'
) //acbedf