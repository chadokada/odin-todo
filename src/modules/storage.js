 import * as todolist from './todolist.js';
 import * as project from './project.js';

export function storageAvailable(type) {
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

export class UserStorage{

}


export function createToDoListing(){
    const userToDoList = new todolist.ToDoList();
    localStorage.setItem('userList', JSON.stringify(userToDoList));
}

function reinitToDoList(){
    const parsedList = JSON.parse(localStorage.getItem('userList'));
    const userList = new todolist.ToDoList();
    userList.reInit(parsedList);
    return userList;
}

export function createProject(projectName){
    const newProject = new project.Project(projectName);
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
    const newProject = new project.Project(projectName);
    newProject.taskList = retrievedProject.taskList;
    return newProject
}

export function addTaskToProject(projectName, newTask){
    const userList = reinitToDoList();
    const currentProject = reinitProject(projectName);

    //console.log(project.projectName)

    currentProject.addTaskToProject(newTask);
    userList.toDoListing[projectName] = currentProject;
    localStorage.setItem('userList', JSON.stringify(userList));
}