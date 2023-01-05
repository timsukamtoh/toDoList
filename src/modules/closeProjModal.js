function closeProjModal(allProjects){
    const projectGrid = document.getElementById('projectGrid')
    const addProjectForm = document.getElementById('addProjectForm')
    const addProjBtn = document.getElementById('addProjBtn')

    addProjectForm.innerHTML=''
    projectGrid.removeChild(addProjectForm)
    addProjBtn.classList.remove('disabled')
    console.log(allProjects)
}

export default closeProjModal