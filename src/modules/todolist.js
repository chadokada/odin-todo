export class List{
    //#toDoListing;
    constructor(){
        this.data = {
            projects : {},
            name: 'todolist'
        };
    }
    addProject(name, project){
        this.data.projects[name] = project
    }
    //reInit(toDoList){
    //    this.toDoListing = toDoList.toDoListing;
    //    this.name = toDoList.name;
    //}
    toJson(){
        return JSON.stringify(this.data)
    }
    fromJson(json){
        this.data = JSON.parse(json);
    }
}