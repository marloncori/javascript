const express = require('express')
const router = express.Router()
const employeeController = require('../../controllers/employeeController')

const data = {}
data.employees = require('../../models/employees.json')

router.route('/')
    .get(employeeController.getAllEmployees) // at this point I am not writing all the code for an API
    .post(employeeController.createNewEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee)

router.route('/:id')
    .get(employeeController.getEmployee)

module.exports = router