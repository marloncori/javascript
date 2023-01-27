const { runMain } = require('module')
const bot = require('./car')

bot.setName('RM-347')
bot.setWheels(3)
bot.setMaker('Marlon Couto')
bot.setModel('Autonomous deliverer')
bot.setYear(2022)
bot.setPrice(3500)
bot.setSpeed(255)

bot.show()

const cmds = ['a', 'b', 'f', 'f', 'r', 'f', 'l', 'b', 's', 'r', 'f', 'f', 's', 'c']

const delay = (time) => {
    return new Promise(r => setTimeout(r, time));
}

const rosrun = async () => {
    for (const cmd of cmds) {
        bot.move(cmd, 4)
        await Promise.all([delay(2000), delay(2000)]);
    }
}

try {
    rosrun();
} catch(error) {
    console.error(error)
} 
  console.log("\n\t Program has been successfully executed!")


