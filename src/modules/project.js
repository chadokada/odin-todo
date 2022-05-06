export class Project{
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
}