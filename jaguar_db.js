
const JaguarDb = require('jaguarDb').JaguarDb
const db = new JaguarDb()

db.connect('./data', (err, result) => {
    if(err){
        console.log(" It is not possible to connect to database.")
        return 
    }
    let query = {} //all records
    let fields = {} //all fields
    db.find(query, fields, (err, docs) => {
        if(err){
            console.log(" No data has been found in the database.")
            return 
        }
        console.log(" These are the found resuls: ", docs)
    })

})