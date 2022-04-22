import * as todolist from "./todolist.js"
import * as task from "./task.js";
import * as elements from "./pageelements.js";

const inboxList = new todolist.taskList;


export function showInbox(){
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.innerHTML = "Inbox";
}

export function showToday(){
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.innerHTML = "Today";
}

export function showUpcoming(){
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.innerHTML = "Upcoming";
}

//
// Show Add Task Form Button Functionality
//

export function generateAddTaskPopupBtn(){
    const createTask = new elements.pageElement('div', 'create-task').get;
    const addSymbol = document.createElement('i');
    addSymbol.className = 'fa-thin fa-plus';
    const createDesc = new elements.pageElement('div','','Add Task').get;
    [addSymbol, createDesc].forEach(element => createTask.appendChild(element));
    return createTask;
}

export function showAddTaskForm(){
    const sectionContent = document.querySelector('.section-content');
    const addTaskPopupBtn = document.querySelector('.create-task');
    const addTaskContainer = generateAddTaskForm();
    addTaskPopupBtn.remove();
    sectionContent.appendChild(addTaskContainer);
    addTaskFormEventListeners();
}

function createTaskFormListener(){
    const createTask = document.querySelector('.create-task');
    createTask.addEventListener('click', () => showAddTaskForm());
}

//
// Add Task Form Functionality
//
export function generateAddTaskInputFields(){
    const addTaskInputContainer = new elements.pageElement('div','add-task-input-container').get;

    const taskNameInput = document.createElement("input");
    taskNameInput.type = 'text';
    taskNameInput.className = '.taskNameInput';

    const taskDescInput = document.createElement('textarea');
    taskDescInput.className = 'taskDescInput';
    taskDescInput.innerHTML = 'Description';

    const inputButtons = new elements.pageElement('div', 'input-buttons').get;
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.className = 'taskDueDate';

    inputButtons.appendChild(dateInput);

    [taskNameInput, taskDescInput, inputButtons].forEach(
        element => addTaskInputContainer.appendChild(element));

    return addTaskInputContainer;
}

export function generateAddTaskButtons(){
    const addTaskButtons = new elements.pageElement('div','add-task-buttons').get;

    const submitTaskBtn = document.createElement('button');
    submitTaskBtn.className = 'submit-task';
    submitTaskBtn.innerHTML = 'Add Task';

    const cancelTaskBtn = document.createElement('button');
    cancelTaskBtn.className = 'cancel-task';
    cancelTaskBtn.innerHTML = 'Cancel';

    [submitTaskBtn, cancelTaskBtn].forEach(element => addTaskButtons.appendChild(element));

    return addTaskButtons;
}

export function generateAddTaskForm(){
    const addTaskContainer = new elements.pageElement("div","add-task-container").get;
    const addTaskInputContainer = generateAddTaskInputFields();
    const addTaskButtons = generateAddTaskButtons();
    [addTaskInputContainer, addTaskButtons].forEach(element => addTaskContainer.appendChild(element));
    return addTaskContainer;
}

function addTaskFormEventListeners(){
    const cancelTaskBtn = document.querySelector('.cancel-task');
    const submitTaskBtn = document.querySelector('.submit-task');

    cancelTaskBtn.addEventListener('click', () => cancelTask());
    submitTaskBtn.addEventListener('click', () => submitTask());
}

function hideAddTaskForm(){
    const sectionContent = document.querySelector('.section-content');
    const addTaskContainer = document.querySelector('.add-task-container');

    const addTaskPopupBtn = generateAddTaskPopupBtn();
    addTaskContainer.remove();
    sectionContent.appendChild(addTaskPopupBtn);
    createTaskFormListener();
}

function submitTask(){
    console.log(getInputValues());
    hideAddTaskForm();
}

function getInputValues(){
    const taskName = document.querySelector('input[class=".taskNameInput"]');
    const taskDesc = document.querySelector('.taskDescInput');
    const dueDate = document.querySelector('.taskDueDate');
    console.log(taskName)
    return [taskName.value, taskDesc.value, dueDate.value];
}

function cancelTask(){
    hideAddTaskForm();
}



/*
class AddTaskInput{
    constructor(){
        this.addTaskInputContainer = new elements.pageElement('div','add-task-input-container').get;
        this.taskNameInput = document.createElement("input");
        this.taskDescInput = document.createElement('textarea');
        this.inputButtons = new elements.pageElement('div', 'input-buttons').get;
        this.dateInput = document.createElement('input');

        this.addTaskButtons = new elements.pageElement('div','add-task-buttons').get;
        this.submitTaskBtn = document.createElement('button');
        this.cancelTaskBtn = document.createElement('button');

        this.addTaskContainer = new elements.pageElement("div","add-task-container").get;
    }
    #generateAddTaskInputFields(){
        this.taskNameInput.type = 'text';
        this.taskNameInput.className = '.taskNameInput';
        this.taskDescInput.className = 'taskDescInput';
        this.taskDescInput.innerHTML = 'Description';
        this.dateInput.type = 'date';
        this.inputButtons.appendChild(this.dateInput);
    
        [this.taskNameInput, this.taskDescInput, this.inputButtons].forEach(
            element => this.addTaskInputContainer.appendChild(element));
    }

    #generateAddTaskButtons(){
        this.submitTaskBtn.className = 'submit-task';
        this.submitTaskBtn.innerHTML = 'Add Task';
        this.cancelTaskBtn.className = 'cancel-task';
        this.cancelTaskBtn.innerHTML = 'Cancel';
    
        [this.submitTaskBtn, 
            this.cancelTaskBtn].forEach(element => this.addTaskButtons.appendChild(element));
    }

    create(){
        this.#generateAddTaskInputFields();
        this.#generateAddTaskButtons();
        [this.addTaskInputContainer, this.addTaskbuttons].forEach(
            elements => this.addTaskContainer.appendChild(element));
    }

    show(){
        return this.addTaskContainer;
    }
}
*/