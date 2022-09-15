
process.stdin.on('readable', () => {
    const buffer = process.stdin.read()
    if(buffer != null){
        console.log('Got: ')
        processs.stdout.write(buffer.toString())
    }
})

// run with echo ' some text ' | node consume_readable.js

