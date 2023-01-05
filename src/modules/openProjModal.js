import Project from './projectClass'
import closeProjModal from './closeProjModal'
import createProjContainer from './createProjContainer'

function openProjModal(allProjects){
    const projectGrid = document.getElementById('projectGrid')
    const addProjBtn = document.getElementById('addProjBtn')
    addProjBtn.classList.add('disabled')

    const addProjectForm = document.createElement('form')
    addProjectForm.id = 'addProjectForm'
    addProjectForm.reset()

    const projTitle = document.createElement('input')
    projTitle.classList.add('input')
    projTitle.type ='text'
    projTitle.id ='projTitle'
    projTitle.name ='projTitle'
    projTitle.placeholder ='Project Title'
    projTitle.required = true;
    const cancelProjBtn = document.createElement('button')
    cancelProjBtn.classList.add('btn','red')
    cancelProjBtn.type ='reset'
    cancelProjBtn.textContent = 'Cancel'
    const confirmProjBtn = document.createElement('button')
    confirmProjBtn.classList.add('btn','green')
    confirmProjBtn.type = 'submit'
    confirmProjBtn.textContent = 'Confirm'

    addProjectForm.append(projTitle,cancelProjBtn,confirmProjBtn)
    projectGrid.insertBefore(addProjectForm,addProjBtn)
    projectGrid.removeChild(addProjBtn)
    projectGrid.append(addProjBtn)

    cancelProjBtn.addEventListener('click',()=>{
        closeProjModal(allProjects)
    })
    confirmProjBtn.addEventListener('click',(e)=>{
        if(addProjectForm.reportValidity()){
            e.preventDefault()
            let newProj = new Project(projTitle.value, new Array())
            allProjects.add(newProj)
            projectGrid.insertBefore(createProjContainer(newProj,allProjects),addProjBtn)
            closeProjModal(allProjects)
        }
    })
}

export default openProjModal