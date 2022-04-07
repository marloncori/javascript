const path = require('path')
const say = require('./print')
const cl = require('./colors')

let cmds = [1, 2, 3, 4, 0]

const show_info = (cmd) => {
    switch(cmd) {
        case 1:
            say('\n\t'+cl.b+path.dirname(__filename)+cl.f)
            break
        case 2:
            say('\n\t'+cl.g+path.basename(__filename)+cl.f)
            break
        case 3:
            say('\n\t'+cl.c+path.extname(__filename)+cl.f)
            break
        case 4:
            say('\n\t'+cl.p+path.parse(__filename)+cl.f)
            break
        default:
            say(cl.r+'\n\t WARNING: invalid command!'+cl.f)
            break
    }
}

const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

const run = async () => {
    for (const cmd of cmds) {
        show_info(cmd)
        await Promise.all([delay(1500), delay(1500)]);
    }
}

//main routine -----------------------------------------
 try {
     run()
 } catch(error) {
     console.error(error)
 }