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
    constructor(tag, className ='', innerHTML ='', id = ''){
        this.className = className;
        this.innerHTML = innerHTML;
        this.id = id;
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
    setInnerHTML(text){
        this.innerHTML = text;
    }
    get get(){
        this.#setClassName();
        this.#setInnerHTML();
        this.#setId();
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
    constructor(taskName, taskDescription, dueDate, priority){
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
/* harmony export */   "taskList": () => (/* binding */ taskList)
/* harmony export */ });

class taskList{
    #taskList;
    constructor(listName){
        this.listName = listName;
        this.#taskList = [];
    }
    addTask(task){
        this.#taskList.push(task);
    }
    removeTask(task){
        const index = this.#taskList.indexOf(task);
        this.#taskList.splice(index, 1);
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
/* harmony export */   "generateAddTaskButtons": () => (/* binding */ generateAddTaskButtons),
/* harmony export */   "generateAddTaskForm": () => (/* binding */ generateAddTaskForm),
/* harmony export */   "generateAddTaskInputFields": () => (/* binding */ generateAddTaskInputFields),
/* harmony export */   "generateAddTaskPopupBtn": () => (/* binding */ generateAddTaskPopupBtn),
/* harmony export */   "showAddTaskForm": () => (/* binding */ showAddTaskForm),
/* harmony export */   "showInbox": () => (/* binding */ showInbox),
/* harmony export */   "showToday": () => (/* binding */ showToday),
/* harmony export */   "showUpcoming": () => (/* binding */ showUpcoming)
/* harmony export */ });
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.js */ "./src/modules/todolist.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _pageelements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageelements.js */ "./src/modules/pageelements.js");




const inboxList = new _todolist_js__WEBPACK_IMPORTED_MODULE_0__.taskList;


function showInbox(){
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.innerHTML = "Inbox";
}

function showToday(){
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.innerHTML = "Today";
}

function showUpcoming(){
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.innerHTML = "Upcoming";
}

//
// Show Add Task Form Button Functionality
//

function generateAddTaskPopupBtn(){
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
function generateAddTaskInputFields(){
    const addTaskInputContainer = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','add-task-input-container').get;

    const taskNameInput = document.createElement("input");
    taskNameInput.type = 'text';
    taskNameInput.className = '.taskNameInput';

    const taskDescInput = document.createElement('textarea');
    taskDescInput.className = 'taskDescInput';
    taskDescInput.innerHTML = 'Description';

    const inputButtons = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div', 'input-buttons').get;
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.className = 'taskDueDate';

    inputButtons.appendChild(dateInput);

    [taskNameInput, taskDescInput, inputButtons].forEach(
        element => addTaskInputContainer.appendChild(element));

    return addTaskInputContainer;
}

function generateAddTaskButtons(){
    const addTaskButtons = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement('div','add-task-buttons').get;

    const submitTaskBtn = document.createElement('button');
    submitTaskBtn.className = 'submit-task';
    submitTaskBtn.innerHTML = 'Add Task';

    const cancelTaskBtn = document.createElement('button');
    cancelTaskBtn.className = 'cancel-task';
    cancelTaskBtn.innerHTML = 'Cancel';

    [submitTaskBtn, cancelTaskBtn].forEach(element => addTaskButtons.appendChild(element));

    return addTaskButtons;
}

function generateAddTaskForm(){
    const addTaskContainer = new _pageelements_js__WEBPACK_IMPORTED_MODULE_2__.pageElement("div","add-task-container").get;
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ1AsZUFBZSxrQkFBa0IsVUFBVTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ1A7QUFDWTs7QUFFOUMsc0JBQXNCLGtEQUFpQjs7O0FBR2hDO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDJCQUEyQix5REFBb0I7QUFDL0M7QUFDQTtBQUNBLDJCQUEyQix5REFBb0I7QUFDL0M7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUCxzQ0FBc0MseURBQW9COztBQUUxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qix5REFBb0I7QUFDakQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQLCtCQUErQix5REFBb0I7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFTztBQUNQLGlDQUFpQyx5REFBb0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvcGFnZWVsZW1lbnRzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIHBhZ2VFbGVtZW50e1xuICAgIGNvbnN0cnVjdG9yKHRhZywgY2xhc3NOYW1lID0nJywgaW5uZXJIVE1MID0nJywgaWQgPSAnJyl7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICB9XG4gICAgI3NldENsYXNzTmFtZSgpe1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSAhPSAnJyA/IHRoaXMuZGl2LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWUpIDogbnVsbDtcbiAgICB9XG4gICAgI3NldElubmVySFRNTCgpe1xuICAgICAgICB0aGlzLmlubmVySFRNTCAhPSAnJyA/IHRoaXMuZGl2LmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MIDogbnVsbDtcbiAgICB9XG4gICAgI3NldElkKCl7XG4gICAgICAgIHRoaXMuaWQgIT0gJycgPyB0aGlzLmRpdi5pZCA9IHRoaXMuaWQgOiBudWxsO1xuICAgIH1cbiAgICBzZXRJbm5lckhUTUwodGV4dCl7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9XG4gICAgZ2V0IGdldCgpe1xuICAgICAgICB0aGlzLiNzZXRDbGFzc05hbWUoKTtcbiAgICAgICAgdGhpcy4jc2V0SW5uZXJIVE1MKCk7XG4gICAgICAgIHRoaXMuI3NldElkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdjtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIHRhc2t7XG4gICAgI3Rhc2tOYW1lOyAjdGFza0Rlc2NyaXB0aW9uOyAjZHVlRGF0ZTsgLy8jcHJpb3JpdHk7XG4gICAgY29uc3RydWN0b3IodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuICAgICAgICB0aGlzLiN0YXNrTmFtZSA9IHRhc2tOYW1lO1xuICAgICAgICB0aGlzLiN0YXNrRGVzY3JpcHRpb249IHRhc2tEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIC8vdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG4gICAgZ2V0IHRhc2tOYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiN0YXNrTmFtZTtcbiAgICB9XG4gICAgZ2V0IHRhc2tEZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy4jdGFza0Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy4jZHVlRGF0ZTtcbiAgICB9XG5cbn0iLCJcbmV4cG9ydCBjbGFzcyB0YXNrTGlzdHtcbiAgICAjdGFza0xpc3Q7XG4gICAgY29uc3RydWN0b3IobGlzdE5hbWUpe1xuICAgICAgICB0aGlzLmxpc3ROYW1lID0gbGlzdE5hbWU7XG4gICAgICAgIHRoaXMuI3Rhc2tMaXN0ID0gW107XG4gICAgfVxuICAgIGFkZFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMuI3Rhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxuICAgIHJlbW92ZVRhc2sodGFzayl7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jdGFza0xpc3QuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgdGhpcy4jdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyB0b2RvbGlzdCBmcm9tIFwiLi90b2RvbGlzdC5qc1wiXG5pbXBvcnQgKiBhcyB0YXNrIGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCAqIGFzIGVsZW1lbnRzIGZyb20gXCIuL3BhZ2VlbGVtZW50cy5qc1wiO1xuXG5jb25zdCBpbmJveExpc3QgPSBuZXcgdG9kb2xpc3QudGFza0xpc3Q7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJbmJveCgpe1xuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLXRpdGxlJyk7XG4gICAgc2VjdGlvblRpdGxlLmlubmVySFRNTCA9IFwiSW5ib3hcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUb2RheSgpe1xuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLXRpdGxlJyk7XG4gICAgc2VjdGlvblRpdGxlLmlubmVySFRNTCA9IFwiVG9kYXlcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dVcGNvbWluZygpe1xuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLXRpdGxlJyk7XG4gICAgc2VjdGlvblRpdGxlLmlubmVySFRNTCA9IFwiVXBjb21pbmdcIjtcbn1cblxuLy9cbi8vIFNob3cgQWRkIFRhc2sgRm9ybSBCdXR0b24gRnVuY3Rpb25hbGl0eVxuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQWRkVGFza1BvcHVwQnRuKCl7XG4gICAgY29uc3QgY3JlYXRlVGFzayA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnZGl2JywgJ2NyZWF0ZS10YXNrJykuZ2V0O1xuICAgIGNvbnN0IGFkZFN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBhZGRTeW1ib2wuY2xhc3NOYW1lID0gJ2ZhLXRoaW4gZmEtcGx1cyc7XG4gICAgY29uc3QgY3JlYXRlRGVzYyA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnZGl2JywnJywnQWRkIFRhc2snKS5nZXQ7XG4gICAgW2FkZFN5bWJvbCwgY3JlYXRlRGVzY10uZm9yRWFjaChlbGVtZW50ID0+IGNyZWF0ZVRhc2suYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuICAgIHJldHVybiBjcmVhdGVUYXNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FkZFRhc2tGb3JtKCl7XG4gICAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1jb250ZW50Jyk7XG4gICAgY29uc3QgYWRkVGFza1BvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10YXNrJyk7XG4gICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IGdlbmVyYXRlQWRkVGFza0Zvcm0oKTtcbiAgICBhZGRUYXNrUG9wdXBCdG4ucmVtb3ZlKCk7XG4gICAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG4gICAgYWRkVGFza0Zvcm1FdmVudExpc3RlbmVycygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybUxpc3RlbmVyKCl7XG4gICAgY29uc3QgY3JlYXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdGFzaycpO1xuICAgIGNyZWF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93QWRkVGFza0Zvcm0oKSk7XG59XG5cbi8vXG4vLyBBZGQgVGFzayBGb3JtIEZ1bmN0aW9uYWxpdHlcbi8vXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVBZGRUYXNrSW5wdXRGaWVsZHMoKXtcbiAgICBjb25zdCBhZGRUYXNrSW5wdXRDb250YWluZXIgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2RpdicsJ2FkZC10YXNrLWlucHV0LWNvbnRhaW5lcicpLmdldDtcblxuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza05hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRhc2tOYW1lSW5wdXQuY2xhc3NOYW1lID0gJy50YXNrTmFtZUlucHV0JztcblxuICAgIGNvbnN0IHRhc2tEZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRhc2tEZXNjSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2tEZXNjSW5wdXQnO1xuICAgIHRhc2tEZXNjSW5wdXQuaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uJztcblxuICAgIGNvbnN0IGlucHV0QnV0dG9ucyA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnZGl2JywgJ2lucHV0LWJ1dHRvbnMnKS5nZXQ7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2tEdWVEYXRlJztcblxuICAgIGlucHV0QnV0dG9ucy5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgW3Rhc2tOYW1lSW5wdXQsIHRhc2tEZXNjSW5wdXQsIGlucHV0QnV0dG9uc10uZm9yRWFjaChcbiAgICAgICAgZWxlbWVudCA9PiBhZGRUYXNrSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuXG4gICAgcmV0dXJuIGFkZFRhc2tJbnB1dENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQWRkVGFza0J1dHRvbnMoKXtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9ucyA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnZGl2JywnYWRkLXRhc2stYnV0dG9ucycpLmdldDtcblxuICAgIGNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRUYXNrQnRuLmNsYXNzTmFtZSA9ICdzdWJtaXQtdGFzayc7XG4gICAgc3VibWl0VGFza0J0bi5pbm5lckhUTUwgPSAnQWRkIFRhc2snO1xuXG4gICAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbFRhc2tCdG4uY2xhc3NOYW1lID0gJ2NhbmNlbC10YXNrJztcbiAgICBjYW5jZWxUYXNrQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnO1xuXG4gICAgW3N1Ym1pdFRhc2tCdG4sIGNhbmNlbFRhc2tCdG5dLmZvckVhY2goZWxlbWVudCA9PiBhZGRUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZChlbGVtZW50KSk7XG5cbiAgICByZXR1cm4gYWRkVGFza0J1dHRvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUFkZFRhc2tGb3JtKCl7XG4gICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudChcImRpdlwiLFwiYWRkLXRhc2stY29udGFpbmVyXCIpLmdldDtcbiAgICBjb25zdCBhZGRUYXNrSW5wdXRDb250YWluZXIgPSBnZW5lcmF0ZUFkZFRhc2tJbnB1dEZpZWxkcygpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b25zID0gZ2VuZXJhdGVBZGRUYXNrQnV0dG9ucygpO1xuICAgIFthZGRUYXNrSW5wdXRDb250YWluZXIsIGFkZFRhc2tCdXR0b25zXS5mb3JFYWNoKGVsZW1lbnQgPT4gYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KSk7XG4gICAgcmV0dXJuIGFkZFRhc2tDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tGb3JtRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICBjb25zdCBjYW5jZWxUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC10YXNrJyk7XG4gICAgY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtdGFzaycpO1xuXG4gICAgY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbmNlbFRhc2soKSk7XG4gICAgc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN1Ym1pdFRhc2soKSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVBZGRUYXNrRm9ybSgpe1xuICAgIGNvbnN0IHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tY29udGVudCcpO1xuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBhZGRUYXNrUG9wdXBCdG4gPSBnZW5lcmF0ZUFkZFRhc2tQb3B1cEJ0bigpO1xuICAgIGFkZFRhc2tDb250YWluZXIucmVtb3ZlKCk7XG4gICAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza1BvcHVwQnRuKTtcbiAgICBjcmVhdGVUYXNrRm9ybUxpc3RlbmVyKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soKXtcbiAgICBjb25zb2xlLmxvZyhnZXRJbnB1dFZhbHVlcygpKTtcbiAgICBoaWRlQWRkVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZXMoKXtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2NsYXNzPVwiLnRhc2tOYW1lSW5wdXRcIl0nKTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRGVzY0lucHV0Jyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRHVlRGF0ZScpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tOYW1lKVxuICAgIHJldHVybiBbdGFza05hbWUudmFsdWUsIHRhc2tEZXNjLnZhbHVlLCBkdWVEYXRlLnZhbHVlXTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsVGFzaygpe1xuICAgIGhpZGVBZGRUYXNrRm9ybSgpO1xufVxuXG5cblxuLypcbmNsYXNzIEFkZFRhc2tJbnB1dHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmFkZFRhc2tJbnB1dENvbnRhaW5lciA9IG5ldyBlbGVtZW50cy5wYWdlRWxlbWVudCgnZGl2JywnYWRkLXRhc2staW5wdXQtY29udGFpbmVyJykuZ2V0O1xuICAgICAgICB0aGlzLnRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMudGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHRoaXMuaW5wdXRCdXR0b25zID0gbmV3IGVsZW1lbnRzLnBhZ2VFbGVtZW50KCdkaXYnLCAnaW5wdXQtYnV0dG9ucycpLmdldDtcbiAgICAgICAgdGhpcy5kYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgIHRoaXMuYWRkVGFza0J1dHRvbnMgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoJ2RpdicsJ2FkZC10YXNrLWJ1dHRvbnMnKS5nZXQ7XG4gICAgICAgIHRoaXMuc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLmNhbmNlbFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICB0aGlzLmFkZFRhc2tDb250YWluZXIgPSBuZXcgZWxlbWVudHMucGFnZUVsZW1lbnQoXCJkaXZcIixcImFkZC10YXNrLWNvbnRhaW5lclwiKS5nZXQ7XG4gICAgfVxuICAgICNnZW5lcmF0ZUFkZFRhc2tJbnB1dEZpZWxkcygpe1xuICAgICAgICB0aGlzLnRhc2tOYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGhpcy50YXNrTmFtZUlucHV0LmNsYXNzTmFtZSA9ICcudGFza05hbWVJbnB1dCc7XG4gICAgICAgIHRoaXMudGFza0Rlc2NJbnB1dC5jbGFzc05hbWUgPSAndGFza0Rlc2NJbnB1dCc7XG4gICAgICAgIHRoaXMudGFza0Rlc2NJbnB1dC5pbm5lckhUTUwgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICB0aGlzLmRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICB0aGlzLmlucHV0QnV0dG9ucy5hcHBlbmRDaGlsZCh0aGlzLmRhdGVJbnB1dCk7XG4gICAgXG4gICAgICAgIFt0aGlzLnRhc2tOYW1lSW5wdXQsIHRoaXMudGFza0Rlc2NJbnB1dCwgdGhpcy5pbnB1dEJ1dHRvbnNdLmZvckVhY2goXG4gICAgICAgICAgICBlbGVtZW50ID0+IHRoaXMuYWRkVGFza0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICAjZ2VuZXJhdGVBZGRUYXNrQnV0dG9ucygpe1xuICAgICAgICB0aGlzLnN1Ym1pdFRhc2tCdG4uY2xhc3NOYW1lID0gJ3N1Ym1pdC10YXNrJztcbiAgICAgICAgdGhpcy5zdWJtaXRUYXNrQnRuLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XG4gICAgICAgIHRoaXMuY2FuY2VsVGFza0J0bi5jbGFzc05hbWUgPSAnY2FuY2VsLXRhc2snO1xuICAgICAgICB0aGlzLmNhbmNlbFRhc2tCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCc7XG4gICAgXG4gICAgICAgIFt0aGlzLnN1Ym1pdFRhc2tCdG4sIFxuICAgICAgICAgICAgdGhpcy5jYW5jZWxUYXNrQnRuXS5mb3JFYWNoKGVsZW1lbnQgPT4gdGhpcy5hZGRUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZChlbGVtZW50KSk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCl7XG4gICAgICAgIHRoaXMuI2dlbmVyYXRlQWRkVGFza0lucHV0RmllbGRzKCk7XG4gICAgICAgIHRoaXMuI2dlbmVyYXRlQWRkVGFza0J1dHRvbnMoKTtcbiAgICAgICAgW3RoaXMuYWRkVGFza0lucHV0Q29udGFpbmVyLCB0aGlzLmFkZFRhc2tidXR0b25zXS5mb3JFYWNoKFxuICAgICAgICAgICAgZWxlbWVudHMgPT4gdGhpcy5hZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICBzaG93KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRhc2tDb250YWluZXI7XG4gICAgfVxufVxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=