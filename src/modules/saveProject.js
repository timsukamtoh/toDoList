function saveProject(project){
    window.localStorage.setItem(project.title , JSON.stringify(project.getTaskList()))
}
export default saveProject