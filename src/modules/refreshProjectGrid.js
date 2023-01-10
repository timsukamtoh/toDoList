import createProjContainer from './createProjContainer'
function refreshProjectGrid(allProjects){
    const projectGrid = document.getElementById('projectGrid')
    const addProjBtn = document.getElementById('addProjBtn')

    for(let i = 1; i < allProjects.taskList.length;i++){
        projectGrid.insertBefore(createProjContainer(allProjects.taskList[i],allProjects),addProjBtn)
    } 
    projectError.classList.remove('active')
}
export default refreshProjectGrid