import closeTaskModal from './closeTaskModal'
import createTask from './createTask'
import createTaskContainer from './createTaskContainer'
import updateLocal from './updateLocal'

function openTaskModal(allProjects,task,elementSpot){
    const taskGrid = document.getElementById('taskGrid')
    const addTaskBtn = document.getElementById('addTaskBtn')
    
    const addTaskForm = document.createElement('form')
    addTaskForm.classList.add('add-task-form')
    addTaskForm.id='addTaskForm'
    addTaskForm.reset()

    const topRow = document.createElement('div')
    topRow.classList.add('form-row')

    const title = document.createElement('input')
    title.classList.add('input','title')
    title.type ='text'
    title.id ='title'
    title.name ='title'
    title.required = true
    const date = document.createElement('input')
    date.classList.add('input')
    date.type = 'date'
    date.id = 'date'
    date.name = 'date'
    date.required = true
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('close-btn')
    closeBtn.id = 'closeBtn'
    closeBtn.type = 'reset'
    topRow.append(title,date,closeBtn)

    const description = document.createElement('textarea')
    description.classList.add('textarea','input')
    description.name = 'description'
    description.id = 'description'
    description.rows = 4
    description.cols = 70
    if(task){
        title.value =task.title
        date.value = task.date
        description.placeholder = task.description
    } else {
        title.placeholder ='Title'
        description.placeholder = 'e.g. make sure to use bleach for laundry'
    }


    const btmRow = document.createElement('div')
    btmRow.classList.add('form-row')

    const prioGroup = document.createElement('div')
    prioGroup.classList.add('prio-group')
    const prioTitle = document.createElement('h3')
    prioTitle.textContent = 'Priority:'
    const lowInput = document.createElement('input')
    lowInput.type = 'radio' 
    lowInput.id = 'low' 
    lowInput.name = 'priority' 
    lowInput.value = 'low'
    lowInput.required = true;
    const lowLabel = document.createElement('label')
    lowLabel.for = 'low'
    lowLabel.textContent = 'Low'
    const medInput = document.createElement('input')
    medInput.type = 'radio' 
    medInput.id = 'medium' 
    medInput.name = 'priority' 
    medInput.value = 'medium'
    const medLabel = document.createElement('label')
    medLabel.for = 'medium'
    medLabel.textContent = 'Medium'
    const highInput = document.createElement('input')
    highInput.type = 'radio' 
    highInput.id = 'high' 
    highInput.name = 'priority' 
    highInput.value = 'high'
    const highLabel = document.createElement('label')
    highLabel.for = 'high'
    highLabel.textContent = 'High'
    prioGroup.append(prioTitle,lowInput,lowLabel,medInput,medLabel,highInput,highLabel)

    const confirmBtn = document.createElement('button')
    confirmBtn.classList.add('btn')
    confirmBtn.textContent = 'Confirm'
    confirmBtn.id = 'confirmBtn'
    confirmBtn.type = 'submit'
    btmRow.append(prioGroup,confirmBtn)
    
    addTaskForm.append(topRow,description,btmRow)
    if(elementSpot){
        taskGrid.insertBefore(addTaskForm,elementSpot)
    }else{
        taskGrid.insertBefore(addTaskForm,addTaskBtn)
    }
    
    let project = allProjects.currentProject
    let allTasksProj = allProjects.getItem('All Tasks')
    closeBtn.addEventListener('click',()=>{
        if(task){
            taskGrid.insertBefore(createTaskContainer(task,allProjects),addTaskForm)
        }
        closeTaskModal()
    })
    confirmBtn.addEventListener('click',(e)=>{
        let currentTask = createTask(project)
        if(addTaskForm.reportValidity()){
            e.preventDefault()
            project.insert(currentTask, Array.prototype.indexOf.call(taskGrid.children, addTaskForm))
            taskGrid.insertBefore(createTaskContainer(currentTask,allProjects), addTaskForm)
        }
        if(project != allTasksProj){
            if(task){
                allTasksProj.remove(task)
            }
            allTasksProj.add(currentTask)
        } 
        if(task && task.project!=project){
            task.project.insert(createTask(task.project), task.project.taskList.indexOf(task))
        }
        closeTaskModal()
    })
    addTaskBtn.classList.add('disabled')
}

export default openTaskModal;