export default class project{

    constructor(title){
        this.title = title;
    }

    task_list = []

    addTask(task) {
        this.task_list.push(task)
    }

    displayList() {
        return this.task_list
    }
    
}

/*
A "project" will be an empty array that will store the "ToDos" that pertain to that specific project.
*/
