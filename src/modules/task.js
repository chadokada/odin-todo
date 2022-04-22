export class task{
    #taskName; #taskDescription; #dueDate; //#priority;
    constructor(taskName, taskDescription, dueDate, priority){
        this.#taskName = taskName;
        this.#taskDescription= taskDescription;
        this.#dueDate = dueDate;
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