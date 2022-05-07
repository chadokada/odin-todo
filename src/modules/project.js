import {isToday} from 'date-fns';
import {parseISO} from 'date-fns';
import * as task from './task.js';

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
    todayTasks(){
        let todayTaskList = [];
        for (let task of this.data.taskList){
            let dueDate = parseISO(task.data.dueDate);
            let isTaskToday = isToday(dueDate);
            isTaskToday ? todayTaskList.push(task) : null;
        }
        return todayTaskList;
    }


    toJson(){
        return JSON.stringify(this.data);
    }
    fromJson(json){
        this.data = json.data;
    }
}