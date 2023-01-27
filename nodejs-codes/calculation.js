//this way of importing is called 'destructure'
const {add, subt, mult, div, mod, setX, setY} = require('./math')
const equals = require('./print')

setX(7), setY(9)
equals('Calculation 1 --> 7 + 9 = ' + add())
equals('Calculation 2 --> 7 - 9 = ' + subt())
equals('Calculation 3 --> 7 * 9 = ' + mult())
equals('Calculation 4 --> 9 / 7 = ' + div())

setX(27), setY(9)
equals('Calculation 5 --> 27 % 9 = ' + mod())

