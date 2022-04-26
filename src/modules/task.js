import {format} from 'date-fns';

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
        if (this.#dueDate){
            return this.#dueDate;
        } else{
            return 'No Date';
        }
    }
    get displayDueDate(){
        if (this.#dueDate){
            return format(new Date(this.#dueDate + " 00:00"),'L/d/yyyy');
        }else{
            return 'No Date';
        }
    }
}