 import * as list from './todolist.js';
 import * as project from './project.js';
 import * as task from './task.js';


export class UserStorage{

}


export function createList(){
    let userList = localStorage.getItem('userList');
    if (userList == null){
        userList = new list.List();
        localStorage.setItem('userList', userList.toJson());
    }
}

function getList(){
    let userList = new list.List();
    userList.fromJson(localStorage.getItem('userList'));
    return userList;
}

export function projectExists(projectName){
    let userList = getList();
    return userList.projectInList(projectName);
}

export function addProject(name){
    let userList = getList();
    let newProject = new project.ProjectNew(name);
    userList.addProject(name, newProject)
    localStorage.setItem('userList', userList.toJson())
}

export function getProject(projectName){
    if (projectExists(projectName)){
        let userList = getList();
        let serializedProject = userList.data.projects[projectName];
        let newProject = new project.ProjectNew();

        newProject.fromJson(serializedProject);
        return newProject;
    }
}

export function getProjectNames(){
    let userList = getList();
    return Object.keys(userList.data.projects);
}

export function addTask(projectName, taskName, taskDesc, dueDate){
    let userList = getList();
    let currentProject = getProject(projectName);

    let newTask = new task.taskNew(taskName, taskDesc, dueDate, projectName);

    //console.log(projectName)
    //console.log(currentProject)

    currentProject.addTask(newTask);
    userList.data.projects[projectName] = currentProject;
    localStorage.setItem('userList', userList.toJson());
}

export function getTask(serializedTask){
    let unserializedTask = new task.taskNew();
    unserializedTask.fromJson(serializedTask);
    return unserializedTask;
}