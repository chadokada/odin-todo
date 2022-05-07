import * as project from './project.js';

export class List{
    //#toDoListing;
    constructor(){
        this.data = {
            projects : {},
            name: 'todolist'
        };
    }
    addProject(name, project){
        this.data.projects[name] = project
    }
    projectInList(checkProject){
        let projectKeys = Object.keys(this.data.projects);
        return projectKeys.includes(checkProject);
    }
    toJson(){
        return JSON.stringify(this.data)
    }
    todayTasks(){
        let todayTasks = [];
        for (let key in this.data.projects){
            let _project = new project.Project();
            _project.fromJson(this.data.projects[key]);
            todayTasks = todayTasks.concat(_project.todayTasks())
        }
        return todayTasks;
    }
    fromJson(json){
        this.data = JSON.parse(json);
    }
}