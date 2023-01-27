const color = require('./colors.js')

const print = (arg, cl, ident=false, line=0) => {
    const ln = "\n=================================================\n"
    switch(cl){
        case 'r':
            cl = color.r
            break
        case 'b':
            cl = color.b
            break
        case 'y':
            cl = color.y
            break
        case 'g':
            cl = color.g
            break
        case 'c':
            cl = color.c
            break
        case 'p':
            cl = color.p
            break
        case 'w':
            cl = color.w
            break
    }
    if(ident && line === 0)
        console.log("\n\t" + cl + arg + color.f + "\n")
    else if(!ident && line === 1)
       console.log(ln + cl + arg + color.f + ln)
    else if(ident && line === 1)
        console.log("\t" + ln + "\t" + cl + arg + color.f + "\t" + ln)
    else 
        console.log("\n" + cl + arg + color.f + "\n")
}

module.exports = print