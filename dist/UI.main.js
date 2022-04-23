/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/pageelements.js":
/*!*************************************!*\
  !*** ./src/modules/pageelements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageElement": () => (/* binding */ pageElement)
/* harmony export */ });
class pageElement{
    constructor(tag, className ='', innerHTML ='', id = '', type = '', name=''){
        this.className = className;
        this.innerHTML = innerHTML;
        this.id = id;
        this.type = type;
        this.name = name;
        this.div = document.createElement(tag);
    }
    #setClassName(){
        this.className != '' ? this.div.classList.add(this.className) : null;
    }
    #setInnerHTML(){
        this.innerHTML != '' ? this.div.innerHTML = this.innerHTML : null;
    }
    #setId(){
        this.id != '' ? this.div.id = this.id : null;
    }
    #setType(){
        this.type != '' ? this.div.type = this.type : null;
    }
    #setName(){
        this.name != '' ? this.div.setAttribute('name', this.name) : null;
    }
    setInnerHTML(text){
        this.innerHTML = text;
    }
    get get(){
        this.#setClassName();
        this.#setInnerHTML();
        this.#setId();
        this.#setType();
        this.#setName();
        return this.div;
    }
}

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
class task{
    #taskName; #taskDescription; #dueDate; //#priority;
    constructor(taskName, taskDescription, dueDate, project='', priority=''){
        this.#taskName = taskName;
        this.#taskDescription= taskDescription;
        this.#dueDate = dueDate;
        //this.#priority = priority;
    }
    get taskName(){
        return this.#taskName;
    }
    get taskDescription(){
        return this.#taskDescription;
    }
    get dueDate(){
        return this.#dueDate;
    }
}

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });

class Project{
    #taskList; #projectName
    constructor(projectName, index=''){
        this.#projectName = projectName;
        this.#taskList = [];
        this.index = index;
    }
    addTask(task){
        this.#taskList.push(task);
    }
    removeTask(task){
        const index = this.#taskList.indexOf(task);
        this.#taskList.splice(index, 1);
    }
    get tasks(){
        return this.#taskList;
    }
    get projectName(){
        return this.#projectName;
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddTaskBtn": () => (/* binding */ createAddTaskBtn),
/* harmony export */   "createAddTaskForm": () => (/* binding */ createAddTaskForm),
/* harmony export */   "createAddTaskFormBtns": () => (/* binding */ createAddTaskFormBtns),
/* harmony export */   "createAddTaskFormInputs": () => (/* binding */ createAddTaskFormInputs),
/* harmony export */   "loadPage": () => (/* binding */ loadPage),
/* harmony export */   "showAddProjectForm": () => (/* binding */ showAddProjectForm),
/* harmony export */   "showAddTaskForm": () => (/* binding */ showAddTaskForm),
/* harmony export */   "showProject": () => (/* binding */ showProject)
/* harmony export */ });
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.js */ "./src/modules/todolist.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _pageelements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageelements.js */ "./src/modules/pageelements.js");




const inbox = new _todolist_js__WEBPACK_IMPORTED_MODULE_0__.Project('inbox');

let projects = {'inbox': inbox};


//
// Add Projects
//

function createAddProjectButtons(){
    const addProjectButtons = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','add-project-buttons').get;
    const submitProjectBtn = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('button', 'submit-project', 'Add Project').get;
    const cancelProjectBtn = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('button', 'cancel-project','Cancel').get;

    [submitProjectBtn, cancelProjectBtn].forEach(element => 
        addProjectButtons.appendChild(element));

    return addProjectButtons;
}

function createAddProjectForm(){
    const addProjectContainer = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement("div","add-project-container").get;
    const projectNameInput = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('input', 'project-name-input','','','text').get;
    const addProjectbuttons = createAddProjectButtons();
    
    [projectNameInput, addProjectbuttons].forEach(element => 
        addProjectContainer.appendChild(element));
    return addProjectContainer;
}

function showAddProjectForm(){
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
    const newProject = new _todolist_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName)///, projectIndex);
    projects[projectName] = newProject

    const projectSidebar = document.querySelector('.project-sidebar');
    const projectBtn = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','user-project',projectName,projectName,'',projectName).get;
    projectSidebar.appendChild(projectBtn);
    projectBtn.addEventListener('click', (event) => showProject(event))
    hideAddProjectForm();
}

function hideAddProjectForm(){
    const addProjectContainer = document.querySelector('.add-project-container');
    addProjectContainer.remove();
    //addTaskListener();
}


function showProject(event){
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

function createAddTaskBtn(){
    const createTask = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div', 'create-task').get;
    const addSymbol = document.createElement('i');
    addSymbol.className = 'fa-thin fa-plus';

    const createDesc = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','','Add Task').get;
    [addSymbol, createDesc].forEach(element => createTask.appendChild(element));
    return createTask;
}

function showAddTaskForm(){
    const sectionContent = document.querySelector('.section-content');
    const addTaskPopupBtn = document.querySelector('.create-task');
    const addTaskContainer = createAddTaskForm();
    
    addTaskPopupBtn.remove();
    sectionContent.appendChild(addTaskContainer);
    addTaskFormEventListeners();
}

function addTaskListener(){
    const createTask = document.querySelector('.create-task');
    createTask.addEventListener('click', showAddTaskForm);
}

//
// Add Task Form Functionality
//
function createAddTaskFormInputs(){
    const addTaskInputContainer = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','add-task-input-container').get;
    const taskNameInput = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('input', 'task-name-input','','','text').get;
    const taskDescInput = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('textarea','task-desc-input','Description').get;
    
    const inputButtons = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div', 'input-buttons').get;
    const dateInput = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('input', 'task-due-date','','','date').get;
    inputButtons.appendChild(dateInput);
    //need to add dropdown to show existing projects

    [taskNameInput, taskDescInput, inputButtons].forEach(
        element => addTaskInputContainer.appendChild(element));

    return addTaskInputContainer;
}

function createAddTaskFormBtns(){
    const addTaskButtons = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','add-task-buttons').get;
    const submitTaskBtn = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('button','submit-task','Add Task').get;
    const cancelTaskBtn = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('button', 'cancel-task', 'Cancel').get;
    [submitTaskBtn, cancelTaskBtn].forEach(element => addTaskButtons.appendChild(element));
    return addTaskButtons;
}

function createAddTaskForm(){
    const addTaskContainer = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement("div","add-task-form-container").get;
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
    const currentProject = document.querySelector('.section-title').id;
    let taskName;
    let taskDescription;
    let dueDate;
    [taskName, taskDescription, dueDate] = getTaskInputValues();
    
    const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__.task(taskName, taskDescription, dueDate, currentProject);
    projects[currentProject].addTask(newTask);

    clearTasks();
    loadTasks();
    hideAddTaskForm();
}

//
// Display tasks
//

function createTask(task){
    const userTaskContainer = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','user-task-collapsed').get;
    const taskSymbol = document.createElement('i');
    const taskName = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','task-name-collapsed',task.taskName).get;
    taskSymbol.className = 'fa-regular fa-circle';
    taskSymbol.id = task.taskName;
    
    [taskSymbol, taskName].forEach(element => userTaskContainer.appendChild(element));
    return userTaskContainer;
}

function clearTasks(){
    const sectionContent = document.querySelector('.task-container');
    while (sectionContent.firstChild){
        sectionContent.removeChild(sectionContent.firstChild);
    }
}

function loadTasks(){
    const project = getProject()
    const tasks = project.tasks;
    const sectionContent = document.querySelector('.task-container');
    for (const task of tasks){
        const loadedTask = createTask(task);
        sectionContent.appendChild(loadedTask);
    }
}

function getProject(){
    const sectionTitle = document.querySelector('.section-title').id;
    return projects[sectionTitle];
}

function loadPage(){

    const inboxBtn = document.querySelector("#inbox")
    const todayBtn = document.querySelector("#today");
    const upcomingBtn = document.querySelector("#upcoming")

    inboxBtn.addEventListener("click", (event) => showProject(event));
    todayBtn.addEventListener("click", (event) => showProject(event));
    upcomingBtn.addEventListener("click", (event) => showProject(event));

    //Event listeners for addTask functionality
    const createTaskBtn = document.querySelector('.create-task');
    createTaskBtn.addEventListener('click', showAddTaskForm)//() => showAddTaskForm());

    //Event listeners for add Project functionality
    const createProjectBtn = document.querySelector('.create-project');
    createProjectBtn.addEventListener('click', () => showAddProjectForm());

}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLHdCQUF3QiwwQ0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MseURBQW9CO0FBQ3REO0FBQ0EseUJBQXlCLHlEQUFvQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3BhZ2VlbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3RvZG9saXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBwYWdlRWxlbWVudHtcbiAgICBjb25zdHJ1Y3Rvcih0YWcsIGNsYXNzTmFtZSA9JycsIGlubmVySFRNTCA9JycsIGlkID0gJycsIHR5cGUgPSAnJywgbmFtZT0nJyl7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICB9XG4gICAgI3NldENsYXNzTmFtZSgpe1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSAhPSAnJyA/IHRoaXMuZGl2LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWUpIDogbnVsbDtcbiAgICB9XG4gICAgI3NldElubmVySFRNTCgpe1xuICAgICAgICB0aGlzLmlubmVySFRNTCAhPSAnJyA/IHRoaXMuZGl2LmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MIDogbnVsbDtcbiAgICB9XG4gICAgI3NldElkKCl7XG4gICAgICAgIHRoaXMuaWQgIT0gJycgPyB0aGlzLmRpdi5pZCA9IHRoaXMuaWQgOiBudWxsO1xuICAgIH1cbiAgICAjc2V0VHlwZSgpe1xuICAgICAgICB0aGlzLnR5cGUgIT0gJycgPyB0aGlzLmRpdi50eXBlID0gdGhpcy50eXBlIDogbnVsbDtcbiAgICB9XG4gICAgI3NldE5hbWUoKXtcbiAgICAgICAgdGhpcy5uYW1lICE9ICcnID8gdGhpcy5kaXYuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKSA6IG51bGw7XG4gICAgfVxuICAgIHNldElubmVySFRNTCh0ZXh0KXtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cbiAgICBnZXQgZ2V0KCl7XG4gICAgICAgIHRoaXMuI3NldENsYXNzTmFtZSgpO1xuICAgICAgICB0aGlzLiNzZXRJbm5lckhUTUwoKTtcbiAgICAgICAgdGhpcy4jc2V0SWQoKTtcbiAgICAgICAgdGhpcy4jc2V0VHlwZSgpO1xuICAgICAgICB0aGlzLiNzZXROYW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdjtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIHRhc2t7XG4gICAgI3Rhc2tOYW1lOyAjdGFza0Rlc2NyaXB0aW9uOyAjZHVlRGF0ZTsgLy8jcHJpb3JpdHk7XG4gICAgY29uc3RydWN0b3IodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdD0nJywgcHJpb3JpdHk9Jycpe1xuICAgICAgICB0aGlzLiN0YXNrTmFtZSA9IHRhc2tOYW1lO1xuICAgICAgICB0aGlzLiN0YXNrRGVzY3JpcHRpb249IHRhc2tEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIC8vdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG4gICAgZ2V0IHRhc2tOYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiN0YXNrTmFtZTtcbiAgICB9XG4gICAgZ2V0IHRhc2tEZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy4jdGFza0Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy4jZHVlRGF0ZTtcbiAgICB9XG59IiwiXG5leHBvcnQgY2xhc3MgUHJvamVjdHtcbiAgICAjdGFza0xpc3Q7ICNwcm9qZWN0TmFtZVxuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBpbmRleD0nJyl7XG4gICAgICAgIHRoaXMuI3Byb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMuI3Rhc2tMaXN0ID0gW107XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB9XG4gICAgYWRkVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy4jdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgcmVtb3ZlVGFzayh0YXNrKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiN0YXNrTGlzdC5pbmRleE9mKHRhc2spO1xuICAgICAgICB0aGlzLiN0YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBnZXQgdGFza3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rhc2tMaXN0O1xuICAgIH1cbiAgICBnZXQgcHJvamVjdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3ROYW1lO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHRvZG9saXN0IGZyb20gXCIuL3RvZG9saXN0LmpzXCJcbmltcG9ydCAqIGFzIHRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0ICogYXMgZWxlbWVudHMgZnJvbSBcIi4vcGFnZWVsZW1lbnRzLmpzXCI7XG5cbmNvbnN0IGluYm94ID0gbmV3IHRvZG9saXN0LlByb2plY3QoJ2luYm94Jyk7XG5cbmxldCBwcm9qZWN0cyA9IHsnaW5ib3gnOiBpbmJveH07XG5cblxuLy9cbi8vIEFkZCBQcm9qZWN0c1xuLy9cblxuZnVuY3Rpb24gY3JlYXRlQWRkUHJvamVjdEJ1dHRvbnMoKXtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9ucyA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnZGl2JywnYWRkLXByb2plY3QtYnV0dG9ucycpLmdldDtcbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gbmV3IGVsZW1lbnRzLnBhZ2VFbGVtZW50KCdidXR0b24nLCAnc3VibWl0LXByb2plY3QnLCAnQWRkIFByb2plY3QnKS5nZXQ7XG4gICAgY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnYnV0dG9uJywgJ2NhbmNlbC1wcm9qZWN0JywnQ2FuY2VsJykuZ2V0O1xuXG4gICAgW3N1Ym1pdFByb2plY3RCdG4sIGNhbmNlbFByb2plY3RCdG5dLmZvckVhY2goZWxlbWVudCA9PiBcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuXG4gICAgcmV0dXJuIGFkZFByb2plY3RCdXR0b25zO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRQcm9qZWN0Rm9ybSgpe1xuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoXCJkaXZcIixcImFkZC1wcm9qZWN0LWNvbnRhaW5lclwiKS5nZXQ7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnaW5wdXQnLCAncHJvamVjdC1uYW1lLWlucHV0JywnJywnJywndGV4dCcpLmdldDtcbiAgICBjb25zdCBhZGRQcm9qZWN0YnV0dG9ucyA9IGNyZWF0ZUFkZFByb2plY3RCdXR0b25zKCk7XG4gICAgXG4gICAgW3Byb2plY3ROYW1lSW5wdXQsIGFkZFByb2plY3RidXR0b25zXS5mb3JFYWNoKGVsZW1lbnQgPT4gXG4gICAgICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuICAgIHJldHVybiBhZGRQcm9qZWN0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FkZFByb2plY3RGb3JtKCl7XG4gICAgY29uc3QgcHJvamVjdFNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zaWRlYmFyJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUFkZFByb2plY3RGb3JtKCk7XG4gICAgcHJvamVjdFNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdENvbnRhaW5lcik7XG4gICAgYWRkUHJvamVjdEZvcm1FdmVudExpc3RlbmVycygpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybUV2ZW50TGlzdGVuZXJzKCl7XG4gICAgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtcHJvamVjdCcpO1xuICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXByb2plY3QnKTtcbiAgICBzdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkUHJvamVjdCgpKTtcbiAgICBjYW5jZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGlkZUFkZFByb2plY3RGb3JtKCkpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtjbGFzcz1cInByb2plY3QtbmFtZS1pbnB1dFwiXScpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgdG9kb2xpc3QuUHJvamVjdChwcm9qZWN0TmFtZSkvLy8sIHByb2plY3RJbmRleCk7XG4gICAgcHJvamVjdHNbcHJvamVjdE5hbWVdID0gbmV3UHJvamVjdFxuXG4gICAgY29uc3QgcHJvamVjdFNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zaWRlYmFyJyk7XG4gICAgY29uc3QgcHJvamVjdEJ0biA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnZGl2JywndXNlci1wcm9qZWN0Jyxwcm9qZWN0TmFtZSxwcm9qZWN0TmFtZSwnJyxwcm9qZWN0TmFtZSkuZ2V0O1xuICAgIHByb2plY3RTaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHNob3dQcm9qZWN0KGV2ZW50KSlcbiAgICBoaWRlQWRkUHJvamVjdEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gaGlkZUFkZFByb2plY3RGb3JtKCl7XG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1jb250YWluZXInKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgIC8vYWRkVGFza0xpc3RlbmVyKCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9qZWN0KGV2ZW50KXtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi10aXRsZScpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIHNlY3Rpb25UaXRsZURpdi5pZCA9IHRhcmdldC5pZDtcbiAgICBzZWN0aW9uVGl0bGVEaXYuaW5uZXJIVE1MID0gc2VjdGlvblRpdGxlO1xuICAgIGNsZWFyVGFza3MoKVxuICAgIGlmIChzZWN0aW9uVGl0bGUgIT0gJ1RvZGF5JyB8fCBzZWN0aW9uVGl0bGUgIT0gJ1VwY29taW5nJyl7XG4gICAgICAgIGxvYWRUYXNrcygpO1xuICAgIH1cbiAgICBcbn1cblxuLy9cbi8vIFNob3cgQWRkIFRhc2sgRm9ybSBCdXR0b24gRnVuY3Rpb25hbGl0eVxuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tCdG4oKXtcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gbmV3IGVsZW1lbnRzLnBhZ2VFbGVtZW50KCdkaXYnLCAnY3JlYXRlLXRhc2snKS5nZXQ7XG4gICAgY29uc3QgYWRkU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGFkZFN5bWJvbC5jbGFzc05hbWUgPSAnZmEtdGhpbiBmYS1wbHVzJztcblxuICAgIGNvbnN0IGNyZWF0ZURlc2MgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2RpdicsJycsJ0FkZCBUYXNrJykuZ2V0O1xuICAgIFthZGRTeW1ib2wsIGNyZWF0ZURlc2NdLmZvckVhY2goZWxlbWVudCA9PiBjcmVhdGVUYXNrLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcbiAgICByZXR1cm4gY3JlYXRlVGFzaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBZGRUYXNrRm9ybSgpe1xuICAgIGNvbnN0IHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tY29udGVudCcpO1xuICAgIGNvbnN0IGFkZFRhc2tQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdGFzaycpO1xuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBjcmVhdGVBZGRUYXNrRm9ybSgpO1xuICAgIFxuICAgIGFkZFRhc2tQb3B1cEJ0bi5yZW1vdmUoKTtcbiAgICBzZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcbiAgICBhZGRUYXNrRm9ybUV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcigpe1xuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXRhc2snKTtcbiAgICBjcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FkZFRhc2tGb3JtKTtcbn1cblxuLy9cbi8vIEFkZCBUYXNrIEZvcm0gRnVuY3Rpb25hbGl0eVxuLy9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBZGRUYXNrRm9ybUlucHV0cygpe1xuICAgIGNvbnN0IGFkZFRhc2tJbnB1dENvbnRhaW5lciA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnZGl2JywnYWRkLXRhc2staW5wdXQtY29udGFpbmVyJykuZ2V0O1xuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2lucHV0JywgJ3Rhc2stbmFtZS1pbnB1dCcsJycsJycsJ3RleHQnKS5nZXQ7XG4gICAgY29uc3QgdGFza0Rlc2NJbnB1dCA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgndGV4dGFyZWEnLCd0YXNrLWRlc2MtaW5wdXQnLCdEZXNjcmlwdGlvbicpLmdldDtcbiAgICBcbiAgICBjb25zdCBpbnB1dEJ1dHRvbnMgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2RpdicsICdpbnB1dC1idXR0b25zJykuZ2V0O1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnaW5wdXQnLCAndGFzay1kdWUtZGF0ZScsJycsJycsJ2RhdGUnKS5nZXQ7XG4gICAgaW5wdXRCdXR0b25zLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgLy9uZWVkIHRvIGFkZCBkcm9wZG93biB0byBzaG93IGV4aXN0aW5nIHByb2plY3RzXG5cbiAgICBbdGFza05hbWVJbnB1dCwgdGFza0Rlc2NJbnB1dCwgaW5wdXRCdXR0b25zXS5mb3JFYWNoKFxuICAgICAgICBlbGVtZW50ID0+IGFkZFRhc2tJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KSk7XG5cbiAgICByZXR1cm4gYWRkVGFza0lucHV0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkVGFza0Zvcm1CdG5zKCl7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbnMgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2RpdicsJ2FkZC10YXNrLWJ1dHRvbnMnKS5nZXQ7XG4gICAgY29uc3Qgc3VibWl0VGFza0J0biA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnYnV0dG9uJywnc3VibWl0LXRhc2snLCdBZGQgVGFzaycpLmdldDtcbiAgICBjb25zdCBjYW5jZWxUYXNrQnRuID0gbmV3IGVsZW1lbnRzLnBhZ2VFbGVtZW50KCdidXR0b24nLCAnY2FuY2VsLXRhc2snLCAnQ2FuY2VsJykuZ2V0O1xuICAgIFtzdWJtaXRUYXNrQnRuLCBjYW5jZWxUYXNrQnRuXS5mb3JFYWNoKGVsZW1lbnQgPT4gYWRkVGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuICAgIHJldHVybiBhZGRUYXNrQnV0dG9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tGb3JtKCl7XG4gICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudChcImRpdlwiLFwiYWRkLXRhc2stZm9ybS1jb250YWluZXJcIikuZ2V0O1xuICAgIGNvbnN0IGFkZFRhc2tJbnB1dENvbnRhaW5lciA9IGNyZWF0ZUFkZFRhc2tGb3JtSW5wdXRzKCk7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbnMgPSBjcmVhdGVBZGRUYXNrRm9ybUJ0bnMoKTtcbiAgICBbYWRkVGFza0lucHV0Q29udGFpbmVyLCBhZGRUYXNrQnV0dG9uc10uZm9yRWFjaChlbGVtZW50ID0+IGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuICAgIHJldHVybiBhZGRUYXNrQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrRm9ybUV2ZW50TGlzdGVuZXJzKCl7XG4gICAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdGFzaycpO1xuICAgIGNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXRhc2snKTtcblxuICAgIGNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoaWRlQWRkVGFza0Zvcm0oKSk7XG4gICAgc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN1Ym1pdFRhc2soKSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tJbnB1dFZhbHVlcygpe1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbY2xhc3M9XCJ0YXNrLW5hbWUtaW5wdXRcIl0nKTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2MtaW5wdXQnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZHVlLWRhdGUnKTtcbiAgICByZXR1cm4gW3Rhc2tOYW1lLnZhbHVlLCB0YXNrRGVzYy52YWx1ZSwgZHVlRGF0ZS52YWx1ZV07XG59XG5cbmZ1bmN0aW9uIGhpZGVBZGRUYXNrRm9ybSgpe1xuICAgIGNvbnN0IHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tY29udGVudCcpO1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBhZGRUYXNrUG9wdXBCdG4gPSBjcmVhdGVBZGRUYXNrQnRuKCk7XG4gICAgYWRkVGFza0Zvcm1Db250YWluZXIucmVtb3ZlKCk7XG4gICAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza1BvcHVwQnRuKTtcbiAgICBhZGRUYXNrTGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0VGFzaygpe1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tdGl0bGUnKS5pZDtcbiAgICBsZXQgdGFza05hbWU7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbjtcbiAgICBsZXQgZHVlRGF0ZTtcbiAgICBbdGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZV0gPSBnZXRUYXNrSW5wdXRWYWx1ZXMoKTtcbiAgICBcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IHRhc2sudGFzayh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCBkdWVEYXRlLCBjdXJyZW50UHJvamVjdCk7XG4gICAgcHJvamVjdHNbY3VycmVudFByb2plY3RdLmFkZFRhc2sobmV3VGFzayk7XG5cbiAgICBjbGVhclRhc2tzKCk7XG4gICAgbG9hZFRhc2tzKCk7XG4gICAgaGlkZUFkZFRhc2tGb3JtKCk7XG59XG5cbi8vXG4vLyBEaXNwbGF5IHRhc2tzXG4vL1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spe1xuICAgIGNvbnN0IHVzZXJUYXNrQ29udGFpbmVyID0gbmV3IGVsZW1lbnRzLnBhZ2VFbGVtZW50KCdkaXYnLCd1c2VyLXRhc2stY29sbGFwc2VkJykuZ2V0O1xuICAgIGNvbnN0IHRhc2tTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgdGFza05hbWUgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2RpdicsJ3Rhc2stbmFtZS1jb2xsYXBzZWQnLHRhc2sudGFza05hbWUpLmdldDtcbiAgICB0YXNrU3ltYm9sLmNsYXNzTmFtZSA9ICdmYS1yZWd1bGFyIGZhLWNpcmNsZSc7XG4gICAgdGFza1N5bWJvbC5pZCA9IHRhc2sudGFza05hbWU7XG4gICAgXG4gICAgW3Rhc2tTeW1ib2wsIHRhc2tOYW1lXS5mb3JFYWNoKGVsZW1lbnQgPT4gdXNlclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuICAgIHJldHVybiB1c2VyVGFza0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrcygpe1xuICAgIGNvbnN0IHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgd2hpbGUgKHNlY3Rpb25Db250ZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICBzZWN0aW9uQ29udGVudC5yZW1vdmVDaGlsZChzZWN0aW9uQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrcygpe1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KClcbiAgICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza3M7XG4gICAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3Mpe1xuICAgICAgICBjb25zdCBsb2FkZWRUYXNrID0gY3JlYXRlVGFzayh0YXNrKTtcbiAgICAgICAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZGVkVGFzayk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCl7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tdGl0bGUnKS5pZDtcbiAgICByZXR1cm4gcHJvamVjdHNbc2VjdGlvblRpdGxlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYWdlKCl7XG5cbiAgICBjb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIilcbiAgICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXlcIik7XG4gICAgY29uc3QgdXBjb21pbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VwY29taW5nXCIpXG5cbiAgICBpbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiBzaG93UHJvamVjdChldmVudCkpO1xuICAgIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHNob3dQcm9qZWN0KGV2ZW50KSk7XG4gICAgdXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gc2hvd1Byb2plY3QoZXZlbnQpKTtcblxuICAgIC8vRXZlbnQgbGlzdGVuZXJzIGZvciBhZGRUYXNrIGZ1bmN0aW9uYWxpdHlcbiAgICBjb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10YXNrJyk7XG4gICAgY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBZGRUYXNrRm9ybSkvLygpID0+IHNob3dBZGRUYXNrRm9ybSgpKTtcblxuICAgIC8vRXZlbnQgbGlzdGVuZXJzIGZvciBhZGQgUHJvamVjdCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdCcpO1xuICAgIGNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93QWRkUHJvamVjdEZvcm0oKSk7XG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=