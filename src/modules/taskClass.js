class Task {
    constructor(title,date,description,priority) { 
        this.title = title; 
        this.date = date;
        this.description = description;
        this.priority = priority;
    }
    isPartOfProj(project) { 
        return project 
    }
}

export default Task;