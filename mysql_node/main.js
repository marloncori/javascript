const Promise = require('bluebird')
const AppDAO = require('./data-access-object')
const ProjectRepository = require('./project-repository')
const TaskRepository = require('./task-repository')

const main = () => {
    const params = "localhost marlon_cpp Mc04889921% todo_list"
    const dao = new AppDAO(params)
    const blogProjectData = { name: 'Write Node.js - SQLite Tutorial' }
    const projectRepo = new ProjectRepository(dao)
    const taskRepo = new TaskRepository(dao)
    let projectId = 0

    projectRepo.createTable()
        .then( () => taskRepo.createTable())
         .then( () => projectRepo(blogProjectData.name))
           .then( (data) => {
            projectId = data.id
            const tasks = [
                {
                    name: 'Outline',
                    description: 'High level overview of sections',
                    isComplete: 1,
                    projectId
                  },
                  {
                    name: 'Write',
                    description: 'Write article contents and code examples',
                    isComplete: 0,
                    projectId
                  }
            ]
            return Promise.all(tasks.map((task) => {
                const { name, description, isComplete, projectId } = task
                return taskRepo.create(name, description, isComplete, projectId)
            }))
        })
        .then( () => projectRepo.getById(projectId))
          .then( (project) => {
            console.log(`\nRetreived project from database`)
            console.log(`project id = ${project.id}`)
            console.log(`project name = ${project.name}`)
            return taskRepo.getTasks(project.id)
          })
          .then( (tasks) => {
            console.log('\nRetrieved project tasks from database')
            return new Promise((resolve, reject) => {
              tasks.forEach((task) => {
                console.log(`task id = ${task.id}`)
                console.log(`task name = ${task.name}`)
                console.log(`task description = ${task.description}`)
                console.log(`task isComplete = ${task.isComplete}`)
                console.log(`task projectId = ${task.projectId}`)
              })
            })
            resolve('success')
          }) 
          .catch((err) => {
            console.log('Error: ')
            console.log(JSON.stringify(err))
          })
}

if(typeof require !== 'undefined' && require.main === module) {
    try{
        main()
    }
    catch(err){
        console.log('Error caught: ')
        console.log(JSON.stringify(err))
    }
}