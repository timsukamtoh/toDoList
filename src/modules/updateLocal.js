function updateLocal(project){
    window.localStorage.setItem('allProjects',JSON.stringify(project))
}
export default updateLocal