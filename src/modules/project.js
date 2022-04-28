export class Project{
    //#taskList; #projectName
    constructor(name, index=''){
        this.name = name;
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

export class ProjectNew{
    //#taskList; #projectName
    constructor(projectName, index=''){
        this.data = {
            name : projectName,
            taskList : [],
            index : index
        }
    }
    addTask(task){
        this.data.taskList.push(task);
    }
    removeTask(task){
        const index = this.data.taskList.indexOf(task);
        this.data.taskList.splice(index, 1);
    }
    get tasks(){
        return this.data.taskList;
    }
    toJson(){
        return JSON.stringify(this.data);
    }
    fromJson(json){
        this.data = json.data;
    }
    //get projectName(){
    //    return this.projectName;
    //}
}