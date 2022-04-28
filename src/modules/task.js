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
    get name(){
        return this.#taskName;
    }
    get description(){
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

export class taskNew{
    constructor(taskName, taskDescription, dueDate, project='', priority=''){
        this.data = {
            name : taskName,
            description : taskDescription,
            dueDate : dueDate,
            project : project
            //this.#priority = priority;
        }
    }
    get name(){
        return this.data.name;
    }
    get description(){
        return this.data.description;
    }
    get dueDate(){
        if (this.data.dueDate){
            return this.data.dueDate;
        } else{
            return 'No Date';
        }
    }
    get displayDueDate(){
        if (this.data.dueDate){
            return format(new Date(this.data.dueDate + " 00:00"),'L/d/yyyy');
        }else{
            return 'No Date';
        }
    }
    toJson(){
        return JSON.stringify(this.data);
    }
    fromJson(json){
        this.data = json.data
    }
}