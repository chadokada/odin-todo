 import * as list from './todolist.js';
 import * as project from './project.js';
 import * as task from './task.js';

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

export function addProject(name, taskList = ''){
    let userList = getList();
    let newProject = new project.Project(name);
    if (taskList){
        newProject.data.taskList = taskList;
    }
    userList.addProject(name, newProject)
    localStorage.setItem('userList', userList.toJson())
}

export function getProject(projectName){
    if (projectExists(projectName)){
        let userList = getList();
        let serializedProject = userList.data.projects[projectName];
        let newProject = new project.Project();

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
    let newTask = new task.Task(taskName, taskDesc, dueDate, projectName);

    currentProject.addTask(newTask);
    userList.data.projects[projectName] = currentProject;
    localStorage.setItem('userList', userList.toJson());
}

export function deserializeTask(serializedTask){
    let unserializedTask = new task.Task();
    unserializedTask.fromJson(serializedTask);
    return unserializedTask;
}

function deserializeTaskList(serializedList){
    for (let i = 0; i < serializedList.length; i++){
        let _task = new task.Task();
        let taskJSON = serializedList[i];
        _task.fromJson(taskJSON);
        serializedList[i] = _task;
    }
    return serializedList;
}

export function editTask(projectName, taskID, taskName, taskDesc, taskDate){
    let project = getProject(projectName);
    let taskList = project.data.taskList;
    let task = taskList[taskID];

    task.data.name = taskName;
    task.data.description = taskDesc;
    task.data.dueDate = taskDate;

    let _taskList = deserializeTaskList(taskList);
    addProject(projectName, _taskList)
}

export function deleteTask(projectName, task){
    let project = getProject(projectName);
    project.removeTask(task);
    addProject(projectName, project.tasks);
}