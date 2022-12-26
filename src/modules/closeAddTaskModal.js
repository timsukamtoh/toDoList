function closeAddTaskModal(addTaskForm,addTaskBtn){
    const taskGrid = document.getElementById('taskGrid')
    
    addTaskForm.innerHTML=''
    taskGrid.removeChild(addTaskForm)
    taskGrid.appendChild(addTaskBtn)

}

export default closeAddTaskModal;