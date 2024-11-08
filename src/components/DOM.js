import { content } from "..";
export {updatePage}

function updatePage(project){  
    let task_list = project[0] 
    for (let task in task_list) {
        console.log(task)
    }
}