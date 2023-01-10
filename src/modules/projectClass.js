import {
    isToday,
    isThisWeek,
    parseISO,
} from 'date-fns';
class Project {
    constructor(title,taskList,currentProject) { 
        this.title = title; 
        this.taskList = taskList;
        this.currentProject = currentProject
    }
    add(task){
        this.taskList.push(task)
    }
    insert(task,index){
        this.taskList.splice(index, 1, task)
    }
    remove(task){
        this.taskList = this.taskList.filter(eachTask => eachTask!=task);
    }
    filterToday(){
        let todayTasks = Array()
        todayTasks = this.taskList.filter(task => isToday(parseISO(task.date)))
        return todayTasks
    }
    filterWeek(){
        let weekTasks = Array()
        weekTasks = this.taskList.filter(task => isThisWeek(parseISO(task.date)))
        return weekTasks
    }
    changeCurrentProject(project){
        this.currentProject = project
    }
    getItem(projectTitle){
        return this.taskList.find(project => project.title==projectTitle)
    }
    getTaskList(){
        return this.taskList;
    }
}   
export default Project;