
const MAX = 9999
let placesToVisit = 4

let nextDistance = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [20, 25, 30, 0]
]

const completedVisit = (1 << placesToVisit) - 1

let DP = new Array(16)
 for(let i = 0; i<DP.length; i++){
      DP[i] = new Array(4)
 }

const travelling_salesperson_problem = (mark, position) => {
  if(mark === completedVisit){
      console.log(nextDistance[position][0])
      return nextDistance[position][0]
  }
  if(DP[mark][position] != -1){
     console.log(DP[mark][position])
      return DP[mark][position]
  }
  // here we will try to go to every other places to take the 
  // minimum answer
  const answer = MAX
  for(let city=0; city<placesToVisit; city++){
      if((mark&(1<<city)) == 0){
          const newAnswer = nextDistance[position][city] 
          + travelling_salesperson_problem(mark|(1<<city), city)
          console.log(newAnswer)
          answer = Math.min(answer, newAnswer)
          console.log(answer)
      }
  }
  console.log(DP[mark][position])
  return DP[mark][position] = answer
}

const main = (func) => {
    for(let i=0; i<(1<<placesToVisit); i++){
        for(let j=0; j<placesToVisit; j++){
            DP[i][j] = -1
            console.log(DP[i][j])
        }
    }
    console.log(` The minimum distance \n you travelled is: ${func}`)
}

// try and solve the travelling salesperson problem
try{
    main(travelling_salesperson_problem(1,0))
}catch(error){
    console.error(error)
}
