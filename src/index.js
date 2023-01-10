import './style.css';
import Project from './modules/projectClass'
import Task from './modules/taskClass'
import refreshTaskGrid from './modules/refreshTaskGrid'
import refreshProjectGrid from './modules/refreshProjectGrid'
import openProjModal from './modules/openProjModal'
import openTaskModal from './modules/openTaskModal';
import saveProject from './modules/saveProject';
import loadProjects from './modules/loadProjects'

const _init = (() => {

    let allProjects = loadProjects()
    refreshProjectGrid(allProjects)
    saveProject(allProjects)
    let allTasks = allProjects.taskList[0]

    const allBtn = document.getElementById('allBtn')
    const todayBtn = document.getElementById('todayBtn')
    const weekBtn = document.getElementById('weekBtn')
    const addTaskBtn = document.getElementById('addTaskBtn')
    const addProjBtn = document.getElementById('addProjBtn')

    refreshTaskGrid(allProjects)
    
    allBtn.addEventListener('click',()=>{
        allProjects.changeCurrentProject(allTasks)
        refreshTaskGrid(allProjects)
    })
    todayBtn.addEventListener('click',()=>{
        let todayTasks = new Project("Today's Tasks",allTasks.filterToday())
        allProjects.changeCurrentProject(todayTasks)
        refreshTaskGrid(allProjects)
    })
    weekBtn.addEventListener('click',()=>{
        let weekTasks = new Project("This Week's Tasks",allTasks.filterWeek())
        allProjects.changeCurrentProject(weekTasks)
        refreshTaskGrid(allProjects)
    })

    addTaskBtn.addEventListener('click',()=>{
        openTaskModal(allProjects)
    })
    addProjBtn.addEventListener('click',()=>{
        openProjModal(allProjects)
    })

})();