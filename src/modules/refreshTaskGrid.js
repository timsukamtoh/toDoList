import createTaskContainer from './createTaskContainer'

function refreshTaskGrid(allProjects){
    const taskGrid = document.getElementById('taskGrid')
    const projHeader = document.getElementById('projHeader')
    const addTaskBtn = document.getElementById('addTaskBtn')

    let project = allProjects.currentProject
    projHeader.textContent = project.title
    // clears taskGrid
    while(taskGrid.firstChild){
        taskGrid.removeChild(taskGrid.firstChild)
    }
    taskGrid.innerHTML='';
    //fills taskGrid
    if(project.taskList.length > 0){
        project.getTaskList().forEach(task => {
            taskGrid.appendChild(createTaskContainer(task,allProjects))
        })
    }
    addTaskBtn.classList.remove('disabled')
    taskGrid.append(addTaskBtn)
}

export default refreshTaskGrid