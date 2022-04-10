const { logEvents } = require('../middleware/logEvents')

const data = {
    employees: require('../models/employees.json'),
    setEmployee: (data) => {
        this.employees = data
    }
}

const getAllEmployees = (req, res) => {
    res.json(data.employees)
    const line = "\n\t###########################################\n"
    logEvents(`${line}\t   EMPLOYEE DATABASE LOG \n\t --> All registered employees: \n\t ${JSON.stringify(data.employees)} \n\t   <<< end of log >>>${line}`, 'employeesDataLog.txt')
}

const createNewEmployee = (req, res) => {
    const newEmployee = {
        id: data.employees[data.employees.length - 1].id + 1 || 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    }
    if(!newEmployee.firstname || !newEmployee.lastname || !newEmployee.email) {
        return res.status(400).json({ 'message': '\n\t -> First name, \n\t -> last name and -> \n\t e-mail address \nt\tare required information!'})
        //400 means "data has not been retrieved"
    }
    const line = "\n\t:::::::::::::::::::::::::::::::::::::::::\n"
    logEvents(`${line}\t   EMPLOYEE REGISTER LOG \n\t --> Newly added empolyee:\n\t  id: ${JSON.stringify(newEmployee.id)}\n\t  first_name: ${JSON.stringify(newEmployee.firstname)}\n\t  last_name: ${JSON.stringify(newEmployee.lastname)}\n\t  email: ${JSON.stringify(newEmployee.email)} \n\t   <<< end of log >>>${line}`, 'employeesPostLog.txt')

    data.setEmployee([...data.employees, newEmployee])
    res.status(201).json(data.employees)
    // 201 means "created new record"
}

const updateEmployee = (req, res) => {
    const employee = data.employees.find(
        emp => emp.id === parseInt(req.body.id))
    if(!employee) {
        return res.status(400).json({ 'message': `\n\t!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\t [ WARNING ] => Unfortunately employee ID ${req.body.id} has not been found.\n\t!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\t`})
         //400 means "data has not been retrieved"
    }
    if(req.body.firstname) employee.firstname = req.body.firstname
    if(req.body.lastname) employee.lastname = req.body.lastname
    if(req.body.email) employee.email = req.body.email

    const line = "\n\t...........................................\n"
    logEvents(`${line}\t   EMPLOYEE UPDATE LOG \n\t --> Last editted empolyee:\n\t  id: ${JSON.stringify(employee.id)}\n\t  first_name: ${JSON.stringify(employee.firstname)}\n\t  last_name: ${JSON.stringify(employee.lastname)}\n\t  email: ${JSON.stringify(employee.email)} \n\t   <<< end of log >>>${line}`, 'employeesPutLog.txt')

    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id))
    const unsortedArray = [...filteredArray, employee]
    data.setEmployee(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    res.json(data.employees)
}

const deleteEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id))
    if(!employee) {
        return res.status(400).json({ 'message': `\n\t!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\t [ WARNING ] => Unfortunately employee ID ${req.body.id} has not been found.\n\t!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\t`})
         //400 means "data has not been retrieved"
    }
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id))
    const line = "\n\t^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n"
    logEvents(`${line}\t   EMPLOYEE DELETE LOG \n\t --> Recently deleted empolyee:\n\t  id: ${JSON.stringify(employee.id)}\n\t  first_name: ${JSON.stringify(employee.firstname)}\n\t  last_name: ${JSON.stringify(employee.lastname)}\n\t  email: ${JSON.stringify(employee.email)} \n\t   <<< end of log >>>${line}`, 'employeesDeleteLog.txt')
    data.setEmployee([...filteredArray])
    res.json(data.employees)
}

const getEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id))
    if(!employee) {
        return res.status(400).json({ 'message': `\n\t!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\t [ WARNING ] => Unfortunately employee ID ${req.body.id} has not been found.\n\t!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\t`})
         //400 means "data has not been retrieved"
    }
    const line = "\n\t%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n"
    logEvents(`${line}\t   EMPLOYEE CHECKING LOG \n\t  ==> Last viewed empolyee:\n\t  id: ${JSON.stringify(employee.id)}\n\t  first_name: ${JSON.stringify(employee.firstname)}\n\t  last_name: ${JSON.stringify(employee.lastname)}\n\t  email: ${JSON.stringify(employee.email)} \n\t   <<< end of log >>>${line}`, 'employeesGetLog.txt')
    res.json(employee)
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}