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

function createAddProjectButtons(){
    const addProjectButtons = new elements.pageElement('div',
        'add-project-buttons').get;
    const submitProjectBtn = new elements.pageElement('button', 
        'submit-project', 'Add Project').get;
    const cancelProjectBtn = new elements.pageElement('button', 
        'cancel-project','Cancel').get;

    [submitProjectBtn, cancelProjectBtn].forEach(element => 
        addProjectButtons.appendChild(element));

    return addProjectButtons;
}

function createAddProjectForm(){
    const addProjectContainer = new elements.pageElement("div",
        "add-project-container").get;
    const projectNameInput = new elements.pageElement('input', 
        'project-name-input','','','text').get;
    const addProjectbuttons = createAddProjectButtons();
    
    [projectNameInput, addProjectbuttons].forEach(element => 
        addProjectContainer.appendChild(element));
    return addProjectContainer;
}

export function showAddProjectForm(){
    const projectSidebar = document.querySelector('.project-sidebar');
    const addProjectContainer = createAddProjectForm();
    projectSidebar.appendChild(addProjectContainer);
    addProjectFormEventListeners();
}

function addProjectFormEventListeners(){
    const submitProjectBtn = document.querySelector('.submit-project');
    const cancelProjectBtn = document.querySelector('.cancel-project');
    submitProjectBtn.addEventListener('click', () => addProject());
    cancelProjectBtn.addEventListener('click', () => hideAddProjectForm());
}

function addProject(){
    const projectName = document.querySelector(
        'input[class="project-name-input"]').value;
    
    storage.addProject(projectName);

    const projectSidebar = document.querySelector('.project-sidebar');
    const projectBtn = new elements.pageElement('div','user-project',
        projectName,projectName,'',projectName).get;
    projectSidebar.appendChild(projectBtn);
    projectBtn.addEventListener('click', (event) => showProject(event))
    hideAddProjectForm();
}

function hideAddProjectForm(){
    const addProjectContainer = document.querySelector(
        '.add-project-container');
    addProjectContainer.remove();
    //addTaskListener();
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

//
// Show Add Task Form Button Functionality
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
export function createAddTaskBtn(){ //addded to class
    const createTask = new elements.pageElement('div', 'add-task').get;
    const addSymbol = document.createElement('i');
    const createDesc = new elements.pageElement('div','','Add Task').get;
    
    addSymbol.className = 'fa-thin fa-plus';
    [addSymbol, createDesc].forEach(element => createTask.appendChild(element));
    return createTask;
}

export function addTask(){ //class implemented
    const sectionContent = document.querySelector('.section-content');
    const addTaskPopupBtn = document.querySelector('.add-task');
    //const addTaskForm = createAddTaskForm();//Replace with class method
    let _addTaskForm = new addTaskForm();

    addTaskPopupBtn.remove();
    sectionContent.appendChild(_addTaskForm.form);
    //_addTaskForm.startListeners();
    //addTaskFormEventListeners();
}

function addTaskListener(){ //class implemented
    const createTask = document.querySelector('.add-task');
    createTask.addEventListener('click', addTask);
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
        //const cancelTaskBtn = document.querySelector('.cancel-task');
        //const submitTaskBtn = document.querySelector('.submit-task');
        this.cancelTaskBtn.addEventListener('click', () => this.#hideForm());
        this.submitTaskBtn.addEventListener('click', () => this.#submitTask());
    }
    get form(){
        this.#createFormInputs();
        this.#createFormButtons();
        [this.addTaskInputs, this.addTaskButtons].forEach(element => 
            this.addTaskForm.appendChild(element));
        this.#startListeners(); //testing
        return this.addTaskForm;
    }
}

/*
export function createAddTaskFormInputs(){//added to class
    const addTaskInputContainer = new elements.pageElement('div',
        'add-task-inputs').get;
    const taskNameInput = new elements.pageElement('input', 'task-name-input',
        '','','text').get;
    const taskDescInput = new elements.pageElement('textarea','task-desc-input',
        '').get;

    const inputButtons = new elements.pageElement('div', 'input-buttons').get;
    const dateInput = new elements.pageElement('input', 'task-due-date','','',
        'date').get;

    //-----------
    taskNameInput.placeholder = `Task Name (ex: Buy groceries,`+
        ` Clean bathroom, etc)`;
    taskDescInput.placeholder = "Description";


    inputButtons.appendChild(dateInput);
    //need to add dropdown to show existing projects

    [taskNameInput, taskDescInput, inputButtons].forEach(
        element => addTaskInputContainer.appendChild(element));

    return addTaskInputContainer;
}

export function createAddTaskFormBtns(){ //added to class
    const addTaskButtons = new elements.pageElement('div',
        'add-task-buttons').get;
    const submitTaskBtn = new elements.pageElement('button','submit-task',
        'Submit').get;
    const cancelTaskBtn = new elements.pageElement('button', 'cancel-task', 
        'Cancel').get;

    [submitTaskBtn, cancelTaskBtn].forEach(element => 
        addTaskButtons.appendChild(element));
    return addTaskButtons;
}

export function createAddTaskForm(){ //added to class
    const addTaskContainer = new elements.pageElement("div",
        "add-task-form").get;

    const addTaskInputContainer = createAddTaskFormInputs();
    const addTaskButtons = createAddTaskFormBtns();

    [addTaskInputContainer, addTaskButtons].forEach(element => 
        addTaskContainer.appendChild(element));
    return addTaskContainer;
}

function addTaskFormEventListeners(){ //addded to class
    const cancelTaskBtn = document.querySelector('.cancel-task');
    const submitTaskBtn = document.querySelector('.submit-task');

    cancelTaskBtn.addEventListener('click', () => hideAddTaskForm());
    submitTaskBtn.addEventListener('click', () => submitTask());
}

function hideAddTaskForm(){ //added to class
    const sectionContent = document.querySelector('.section-content');
    const addTaskFormContainer = document.querySelector(
        '.add-task-form');

    const addTaskPopupBtn = createAddTaskBtn();
    addTaskFormContainer.remove();
    sectionContent.appendChild(addTaskPopupBtn);
    addTaskListener();
}

function submitTask(){ //added to class
    const currentProjectName = document.querySelector('.section-title').id;
    let taskName;
    let taskDescription;
    let dueDate;
    [taskName, taskDescription, dueDate] = getTaskInputValues();

    storage.addTask(currentProjectName, taskName, taskDescription, 
        dueDate)

    clearTasks();
    loadTasks();
    hideAddTaskForm();
}

function getTaskInputValues(){//added to class
    const taskName = document.querySelector('input[class="task-name-input"]');
    const taskDesc = document.querySelector('.task-desc-input');
    const dueDate = document.querySelector('.task-due-date');
    return [taskName.value, taskDesc.value, dueDate.value];
}
*/

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

    //Event listeners for addTask functionality
    //replace with class method
    const createTaskBtn = document.querySelector('.add-task');
    createTaskBtn.addEventListener('click', addTask)//() => addTask());

    //Event listeners for add Project functionality
    const createProjectBtn = document.querySelector('.create-project');
    createProjectBtn.addEventListener('click', () => showAddProjectForm());


}