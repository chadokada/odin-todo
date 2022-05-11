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
    deleteProject(projectName){
        delete this.data.projects[projectName];
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
    thisWeeksTasks(){
        let thisWeek = {};
        for (let key in this.data.projects){
            let _project = new project.Project();
            _project.fromJson(this.data.projects[key]);
            let _thisWeek = _project.thisWeeksTasks();
            for (let date in _thisWeek){
                if (thisWeek[date]){
                    thisWeek[date] = thisWeek[date].concat(_thisWeek[date]);
                } else {
                    thisWeek[date] = _thisWeek[date];
                }
            }
        }
        return thisWeek;
    }
    fromJson(json){
        this.data = JSON.parse(json);
    }
}