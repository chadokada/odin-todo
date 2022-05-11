import {isToday} from 'date-fns';
import {parseISO} from 'date-fns';
import * as date from 'date-fns';

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
    get name(){
        return this.data.name;
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
    thisWeeksTasks(){
        let today = date.startOfToday()
        let endOfWeek = date.endOfDay(date.add(today,{days: 7}))
        let thisWeek = {};
        for (let task of this.data.taskList){
            let dueDate = parseISO(task.data.dueDate);
            if (date.isWithinInterval(dueDate, {start: today, end: endOfWeek})){
                if (thisWeek[dueDate]){
                    thisWeek[dueDate] = thisWeek[dueDate].concat([task]);
                } else {
                    thisWeek[dueDate] = [task];
                }
            }
        }
        return thisWeek;
    }
    toJson(){
        return JSON.stringify(this.data);
    }
    fromJson(json){
        this.data = json.data;
    }
}