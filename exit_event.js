
process .on('exit', (code) => {
    console.log(' Exiting from program with code: ', code)
})

process.exit(1)