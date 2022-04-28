 import * as list from './todolist.js';
 import * as project from './project.js';
 import * as task from './task.js';

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


export function createList(){
    const userList = new list.List();
    localStorage.setItem('userList', userList.toJson());
}

function getList(){
    const userList = new list.List();
    userList.fromJson(localStorage.getItem('userList'));
    return userList;
}

export function addProject(name){
    const userList = getList();
    const newProject = new project.ProjectNew(name);
    userList.addProject(name, newProject)
    localStorage.setItem('userList', userList.toJson())
}

export function getProject(projectName){
    let userList = getList();
    let serializedProject = userList.data.projects[projectName];
    let newProject = new project.ProjectNew();

    newProject.fromJson(serializedProject);
    return newProject
}

export function addTask(projectName, taskName, taskDesc, dueDate){
    let userList = getList();
    let currentProject = getProject(projectName);

    let newTask = new task.taskNew(taskName, taskDesc, dueDate, projectName);

    currentProject.addTask(newTask);
    userList.data.projects[projectName] = currentProject;
    localStorage.setItem('userList', userList.toJson());
}

export function getTask(serializedTask){
    let unserializedTask = new task.taskNew();
    unserializedTask.fromJson(serializedTask);
    return unserializedTask;
}