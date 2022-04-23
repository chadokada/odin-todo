export class task{
    #taskName; #taskDescription; #dueDate; //#priority;
    constructor(taskName, taskDescription, dueDate, project='', priority=''){
        this.#taskName = taskName;
        this.#taskDescription= taskDescription;
        this.#dueDate = dueDate;
        this.project = project;
        //this.#priority = priority;
    }
    get taskName(){
        return this.#taskName;
    }
    get taskDescription(){
        return this.#taskDescription;
    }
    get dueDate(){
        return this.#dueDate;
    }
}