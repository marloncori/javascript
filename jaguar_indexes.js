
const JaguarDb = require('./lib/jaguarDb').JaguarDb
const options = {logging: true}
const db = new JaguarDb(options)

db.connect('./data', (err) => {
  if(err) {
    console.log('Could not connect: ' + err)
    return
  }

  console.log('Connected!')
  db.ensureIndexSync('title')

  const data = {title: 'hello', content: 'blah blah blah', insertedOn: new Date()}
  db.insert(data, (err, insertedData) => {

    if(err) {
      console.log('ERROR: ' + err)
      return
    }

    console.log('Inserted')
    console.dir(insertedData)

    // Query by a field in the index
    let query = {title: 'hello'}
    let fields = {title: 1}
    db.find(query, fields, (err, docs) => {
      if(err) {
        console.log('ERROR: ' + err)
        return
      }
       console.log('%s documents found', docs.length)
       for(i=0; i<docs.length; i++) {
         console.dir(docs[i])
       }
    })

  })
})
