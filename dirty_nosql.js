
const Dirty = require('dirty')
const db = new Dirty('user.db')

db.on('load', () => {
    db.set('john', {eyes: 'blue'})
    console.log(`Added john, he has ${db.get('john').eyes} eyes.`)
    
    db.set('bob', {eyes: 'brown'}, () => {
        console.log('User bob is now saved on disk.')
    })

    db.forEach( (key, val) => {
        console.log(`Found key: ${key}, val: ${val}`);
    })
})

  db.on('drain', function() {
    console.log('All records are saved on disk now.');
 })

 db.on('write_close', function() {
    console.log(' Database file write stream closed.');
 })

 db.close()