import * as todolist from "./todolist.js"
import * as task from "./task.js";

const inboxList = new todolist.taskList;


export function showInbox(){
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.innerHTML = "Inbox";
}

export function showToday(){
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.innerHTML = "Today";
}

export function showUpcoming(){
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.innerHTML = "Upcoming";
}

