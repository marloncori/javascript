
process.on('uncaughtException', (err) => {
    console.log('Caught exception: ', err)
    console.log(' Stack: ', err.stack)
    proccess.exit(1)
})

console.log('This will not run')

