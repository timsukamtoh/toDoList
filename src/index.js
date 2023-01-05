import './style.css';
import Project from './modules/projectClass'
import Task from './modules/taskClass'
import refreshTaskGrid from './modules/refreshTaskGrid'
import openProjModal from './modules/openProjModal'
import openTaskModal from './modules/openTaskModal';

const _init = (() => {

    let allTasks = new Project('All Tasks',Array())
    let allProjects = new Project('All Projects',Array(),allTasks)
    let defaultTask = new Task('do laundry','2022-12-30','','high')
    allTasks.insert(defaultTask,0)
    allProjects.add(allTasks)

    const taskGrid = document.getElementById('taskGrid')
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