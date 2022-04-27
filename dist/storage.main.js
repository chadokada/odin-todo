/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project{
    //#taskList; #projectName
    constructor(projectName, index=''){
        this.projectName = projectName;
        this.taskList = [];
        this.index = index;
    }
    addTaskToProject(task){
        this.taskList.push(task);
    }
    removeTask(task){
        const index = this.taskList.indexOf(task);
        this.taskList.splice(index, 1);
    }
    get tasks(){
        return this.taskList;
    }
    //get projectName(){
    //    return this.projectName;
    //}
}


/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoList": () => (/* binding */ ToDoList)
/* harmony export */ });
class ToDoList{
    //#toDoListing;
    constructor(){
        this.toDoListing = {};
        this.name = 'todolist';
    }
    addProject(projectKey, project){
        this.toDoListing[projectKey] = project;
    }
    reInit(toDoList){
        this.toDoListing = toDoList.toDoListing;
        this.name = toDoList.name;
    }
    testFunc(){
        console.log("yooo")
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
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserStorage": () => (/* binding */ UserStorage),
/* harmony export */   "addTaskToProject": () => (/* binding */ addTaskToProject),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createToDoListing": () => (/* binding */ createToDoListing),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.js */ "./src/modules/todolist.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
 
 

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

class UserStorage{

}


function createToDoListing(){
    const userToDoList = new _todolist_js__WEBPACK_IMPORTED_MODULE_0__.ToDoList();
    localStorage.setItem('userList', JSON.stringify(userToDoList));
}

function reinitToDoList(){
    const parsedList = JSON.parse(localStorage.getItem('userList'));
    const userList = new _todolist_js__WEBPACK_IMPORTED_MODULE_0__.ToDoList();
    userList.reInit(parsedList);
    return userList;
}

function createProject(projectName){
    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);
    addProjectToToDoListing(projectName, newProject);
}

function addProjectToToDoListing(projectName, project){
    const userList = reinitToDoList();
    userList.addProject(projectName, project)
    localStorage.setItem('userList', JSON.stringify(userList))
}

function retrieveProject(projectName){
    const userList = reinitToDoList();
    return userList.toDoListing[projectName];
}

function reinitProject(projectName){
    const retrievedProject = retrieveProject(projectName)
    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);
    newProject.taskList = retrievedProject.taskList;
    return newProject
}

function addTaskToProject(projectName, newTask){
    const userList = reinitToDoList();
    const currentProject = reinitProject(projectName);

    //console.log(project.projectName)

    currentProject.addTaskToProject(newTask);
    userList.toDoListing[projectName] = currentProject;
    localStorage.setItem('userList', JSON.stringify(userList));
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDakJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLENBQTJDO0FBQzNDLENBQXlDOztBQUVsQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRVA7OztBQUdPO0FBQ1AsNkJBQTZCLGtEQUFpQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsa0RBQWlCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDJCQUEyQixnREFBZTtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixnREFBZTtBQUMxQztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3RvZG9saXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2plY3R7XG4gICAgLy8jdGFza0xpc3Q7ICNwcm9qZWN0TmFtZVxuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBpbmRleD0nJyl7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgfVxuICAgIGFkZFRhc2tUb1Byb2plY3QodGFzayl7XG4gICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgcmVtb3ZlVGFzayh0YXNrKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tMaXN0LmluZGV4T2YodGFzayk7XG4gICAgICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgZ2V0IHRhc2tzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xuICAgIH1cbiAgICAvL2dldCBwcm9qZWN0TmFtZSgpe1xuICAgIC8vICAgIHJldHVybiB0aGlzLnByb2plY3ROYW1lO1xuICAgIC8vfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRvRG9MaXN0e1xuICAgIC8vI3RvRG9MaXN0aW5nO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudG9Eb0xpc3RpbmcgPSB7fTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ3RvZG9saXN0JztcbiAgICB9XG4gICAgYWRkUHJvamVjdChwcm9qZWN0S2V5LCBwcm9qZWN0KXtcbiAgICAgICAgdGhpcy50b0RvTGlzdGluZ1twcm9qZWN0S2V5XSA9IHByb2plY3Q7XG4gICAgfVxuICAgIHJlSW5pdCh0b0RvTGlzdCl7XG4gICAgICAgIHRoaXMudG9Eb0xpc3RpbmcgPSB0b0RvTGlzdC50b0RvTGlzdGluZztcbiAgICAgICAgdGhpcy5uYW1lID0gdG9Eb0xpc3QubmFtZTtcbiAgICB9XG4gICAgdGVzdEZ1bmMoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b29vXCIpXG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIgaW1wb3J0ICogYXMgdG9kb2xpc3QgZnJvbSAnLi90b2RvbGlzdC5qcyc7XG4gaW1wb3J0ICogYXMgcHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgdmFyIHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VyU3RvcmFnZXtcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb0RvTGlzdGluZygpe1xuICAgIGNvbnN0IHVzZXJUb0RvTGlzdCA9IG5ldyB0b2RvbGlzdC5Ub0RvTGlzdCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTGlzdCcsIEpTT04uc3RyaW5naWZ5KHVzZXJUb0RvTGlzdCkpO1xufVxuXG5mdW5jdGlvbiByZWluaXRUb0RvTGlzdCgpe1xuICAgIGNvbnN0IHBhcnNlZExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTGlzdCcpKTtcbiAgICBjb25zdCB1c2VyTGlzdCA9IG5ldyB0b2RvbGlzdC5Ub0RvTGlzdCgpO1xuICAgIHVzZXJMaXN0LnJlSW5pdChwYXJzZWRMaXN0KTtcbiAgICByZXR1cm4gdXNlckxpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKXtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QuUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgYWRkUHJvamVjdFRvVG9Eb0xpc3RpbmcocHJvamVjdE5hbWUsIG5ld1Byb2plY3QpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Ub0RvTGlzdGluZyhwcm9qZWN0TmFtZSwgcHJvamVjdCl7XG4gICAgY29uc3QgdXNlckxpc3QgPSByZWluaXRUb0RvTGlzdCgpO1xuICAgIHVzZXJMaXN0LmFkZFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3QpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJMaXN0JywgSlNPTi5zdHJpbmdpZnkodXNlckxpc3QpKVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVByb2plY3QocHJvamVjdE5hbWUpe1xuICAgIGNvbnN0IHVzZXJMaXN0ID0gcmVpbml0VG9Eb0xpc3QoKTtcbiAgICByZXR1cm4gdXNlckxpc3QudG9Eb0xpc3RpbmdbcHJvamVjdE5hbWVdO1xufVxuXG5mdW5jdGlvbiByZWluaXRQcm9qZWN0KHByb2plY3ROYW1lKXtcbiAgICBjb25zdCByZXRyaWV2ZWRQcm9qZWN0ID0gcmV0cmlldmVQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdC5Qcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBuZXdQcm9qZWN0LnRhc2tMaXN0ID0gcmV0cmlldmVkUHJvamVjdC50YXNrTGlzdDtcbiAgICByZXR1cm4gbmV3UHJvamVjdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChwcm9qZWN0TmFtZSwgbmV3VGFzayl7XG4gICAgY29uc3QgdXNlckxpc3QgPSByZWluaXRUb0RvTGlzdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcmVpbml0UHJvamVjdChwcm9qZWN0TmFtZSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKHByb2plY3QucHJvamVjdE5hbWUpXG5cbiAgICBjdXJyZW50UHJvamVjdC5hZGRUYXNrVG9Qcm9qZWN0KG5ld1Rhc2spO1xuICAgIHVzZXJMaXN0LnRvRG9MaXN0aW5nW3Byb2plY3ROYW1lXSA9IGN1cnJlbnRQcm9qZWN0O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTGlzdCcsIEpTT04uc3RyaW5naWZ5KHVzZXJMaXN0KSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9