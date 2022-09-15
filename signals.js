
setTimeout( () => {
    console.log(' 5 seconds passed. Exiting...')
}, 5000)

console.log(' Started. It will end after 5 seconds.')

process.on('SIGINT', () => {
    console.log('Got SIGINT. Ignoring...')
})