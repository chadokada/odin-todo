import * as task from "./task.js";
import * as project from "./project.js"
import * as list from "./todolist.js"
import * as elements from "./pageelements.js";
import {format} from 'date-fns';
import * as storage from "./storage.js";

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
            if (storage.projectExists(projectName)){
                alert('Project already exists.');
            } else {
                storage.addProject(projectName);
                let projectSidebar = document.querySelector('.project-sidebar');
                let projectBtn = new ProjectButton(projectName);
                projectSidebar.appendChild(projectBtn.button);
                this.#hideForm();
            }
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

class ProjectButton{
    constructor(name){
        this.name = name;
        this.projectBtn = new elements.pageElement('div','nav-button',
            '', this.name,'', this.name).get;
        this.icon = document.createElement('i');
    }
    #setIcon(){
        if (this.name == 'Inbox'){
            this.icon.className = 'fa-solid fa-inbox';
        } else if (this.name == 'Today'){
            this.icon.className = 'fa-solid fa-inbox';
        } else if (this.name =='Upcoming'){
            this.icon.className = 'fa-solid fa-calendar-days';
        } else{
            this.icon.className = 'fa-regular fa-circle';
        }
    }
    #createButton(){
        this.#setIcon();
        let projectName = new elements.pageElement('div','', this.name).get;
        [this.icon, projectName].forEach(element => 
            this.projectBtn.appendChild(element));
    }
    #showProject(){
        let sectionTitleDiv = document.querySelector('.section-title');
        sectionTitleDiv.id = this.projectBtn.id;
        sectionTitleDiv.innerHTML = this.name;
        clearTasks();
        if (this.name != 'Today' || this.name != 'Upcoming'){
            loadTasks()
        }
    }
    #startListeners(){
        this.projectBtn.addEventListener('click', () => 
            this.#showProject())
    }
    get button(){
        this.#createButton();
        this.#startListeners();
        return this.projectBtn;
    }
}

class addTaskButton {
    constructor(){
        this.addTaskDiv = new elements.pageElement('div', 'add-task').get;
        this.addSymbol = document.createElement('i');
        this.createDesc = new elements.pageElement('div','','Add Task').get;
    }
    createButton(){
        this.addSymbol.className = 'fa-thin fa-plus';
        [this.addSymbol, this.createDesc].forEach(element => 
            this.addTaskDiv.appendChild(element));
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
        this.addTaskDiv.addEventListener('click', () => this.#addTask());
    }
    get button(){
        this.createButton();
        this.startListeners();
        return this.addTaskDiv;
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
        let sectionContent = document.querySelector('.section-content');
        let addTaskForm = document.querySelector('.add-task-form');
        let addBtn = new addTaskButton();

        addTaskForm.remove();
        sectionContent.appendChild(addBtn.button);
    }
    #getInputValues(){
        let taskName = document.querySelector(
            'input[class="task-name-input"]');
        let taskDesc = document.querySelector('.task-desc-input');
        let dueDate = document.querySelector('.task-due-date');
        return [taskName.value, taskDesc.value, dueDate.value];
    }
    #submitTask(){
        let projectName = document.querySelector('.section-title').innerHTML;
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

function createTask(task){
    let userTaskContainer = new elements.pageElement('div',
        'user-task-collapsed').get;
    let taskSymbol = document.createElement('i');
    let taskName = new elements.pageElement('div','task-name-collapsed',
        task.name).get;
    let dueDate = new elements.pageElement('div','due-date-collapsed',
        task.displayDueDate).get;

    taskSymbol.className = 'fa-regular fa-circle';
    taskSymbol.id = task.name;
    [taskSymbol, taskName, dueDate].forEach(element => 
        userTaskContainer.appendChild(element));
    return userTaskContainer;
}

function loadTasks(){
    let sectionTitle = document.querySelector('.section-title').innerHTML;
    let _project = storage.getProject(sectionTitle);
    let sectionContent = document.querySelector('.task-container');

    if (_project){
        let _tasks = _project.tasks;
        for (let task of _tasks){
            let deserializedTask = storage.getTask(task)
            let taskDiv = createTask(deserializedTask);
            sectionContent.appendChild(taskDiv);
        }
    }
}

function clearTasks(){
    let sectionContent = document.querySelector('.task-container');
    while (sectionContent.firstChild){
        sectionContent.removeChild(sectionContent.firstChild);
    }
}

function loadProjects(){
    let projectNames = storage.getProjectNames();
    let projectSidebar = document.querySelector('.project-sidebar');
    for (let i = 3; i < projectNames.length; i++){
        let projectName = projectNames[i]
        let projectBtn = new ProjectButton(projectName);
        projectSidebar.appendChild(projectBtn.button);
    }
}

function loadPageAssets(){
    ['Inbox','Today','Upcoming'].forEach(item => {
        if(!storage.projectExists(item)){
            storage.addProject(item);
        }
    })
    let inbox = new ProjectButton('Inbox');
    let today = new ProjectButton('Today');
    let upcoming = new ProjectButton('Upcoming');
    let listsByDate = document.querySelector('.lists-by-date');
    [inbox, today, upcoming].forEach(element => 
        listsByDate.appendChild(element.button));

    let sectionContent = document.querySelector('.section-content');
    let addTask = new addTaskButton();
    sectionContent.appendChild(addTask.button);

    let projectHeading = document.querySelector('.project-heading');
    let addProject = new addProjectButton();
    projectHeading.appendChild(addProject.button);
}

export function loadPage(){
    storage.createList();
    loadTasks();
    loadPageAssets();
    loadProjects();
}

