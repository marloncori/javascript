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
    logEvents(`${line}\t   EMPLOYEE DATABASE LOG \n\t --> All registered employess: \n\t ${data.employees} \n\t   <<< end of log >>>${line}`, 'employeesPostLog.txt')
}

const createNewEmployee = (req, res) => {
    res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "email": req.body.email
    })
    const line = "\n\t:::::::::::::::::::::::::::::::::::::::::\n"
    logEvents(`${line}\t   EMPLOYEE REGISTER LOG \n\t --> Newly added empolyee:\n\t  id: ${res.body.id}\n\t  first_name: ${res.body.firstname}\n\t  last_name: ${res.body.lastname}\n\t  email: ${res.body.email} \n\t   <<< end of log >>>${line}`, 'employeesPostLog.txt')
}

const updateEmployee = (req, res) => {
    res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "email": req.body.email
    })
 const line = "\n\t...........................................\n"
 logEvents(`${line}\t   EMPLOYEE UPDATE LOG \n\t --> Last editted empolyee:\n\t  id: ${res.body.id}\n\t  first_name: ${res.body.firstname}\n\t  last_name: ${res.body.lastname}\n\t  email: ${res.body.email} \n\t   <<< end of log >>>${line}`, 'employeesPutLog.txt')
}

const deleteEmployee = (req, res) => {
    res.json({
        "id": req.body.id
    })
    const line = "\n\t^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n"
    logEvents(`${line}\t   EMPLOYEE DELETE LOG \n\t --> Recently deleted empolyee:\n\t  id: ${res.body.id}\n\t   <<< end of log >>>${line}`, 'employeesDeleteLog.txt')    
}

const getEmployee = (req, res) => {
    res.json({
        "id": req.params.id
    })
    const line = "\n\t%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n"
    logEvents(`${line}\t   EMPLOYEE CHECKING LOG \n\t --> Last viewed empolyee:\n\t  id: ${res.body.id}\n\t  <<< end of log >>>${line}`, 'employeesGetLog.txt')
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}