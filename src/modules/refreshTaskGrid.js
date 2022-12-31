import Project from './projectClass'
import createTaskContainer from './createTaskContainer'
import openAddTaskModal from './openAddTaskModal'

function refreshTaskGrid(project,allTasksProj){
    const taskGrid = document.getElementById('taskGrid')
    const taskTitle = document.getElementById('taskTitle')

    taskTitle.textContent = project.title
    // clears taskGrid
    while(taskGrid.firstChild){
        taskGrid.removeChild(taskGrid.firstChild)
    }
    taskGrid.innerHTML='';
    //fills taskGrid
    if(project.taskList.length > 0){
        project.getTaskList().forEach(task => {
            taskGrid.appendChild(createTaskContainer(task,project,allTasksProj))
        })
    }
}

export default refreshTaskGrid