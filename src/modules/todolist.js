
export class taskList{
    #taskList;
    constructor(listName){
        this.listName = listName;
        this.#taskList = [];
    }
    addTask(task){
        this.#taskList.push(task);
    }
    removeTask(task){
        const index = this.#taskList.indexOf(task);
        this.#taskList.splice(index, 1);
    }
}