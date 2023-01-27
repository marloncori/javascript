const print = require('./print')

const gridTraveller = (height, width) => {
    const grid = Array(height + 1)
            .fill().map(() => Array(width + 1).fill(0))
    //base case
    grid[1][1] = 1

    for(let row = 0; row <= height; row++){
        for(let col = 0; col <= width; col++){
            const currentPosition = grid[row][col]
             let rightPosition = col + 1
             let downPosition = row + 1
            if(rightPosition <= width)
                // right neighbour 
                grid[row][rightPosition] += currentPosition
            if(downPosition <= height)
                //down neighbour 
                grid[downPosition][col] += currentPosition
        }
    }
  return grid[height][width]
}

let range = []
for(let i=1; i<15; i++){
    range.push(i)
}

for(const i of range){
    print(" Result of gridTraveller: " + gridTraveller(i, i+1), 'c', true)
}