export class ToDoList{
    //#toDoListing;
    constructor(){
        this.toDoListing = {};
        this.name = 'todolist';
    }
    addProject(projectKey, project){
        this.toDoListing[projectKey] = project;
    }
    reInit(toDoList){
        this.toDoListing = toDoList.toDoListing;
        this.name = toDoList.name;
    }
    testFunc(){
        console.log("yooo")
    }

}