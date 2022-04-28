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
    const addProjectButtons = new elements.pageElement('div','add-project-buttons').get;
    const submitProjectBtn = new elements.pageElement('button', 'submit-project', 'Add Project').get;
    const cancelProjectBtn = new elements.pageElement('button', 'cancel-project','Cancel').get;

    [submitProjectBtn, cancelProjectBtn].forEach(element => 
        addProjectButtons.appendChild(element));

    return addProjectButtons;
}

function createAddProjectForm(){
    const addProjectContainer = new elements.pageElement("div","add-project-container").get;
    const projectNameInput = new elements.pageElement('input', 'project-name-input','','','text').get;
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
    const projectName = document.querySelector('input[class="project-name-input"]').value;
    
    storage.addProject(projectName);

    const projectSidebar = document.querySelector('.project-sidebar');
    const projectBtn = new elements.pageElement('div','user-project',projectName,projectName,'',projectName).get;
    projectSidebar.appendChild(projectBtn);
    projectBtn.addEventListener('click', (event) => showProject(event))
    hideAddProjectForm();
}

function hideAddProjectForm(){
    const addProjectContainer = document.querySelector('.add-project-container');
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

export function createAddTaskBtn(){
    const createTask = new elements.pageElement('div', 'create-task').get;
    const addSymbol = document.createElement('i');
    addSymbol.className = 'fa-thin fa-plus';

    const createDesc = new elements.pageElement('div','','Add Task').get;
    [addSymbol, createDesc].forEach(element => createTask.appendChild(element));
    return createTask;
}

export function addTask(){
    const sectionContent = document.querySelector('.section-content');
    const addTaskPopupBtn = document.querySelector('.create-task');
    const addTaskContainer = createAddTaskForm();
    
    addTaskPopupBtn.remove();
    sectionContent.appendChild(addTaskContainer);
    addTaskFormEventListeners();
}

function addTaskListener(){
    const createTask = document.querySelector('.create-task');
    createTask.addEventListener('click', addTask);
}

//
// Add Task Form Functionality
//
export function createAddTaskFormInputs(){
    const addTaskInputContainer = new elements.pageElement('div','add-task-input-container').get;
    const taskNameInput = new elements.pageElement('input', 'task-name-input','','','text').get;
    const taskDescInput = new elements.pageElement('textarea','task-desc-input','').get;
    taskNameInput.placeholder = "Task Name (ex: 'Buy groceries', 'Clean bathroom', 'etc'";
    taskDescInput.placeholder = "Description";

    const inputButtons = new elements.pageElement('div', 'input-buttons').get;
    const dateInput = new elements.pageElement('input', 'task-due-date','','','date').get;
    inputButtons.appendChild(dateInput);
    //need to add dropdown to show existing projects

    [taskNameInput, taskDescInput, inputButtons].forEach(
        element => addTaskInputContainer.appendChild(element));

    return addTaskInputContainer;
}

export function createAddTaskFormBtns(){
    const addTaskButtons = new elements.pageElement('div','add-task-buttons').get;
    const submitTaskBtn = new elements.pageElement('button','submit-task','Add Task').get;
    const cancelTaskBtn = new elements.pageElement('button', 'cancel-task', 'Cancel').get;
    [submitTaskBtn, cancelTaskBtn].forEach(element => addTaskButtons.appendChild(element));
    return addTaskButtons;
}

export function createAddTaskForm(){
    const addTaskContainer = new elements.pageElement("div","add-task-form-container").get;
    const addTaskInputContainer = createAddTaskFormInputs();
    const addTaskButtons = createAddTaskFormBtns();
    [addTaskInputContainer, addTaskButtons].forEach(element => addTaskContainer.appendChild(element));
    return addTaskContainer;
}

function addTaskFormEventListeners(){
    const cancelTaskBtn = document.querySelector('.cancel-task');
    const submitTaskBtn = document.querySelector('.submit-task');

    cancelTaskBtn.addEventListener('click', () => hideAddTaskForm());
    submitTaskBtn.addEventListener('click', () => submitTask());
}

function getTaskInputValues(){
    const taskName = document.querySelector('input[class="task-name-input"]');
    const taskDesc = document.querySelector('.task-desc-input');
    const dueDate = document.querySelector('.task-due-date');
    return [taskName.value, taskDesc.value, dueDate.value];
}

function hideAddTaskForm(){
    const sectionContent = document.querySelector('.section-content');
    const addTaskFormContainer = document.querySelector('.add-task-form-container');

    const addTaskPopupBtn = createAddTaskBtn();
    addTaskFormContainer.remove();
    sectionContent.appendChild(addTaskPopupBtn);
    addTaskListener();
}

function submitTask(){
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

//
// Display tasks
//

function createTask(task){
    const userTaskContainer = new elements.pageElement('div','user-task-collapsed').get;
    const taskSymbol = document.createElement('i');
    const taskName = new elements.pageElement('div','task-name-collapsed',task.name).get;
    const dueDate = new elements.pageElement('div','due-date-collapsed',task.displayDueDate).get;
    taskSymbol.className = 'fa-regular fa-circle';
    taskSymbol.id = task.name;
 
    [taskSymbol, taskName, dueDate].forEach(element => userTaskContainer.appendChild(element));
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
    const createTaskBtn = document.querySelector('.create-task');
    createTaskBtn.addEventListener('click', addTask)//() => addTask());

    //Event listeners for add Project functionality
    const createProjectBtn = document.querySelector('.create-project');
    createProjectBtn.addEventListener('click', () => showAddProjectForm());


}