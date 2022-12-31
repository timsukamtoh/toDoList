import './style.css';
import {
    isToday,
    toDate,
    isThisWeek,
    isBefore,
    endOfToday,
    add,
    format,
  } from "date-fns";
import Project from './modules/projectClass'
import Task from './modules/taskClass'
import refreshTaskGrid from './modules/refreshTaskGrid'
import openAddTaskModal from './modules/openAddTaskModal';

const _init = (() => {

    let allProjects = [];
    let allTasks = new Project('All Tasks',Array())
    let defaultTask = new Task('do laundry','2022-12-30','','high')
    let currentProject = allTasks
    allTasks.insert(defaultTask,0)
    allProjects.push(allTasks)

    const taskGrid = document.getElementById('taskGrid')
    const allBtn = document.getElementById('allBtn')
    const todayBtn = document.getElementById('todayBtn')
    const weekBtn = document.getElementById('weekBtn')
    const addTaskBtn = document.getElementById('addTaskBtn')

    refreshTaskGrid(currentProject,allTasks)
    taskGrid.append(addTaskBtn)
    
    allBtn.addEventListener('click',()=>{
        currentProject = allTasks
        refreshTaskGrid(currentProject,allTasks)
        taskGrid.append(addTaskBtn)
    })

    todayBtn.addEventListener('click',()=>{
        let todayTasks = new Project("Today's Tasks",allTasks.filterToday())
        currentProject = todayTasks
        refreshTaskGrid(currentProject,allTasks)
        taskGrid.append(addTaskBtn)
    })
    weekBtn.addEventListener('click',()=>{
        let weekTasks = new Project("This Week's Tasks",allTasks.filterWeek())
        currentProject = weekTasks
        refreshTaskGrid(currentProject,allTasks)
        taskGrid.append(addTaskBtn)
    })

    addTaskBtn.addEventListener('click',()=>{
        openAddTaskModal(currentProject,allTasks,addTaskBtn)
    })
})();