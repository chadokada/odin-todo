import * as elements from "./pageelements.js";
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
            this.addProjectButtons.appendChild(element));
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
            '', '','', this.name).get;
        this.icon = document.createElement('i');
        this.projectName = new elements.pageElement('div','', this.name,
            this.name).get;
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
        [this.icon, this.projectName].forEach(element => 
            this.projectBtn.appendChild(element));
    }
    #showProject(){
        let sectionTitleDiv = document.querySelector('.section-title');
        sectionTitleDiv.id = this.projectBtn.id;
        sectionTitleDiv.innerHTML = this.name;
        clearTasks();
        loadTasks();
    }
    #deleteProject(){
        if (this.name != 'Inbox' || this.name != 'Today' || 
            this.name != 'Upcoming'){
                let inbox = document.querySelector('#Inbox');
                storage.deleteProject(this.name);
                loadProjects();
                inbox.click();
        }
    }
    #startListeners(){
        this.projectName.addEventListener('click', () => 
            this.#showProject());
        this.icon.addEventListener('click', () => 
            this.#deleteProject())
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
    constructor(task = null, taskDiv = '', taskID = ''){
        this.task = task;
        this.taskDiv = taskDiv;
        this.taskID = taskID;
        this.addTaskForm = new elements.pageElement("div",
        "add-task-form").get;
        this.addTaskInputs = new elements.pageElement('div',
            'add-task-inputs').get;
        this.taskNameInput = new elements.pageElement('input', 
            'task-name-input', '','','text').get;
        this.taskDescInput = new elements.pageElement('textarea',
            'task-desc-input','').get;
        this.inputRow = new elements.pageElement('div', 'input-row').get;
        this.dateInput = new elements.pageElement('input', 'task-due-date','',
            '','date').get;
        this.projectInput = new elements.pageElement('select',
            'task-project-input').get;
        this.addTaskButtons = new elements.pageElement('div',
            'add-task-buttons').get;
        this.submitTaskBtn = new elements.pageElement('button','submit-task',
            'Submit').get;
        this.cancelTaskBtn = new elements.pageElement('button', 'cancel-task', 
            'Cancel').get;
    }
    #setProjectDropDown(){
        let projects = storage.getProjectNames();
        for (let project of projects){
            let _project = document.createElement('option');
            [_project.value, _project.innerHTML] = [project, project];
            this.projectInput.appendChild(_project);
        }
    }
    #setFormValues(){
        if (this.task){
            this.taskNameInput.value = this.task.name;
            this.taskDescInput.value = this.task.description;
            this.projectInput.value = this.task.project;
            this.dateInput.value = this.task.dueDate;
        } else{
            this.taskNameInput.placeholder = `Task Name (ex: Buy groceries,`+
            ` Clean bathroom, etc)`;
            this.taskDescInput.placeholder = `Description`;
            this.projectInput.value = document.querySelector('.section-title').innerHTML
        }
    }
    #createFormInputs(){
        [this.dateInput, this.projectInput].forEach(element => 
            this.inputRow.appendChild(element));
        [this.taskNameInput, this.taskDescInput, this.inputRow].forEach(
            element => this.addTaskInputs.appendChild(element));
    }
    #createFormButtons(){
        [this.submitTaskBtn, this.cancelTaskBtn].forEach(element => 
            this.addTaskButtons.appendChild(element));
    }
    #hideForm(event){
        if (this.task) {
            let addForm = event.target.parentElement.parentElement;
            addForm.replaceWith(this.taskDiv)
        } else {
            let sectionContent = document.querySelector('.section-content');
            let addTaskForm = document.querySelector('.add-task-form');
            let addBtn = new addTaskButton();
            addTaskForm.remove();
            sectionContent.appendChild(addBtn.button);
        }
    }
    #getInputValues(){
        let projectName = document.querySelector('.task-project-input');
        let taskName = document.querySelector('input[class="task-name-input"]');
        let taskDesc = document.querySelector('.task-desc-input');
        let dueDate = document.querySelector('.task-due-date');
        return [projectName.value ,taskName.value, taskDesc.value, 
            dueDate.value];
    }
    #submitTask(){
        let projectName;
        let taskName;
        let taskDesc;
        let dueDate;
        [projectName, taskName, taskDesc, dueDate] = this.#getInputValues();
        if (this.task) {
            if(this.task.project == projectName){
                storage.editTask(this.taskID, projectName, taskName, taskDesc, 
                    dueDate);
            } else {
                storage.deleteTask(this.task.project, this.task);
                storage.addTask(projectName, taskName, taskDesc, dueDate);
            }
        } else {
            storage.addTask(projectName, taskName, taskDesc, dueDate);
        }
        clearTasks();
        loadTasks();
        this.task ? null : this.#hideForm();
    }
    #startListeners(){
        this.cancelTaskBtn.addEventListener('click', (event) => 
            this.#hideForm(event));
        this.submitTaskBtn.addEventListener('click', () => this.#submitTask());
    }
    get form(){
        this.#setProjectDropDown();
        this.#setFormValues()
        this.#createFormInputs();
        this.#createFormButtons();
        [this.addTaskInputs, this.addTaskButtons].forEach(element => 
            this.addTaskForm.appendChild(element));
        this.#startListeners(); 
        return this.addTaskForm;
    }
}

class TaskDiv{
    constructor(task, taskID){
        this.task = task;
        this.taskID = taskID;
        this.taskDiv = new elements.pageElement('div',
            'user-task-collapsed').get;
        this.taskSymbol = document.createElement('i');
        this.nameDiv = new elements.pageElement('div','task-name-collapsed',
            this.task.name).get;
        this.descDiv = new elements.pageElement('div','task-desc-collapsed', 
            this.task.description).get;
        this.projectDiv = new elements.pageElement('div',
            'task-project-collapsed', this.task.project).get;
        this.dueDateDiv = new elements.pageElement('div',
            'due-date-collapsed',this.task.displayDueDate).get;
    }
    #populateDiv(){
        this.taskSymbol.className = 'fa-regular fa-circle';
        this.taskSymbol.id = this.task.name;
        [this.taskSymbol, this.nameDiv, this.descDiv, this.projectDiv, 
            this.dueDateDiv].forEach(element => 
                this.taskDiv.appendChild(element))
    }
    #editTask(task){
        let editForm = new addTaskForm(task, this.taskDiv, this.taskID);
        this.taskDiv.replaceWith(editForm.form)
    }
    #deleteTask(){
        storage.deleteTask(this.task.project, this.task);
        clearTasks();
        loadTasks();
    }
    #startListeners(){
        [this.nameDiv, this.descDiv, this.projectDiv, this.dueDateDiv].forEach(
            div => div.addEventListener('click', () => 
                this.#editTask(this.task)));
        this.taskSymbol.addEventListener('click', () => this.#deleteTask());
    }
    get div(){
        this.#populateDiv();
        this.#startListeners();
        return this.taskDiv;
    }
}

function loadTasks(){
    let sectionTitle = document.querySelector('.section-title').innerHTML;
    let _project = storage.getProject(sectionTitle);
    let sectionContent = document.querySelector('.task-container');
    let _tasks = [];

    if (sectionTitle != 'Today' && sectionTitle != 'Upcoming'){
        _tasks = _project.tasks;
    } else if (sectionTitle == 'Today'){
        _tasks = storage.getTodaysTasks();
    } else if (sectionTitle == 'Upcoming'){
        _tasks = storage.getThisWeeksTasks();
    }
    let taskID = 0
    for (let task of _tasks){
        let deserializedTask = storage.deserializeTask(task)
        let taskDiv = new TaskDiv(deserializedTask, taskID);
        sectionContent.appendChild(taskDiv.div);
        taskID = taskID + 1;
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
    while (projectSidebar.firstChild){
        projectSidebar.removeChild(projectSidebar.firstChild);
    }
    for (let i = 1; i < projectNames.length; i++){
        let projectName = projectNames[i]
        let projectBtn = new ProjectButton(projectName);
        projectSidebar.appendChild(projectBtn.button);
    }
}

function loadPageAssets(){
    ['Inbox'].forEach(item => {
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
    loadPageAssets();
    loadProjects();
    loadTasks();
}