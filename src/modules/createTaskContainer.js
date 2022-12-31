import openEditTaskModal from './openEditTaskModal'

function createTaskContainer(task,project,allTasksProj){
    const taskGrid = document.getElementById('taskGrid')

    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task')
    const checkbox = document.createElement('input')
    checkbox.type='checkbox'
    const taskTitle = document.createElement('div')
    taskTitle.textContent = task.title
    const taskDate = document.createElement('div')
    taskDate.textContent = task.date
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')

    taskContainer.append(checkbox,taskTitle,taskDate,editBtn,deleteBtn)

    checkbox.addEventListener('click',()=>{
        if(checkbox.checked){
            checkbox.nextElementSibling.classList.add('completed')
            checkbox.nextElementSibling.nextElementSibling.classList.add('completed')
        } else {
            checkbox.nextElementSibling.classList.remove('completed')
            checkbox.nextElementSibling.nextElementSibling.classList.remove('completed')
        }
    })

    editBtn.addEventListener('click',()=>{
        openEditTaskModal(task,project,allTasksProj,taskContainer)
        taskGrid.removeChild(taskContainer)
    })
    deleteBtn.addEventListener('click',()=>{
        project.remove(task)
        taskGrid.removeChild(taskContainer)
    })



    return taskContainer
}

export default createTaskContainer;