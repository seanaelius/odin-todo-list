import "./styles.css"
import create_element from "./components/create-element"

//########################### TEST CREATE H1 w/ CLASS LIST AND TEXT ###########################
export const content = document.querySelector("#content")
content.appendChild(create_element("h1",['introduction','title'],"Hello"))

import {createToDo, dueDate} from "./components/create-todo";
import project from "./components/create-project";

let task1 = createToDo("Task1","Task1Desc",dueDate(2020,1,30))
let task2 = createToDo("Task2","Task2Desc",dueDate(2020,1,31))

let Proj1 = new project("Proj1")

Proj1.addTask(task1)
Proj1.addTask(task2)

console.log(Proj1.title)
console.log(Proj1.displayList())