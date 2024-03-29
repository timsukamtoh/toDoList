import refreshTaskGrid from './refreshTaskGrid'
import saveProject from './saveProject'
function createProjContainer(project,allProjects){
    const projectGrid = document.getElementById('projectGrid')

    const projectContainer = document.createElement('div')
    projectContainer.classList.add('project-container')
    const projLeft = document.createElement('button')
    projLeft.classList.add('project-left')
    const projIcon = document.createElement('div')
    projIcon.classList.add('proj-icon')   
    const projectTitle = document.createElement('div')
    projectTitle.textContent = project.title
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')

    projLeft.append(projIcon,projectTitle)
    projectContainer.append(projLeft,deleteBtn)

    let allTasksProj = allProjects.getItem('All Tasks')
    projLeft.addEventListener('click',()=>{
        allProjects.changeCurrentProject(project)
        refreshTaskGrid(allProjects)
    })
    deleteBtn.addEventListener('click', ()=>{
        project.taskList.forEach(task => {
            allTasksProj.remove(task)
            project.remove(task)
        });
        allProjects.changeCurrentProject(allTasksProj)
        refreshTaskGrid(allProjects)
        allProjects.remove(project)
        saveProject(allProjects)
        projectGrid.removeChild(projectContainer)
    })
    return projectContainer
}

export default createProjContainer