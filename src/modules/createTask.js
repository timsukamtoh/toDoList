import Task from './taskClass.js'
function createTask(project){
    const title = document.getElementById('title').value
    const date = document.getElementById('date').value
    const description = document.getElementById('description').value
    const priority = document.querySelector('input[name="priority"]:checked').value

    return new Task(title,date,description,priority,project)
}

export default createTask;