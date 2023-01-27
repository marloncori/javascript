const print = require('./print')

const howSumTab = (targetSum, numbers) => {
	// create a table for tabulation
	// default null assuming the target sum is not possible to get
	let table = Array(targetSum + 1).fill(null)
	// target sum 0 is possible with empty array
	table[0] = []
	// we iterate through the table
	for(let i = 0; i <= targetSum; i++) {
		// if the value is not null, it means the current target sum (index) is possible
		if(table[i] !== null) {
			for(let num of numbers) {
				// then the num later target sum is also possible
				table[i + num] = [...table[i], num]
			}
		}
	}
	return table[targetSum]
}

try {
	print(" 1. The result of howSumTab(7, [5, 3, 4, 7]): " + howSumTab(7, [5, 3, 4, 7]), 'c', 1)
    print(" 2. The result of howSumTab(8, [5, 3, 4, 7]): " + howSumTab(8, [5, 3, 4, 7]), 'r', 1)
	print(" 3. The result of howSumTab(50, [1, 10]): " + howSumTab(50, [1, 10]), 'b', 1)
    print(" 4. The result of howSumTab(300, [7, 14]): " + howSumTab(300, [7, 14]), 'g', true)
} catch(error) {
    console.log(error)
}