const express = require('express')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "marlon_cpp",
    password: "********",
    database: "company"
})

db.connect( (err) => {
    if(err){
        console.error(" Not possible to connect to database... Cause: " + err)
        return
    }
    console.log("Sucessfully connected to database.")
})

const app = express()
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE IF NOT EXISTS node_mysql"
    db.query(sql, (err) => {
        if(err){
            console.error(" Not possible to create database... Cause: " + err)
            return
        }
        res.send(' Database has been created!')
    })
})

// Create table

app.get("/createemployee", (req, res) => {

    let sql = "CREATE TABLE employee(id INT AUTO_INCREMENT,"+
               " name VARCHAR(255), position VARCHAR(255),"
               + " PRIMARY KEY(id))"
    db.query(sql, (err) => {
        if(err){
            console.error(" Not possible to create table... Cause: " + err)
            return
        }
        res.send(" Employee succesfully created.")
    })
})


app.get("/employee1", (req, res) => {
    let post = { name: "Jake Smith", designation: "Chief Executive Officer" }
    let sql = "INSERT INTO employee SET ?"
    let query = db.query(sql, post, (err) => {
      if (err) {
        console.error(" Not possible to insert data to table... Cause: " + err)
        return
      }
      res.send(" First employee has been added.")
    })
  })

  app.get("/updateemployee/:id", (req, res) => {
    let newName = "Marlon Ribeiro"
    let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err) => {
      if (err) {
        console.error(" Not possible to update data... Cause: " + err)
        return      
      }
      res.send(" Record succesfully updated!")
    })
})

app.get("/deleteemployee/:id", (req, res) => {
    let sql = `DELETE FROM employee WHERE id = ${req.params.id}`
    let query = db.query(sql, (err) => {  
      if (err) {
        console.error(" Not possible to delete from table... Cause: " + err)
        return
      }
      res.send("Employee successfully deleted")
    })
  })

  app.listen("3000", () => {
    console.log(" Server started on port 3000. \n   Visit:\n\thttp://127.0.0.1:3000");
  })