export class ToDoList{
    #toDoListing;
    constructor(){
        this.#toDoListing = {}
    }
    addProject(projectKey, project){
        this.#toDoListing[projectKey] = project
    }
    testFunc(){
        console.log("yooo")
    }

}