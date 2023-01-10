import Project from './projectClass'
import Task from './taskClass'
function loadProjects(){
    let allProjectsList = new Array()
    if(localStorage.getItem('All Projects')){
        JSON.parse(localStorage.getItem('All Projects')).forEach(project => {
            if(project.title == 'All Tasks'){
                allProjectsList.push(new Project(project.title, project.taskList))
            } else {
                allProjectsList.push(new Project(project.title, Array()))
            }
            
        });
    }
    let allProjects = new Project('All Projects',allProjectsList)
    let allTasks;
    if(allProjectsList.length == 0){
        allTasks = new Project('All Tasks',Array())
        allProjects.add(allTasks)
        allProjects.currentProject = allTasks
    } else {
        allProjects.currentProject = allTasks = allProjects.getItem('All Tasks')
    }

    allProjects.taskList.forEach(project => {
        if(project.title != 'All Tasks'){
            allTasks.taskList.forEach(task => {
                if(task.project == project.title){
                    project.add(task)
                }
            })
        }
    })
    
    
    return allProjects
}
export default loadProjects