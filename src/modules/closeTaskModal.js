function closeTaskModal(){
    const taskGrid = document.getElementById('taskGrid')
    const addTaskForm = document.getElementById('addTaskForm')
    const addTaskBtn = document.getElementById('addTaskBtn')
    
    addTaskForm.innerHTML=''
    taskGrid.removeChild(addTaskForm)
    addTaskBtn.classList.remove('disabled')
}

export default closeTaskModal;