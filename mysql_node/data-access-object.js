const mysql = require('mysql')
const Promise = require('bluebird')

class AppDAO {
 
    constructor(connParams){

        this.params = connParams.split(' ')
        this.db = mysql.createConnection({
            host: params[0], 
            user: params[1],
            password: params[2],
            database: params[3]
        })

        this.db.connect( (err) => {
            if (err) {
                console.log('Could not connect to database: ', err)
              } else {
                console.log('Connected to database')
              }
        })
    }

    run(sql, params = []) {
        return new Promise( (resolve, reject) => {
            this.db.query(sql, params, (err, result) => {
                if(err){
                   console.log('Error running sql command: ' + sql)
                   console.log(err)
                   reject(err) 
                }
                else {
                   resolve({ id: this.lastID})
                }
            })
        })
    }

    get(sql, params = []) {
        return new Promise( (resolve, reject) => {
          this.db.run(sql, params, (err, result) => {
            if (err) {
              console.log('Error running sql: ' + sql)
              console.log(err)
              reject(err)
            } else {
              resolve(result)
            }
          })
        })
      }

      all(sql, params = []) {
        return new Promise((resolve, reject) => {
          this.db.run(sql, params, (err, rows) => {
            if (err) {
              console.log('Error running sql: ' + sql)
              console.log(err)
              reject(err)
            } else {
              resolve(rows)
            }
          })
        })
      }
}

module.exports = AppDAO 