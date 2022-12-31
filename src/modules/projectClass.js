import {
    isToday,
    toDate,
    formatISO,
    isThisWeek,
    isBefore,
    endOfToday,
    add,
    format,
    parseISO,
} from "date-fns";
import Task from './taskClass'
class Project {
    constructor(title,taskList) { 
        this.title = title; 
        this.taskList = taskList;
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
    combine(project){
        this.taskList = this.taskList.concat(project.getTaskList())
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
    getTaskList(){
        return this.taskList;
    }
}   
export default Project;