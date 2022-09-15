const JaguarDb = require('./lib/jaguarDb').JaguarDb
const options = {logging: true}
const db = new JaguarDb(options)

db.connect('./data', (err) => {

  if(err) {
    console.log('Could not connect: ' + err)
    return
  }

  console.log('Connected!')

  const query = {title: 'hello world'};
  const fields = {_id: 1, title: 1};
  db.find(query, fields, (err, documents) => {
    if(err) {
      console.log('ERROR: ' + err)
      return
    }

    console.log('Found %s documents', documents.length)
    console.dir(documents)
  })

  const idToFind = 2;
  db.findById(idToFind, (err, document) => {
    if (err) {
      console.log('ERROR: ' + err)
      return
    }
    if (document == null) {
      console.log('Document %s was not found', idToFind)
      return
    }
    console.log('Found document id %s', idToFind)
    console.dir(document)
  })

})