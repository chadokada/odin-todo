 import * as list from './todolist.js';
 import * as project from './project.js';
 import * as task from './task.js';


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