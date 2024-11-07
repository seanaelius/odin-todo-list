class project{

    constructor(title){
        this.title = title;
    }

    task_list = []
    completed_task_list = []

    addTask(task) {
        this.task_list.push(task)
        task.proj = this.title
    }

    complete(task) {
        let index = this.task_list.indexOf(task)
        this.task_list.splice(index, 1)
        this.completed_task_list.push(task)
    }

    incomplete(task) {
        let index = this.task_list.indexOf(task)
        this.completed_task_list.splice(index, 1)
        this.task_list.push(task)
    }

//########################### DEBUGGING ########################### 
    displayList() {
        return this.task_list
    }

    displayCompletedList() {
        return this.completed_task_list
    }

}

/*
A "project" will be an empty array that will store the "ToDos" that pertain to that specific project.
*/

export default function createProject(title) {
    let proj = new project(`${title}`)
    return proj
}