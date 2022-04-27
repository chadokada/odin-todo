export class Project{
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
