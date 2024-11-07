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
