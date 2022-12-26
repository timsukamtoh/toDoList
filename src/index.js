import './style.css';
import Project from './modules/projectClass'
import Task from './modules/taskClass'
import { add } from 'date-fns'
import openAddTaskModal from './modules/openAddTaskModal'
import closeAddTaskModal from './modules/closeAddTaskModal'
// import createTask from './modules/createTask'

let allProjects = [];
let allTasks = new Project(allTasks,[])
allProjects.push(allTasks)

const addTaskBtn = document.getElementById('addTaskBtn')
const closeTaskBtn = document.createElement('button')
const addTaskForm = document.createElement('form')
const confirmBtn = document.createElement('button')

addTaskBtn.addEventListener('click',()=>{
    openAddTaskModal(addTaskForm,confirmBtn,closeTaskBtn)
    console.log('test')
})

closeTaskBtn.addEventListener('click',()=>{
    closeAddTaskModal(addTaskForm,addTaskBtn)
})

// confirmBtn.addEventListener('click',()=>{
//     let currentTask = createTask()
//     allTasks.push(currentTask)
    
// })