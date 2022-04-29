import * as task from "./task.js";
import * as project from "./project.js"
import * as list from "./todolist.js"
import * as elements from "./pageelements.js";
import {format} from 'date-fns';
import * as storage from "./storage.js";

storage.createList();
storage.addProject('inbox')

//
// Add Projects
//

class addProjectButton {
    constructor(){
        this.addProject = new elements.pageElement('div', 
            'add-project').get;
        this.addSymbol = document.createElement('i');
    }
    createButton(){
        this.addSymbol.className = 'fa-thin fa-plus';
        this.addProject.appendChild(this.addSymbol);
    }
    showProjectForm(){
        let projectSidebar = document.querySelector('.project-sidebar');
        let _addProjectForm = document.querySelector('.add-project-form');
        //const addProjectContainer = createAddProjectForm(); //replace with class
        //projectSidebar.appendChild(addProjectContainer);
        //addProjectFormEventListeners(); //replace with class
        if (_addProjectForm == null){
            _addProjectForm = new addProjectForm()
            projectSidebar.appendChild(_addProjectForm.form);
        }

    }
    startListeners(){
        this.addProject.addEventListener('click', () => 
            this.showProjectForm())
    }
    get button(){
        this.createButton();
        this.startListeners();
        return this.addProject;
    }
}

export function showAddProjectForm(){ //addded to class
    const projectSidebar = document.querySelector('.project-sidebar');
    const addProjectContainer = createAddProjectForm();
    projectSidebar.appendChild(addProjectContainer);
    addProjectFormEventListeners();
}

class addProjectForm {
    constructor(){
        this.addProjectButtons = new elements.pageElement('div',
        'add-project-buttons').get;
        this.submitProjectBtn = new elements.pageElement('button', 
        'submit-project', 'Submit').get;
        this.cancelProjectBtn = new elements.pageElement('button', 
        'cancel-project','Cancel').get;
        this.addProjectForm = new elements.pageElement("div",
        "add-project-form").get;
        this.projectNameInput = new elements.pageElement('input', 
        'project-name-input','','','text').get;
    }
    #createButtons(){
        [this.submitProjectBtn, this.cancelProjectBtn].forEach(element =>
            this.addProjectButtons.appendChild(element))
    }
    #createForm(){
        this.#createButtons();
        [this.projectNameInput, this.addProjectButtons].forEach(element => 
            this.addProjectForm.appendChild(element));
    }
    #hideForm(){
        this.addProjectForm.remove();
    }
    #submitForm(){
        let projectName = this.projectNameInput.value;
        if (projectName == ''){
            alert('You must enter a project name.')
        } else {
            storage.addProject(projectName);
            let projectSidebar = document.querySelector('.project-sidebar');
            let projectBtn = new elements.pageElement('div','user-project',
                projectName,projectName,'',projectName).get;
            projectSidebar.appendChild(projectBtn);
            
            
            this.#hideForm();
        }
    }
    #startListeners(){
        this.cancelProjectBtn.addEventListener('click', () => this.#hideForm());
        this.submitProjectBtn.addEventListener('click', 
            () => this.#submitForm());
    }
    get form(){
        this.#createForm();
        this.#startListeners();
        return this.addProjectForm;
    }
}

//addded to class
function createAddProjectButtons(){ 
    const addProjectButtons = new elements.pageElement('div',
        'add-project-buttons').get;
    const submitProjectBtn = new elements.pageElement('button', 
        'submit-project', 'Submit').get;
    const cancelProjectBtn = new elements.pageElement('button', 
        'cancel-project','Cancel').get;

    [submitProjectBtn, cancelProjectBtn].forEach(element => 
        addProjectButtons.appendChild(element));

    return addProjectButtons;
}

//added to class
function createAddProjectForm(){ 
    const addProjectContainer = new elements.pageElement("div",
        "add-project-form").get;
    const projectNameInput = new elements.pageElement('input', 
        'project-name-input','','','text').get;
    const addProjectbuttons = createAddProjectButtons();
    
    [projectNameInput, addProjectbuttons].forEach(element => 
        addProjectContainer.appendChild(element));
    return addProjectContainer;
}

//added to class
function hideAddProjectForm(){ 
    const addProjectContainer = document.querySelector(
        '.add-project-form');
    addProjectContainer.remove();
    //addTaskListener();
}

function addProject(){
    const projectName = document.querySelector(
        'input[class="project-name-input"]').value;
    
    storage.addProject(projectName);

    const projectSidebar = document.querySelector('.project-sidebar');
    const projectBtn = new elements.pageElement('div','user-project',
        projectName,projectName,'',projectName).get;
    projectSidebar.appendChild(projectBtn);

    //should this be a separate class?
    projectBtn.addEventListener('click', (event) => showProject(event))
    hideAddProjectForm();
}

export function showProject(event){
    const sectionTitleDiv = document.querySelector('.section-title');
    const target = event.currentTarget;
    const sectionTitle = target.getAttribute('name');
    sectionTitleDiv.id = target.id;
    sectionTitleDiv.innerHTML = sectionTitle;
    clearTasks()
    if (sectionTitle != 'Today' || sectionTitle != 'Upcoming'){
        loadTasks();
    }
}

//partially added
function addProjectFormEventListeners(){
    const submitProjectBtn = document.querySelector('.submit-project');
    const cancelProjectBtn = document.querySelector('.cancel-project');
    submitProjectBtn.addEventListener('click', () => addProject());
    cancelProjectBtn.addEventListener('click', () => hideAddProjectForm());
}
 

//
/////////////////////////////////////////////
//


class addTaskButton {
    constructor(){
        this.createTask = new elements.pageElement('div', 'add-task').get;
        this.addSymbol = document.createElement('i');
        this.createDesc = new elements.pageElement('div','','Add Task').get;
    }
    createButton(){
        this.addSymbol.className = 'fa-thin fa-plus';
        [this.addSymbol, this.createDesc].forEach(element => 
            this.createTask.appendChild(element));
    }
    #addTask(){
        let sectionContent = document.querySelector('.section-content');
        let addTaskPopupBtn = document.querySelector('.add-task');

        let _addTaskForm = new addTaskForm();
        sectionContent.appendChild(_addTaskForm.form);
        
        if (addTaskPopupBtn){
            addTaskPopupBtn.remove();
        }
    }
    startListeners(){
        this.createTask.addEventListener('click', () => this.#addTask());
    }
    get button(){
        this.createButton();
        this.startListeners();
        return this.createTask;
    }
}

//
// Add Task Form Functionality
//

class addTaskForm{
    constructor(){
        this.addTaskInputs = new elements.pageElement('div',
            'add-task-inputs').get;
        this.taskNameInput = new elements.pageElement('input', 
            'task-name-input', '','','text').get;
        this.taskDescInput = new elements.pageElement('textarea',
            'task-desc-input','').get;
        this.inputButtons = new elements.pageElement('div', 
            'input-buttons').get;
        this.dateInput = new elements.pageElement('input', 'task-due-date','',
            '','date').get;
        this.addTaskButtons = new elements.pageElement('div',
            'add-task-buttons').get;
        this.submitTaskBtn = new elements.pageElement('button','submit-task',
            'Submit').get;
        this.cancelTaskBtn = new elements.pageElement('button', 'cancel-task', 
            'Cancel').get;
        this.addTaskForm = new elements.pageElement("div",
            "add-task-form").get;
    }
    #createFormInputs(){
        this.taskNameInput.placeholder = `Task Name (ex: Buy groceries,`+
            ` Clean bathroom, etc)`;
        this.taskDescInput.placeholder = "Description";
        this.inputButtons.appendChild(this.dateInput);
        [this.taskNameInput, this.taskDescInput, this.inputButtons].forEach(
            element => this.addTaskInputs.appendChild(element));
    }
    #createFormButtons(){
        [this.submitTaskBtn, this.cancelTaskBtn].forEach(element => 
            this.addTaskButtons.appendChild(element));
    }
    #hideForm(){
        const sectionContent = document.querySelector('.section-content');
        const addTaskForm = document.querySelector('.add-task-form');
        const addBtn = new addTaskButton();

        addTaskForm.remove();
        sectionContent.appendChild(addBtn.button);
    }
    #getInputValues(){
        const taskName = document.querySelector(
            'input[class="task-name-input"]');
        const taskDesc = document.querySelector('.task-desc-input');
        const dueDate = document.querySelector('.task-due-date');
        return [taskName.value, taskDesc.value, dueDate.value];
    }
    #submitTask(){
        let projectName = document.querySelector('.section-title').id;
        let taskName;
        let taskDescription;
        let dueDate;
        
        [taskName, taskDescription, dueDate] = this.#getInputValues();
    
        storage.addTask(projectName, taskName, taskDescription, 
            dueDate)
    
        clearTasks();
        loadTasks();
        this.#hideForm();
    }
    #startListeners(){
        this.cancelTaskBtn.addEventListener('click', () => this.#hideForm());
        this.submitTaskBtn.addEventListener('click', () => this.#submitTask());
    }
    get form(){
        this.#createFormInputs();
        this.#createFormButtons();
        [this.addTaskInputs, this.addTaskButtons].forEach(element => 
            this.addTaskForm.appendChild(element));
        this.#startListeners(); 
        return this.addTaskForm;
    }
}

//
// Display tasks
//

function createTask(task){
    const userTaskContainer = new elements.pageElement('div',
        'user-task-collapsed').get;
    const taskSymbol = document.createElement('i');
    const taskName = new elements.pageElement('div','task-name-collapsed',
        task.name).get;
    const dueDate = new elements.pageElement('div','due-date-collapsed',
        task.displayDueDate).get;
    taskSymbol.className = 'fa-regular fa-circle';
    taskSymbol.id = task.name;
 
    [taskSymbol, taskName, dueDate].forEach(element => 
        userTaskContainer.appendChild(element));
    return userTaskContainer;
}

function clearTasks(){
    const sectionContent = document.querySelector('.task-container');
    while (sectionContent.firstChild){
        sectionContent.removeChild(sectionContent.firstChild);
    }
}

function loadTasks(){
    let sectionTitle = document.querySelector('.section-title').id;
    let _project = storage.getProject(sectionTitle);
    let _tasks = _project.tasks;
    
    const sectionContent = document.querySelector('.task-container');
 
    for (const task of _tasks){
        let deserializedTask = storage.getTask(task)
        const taskDiv = createTask(deserializedTask);
        sectionContent.appendChild(taskDiv);
    }
}

export function loadPage(){
    const inboxBtn = document.querySelector("#inbox")
    const todayBtn = document.querySelector("#today");
    const upcomingBtn = document.querySelector("#upcoming")

    inboxBtn.addEventListener("click", (event) => showProject(event));
    todayBtn.addEventListener("click", (event) => showProject(event));
    upcomingBtn.addEventListener("click", (event) => showProject(event));

    let sectionContent = document.querySelector('.section-content');
    let addTask = new addTaskButton();
    sectionContent.appendChild(addTask.button);

    let projectHeading = document.querySelector('.project-heading');
    let addProject = new addProjectButton();
    projectHeading.appendChild(addProject.button);
}