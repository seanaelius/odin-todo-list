import "./styles.css"
import create_element from "./components/create-element"

//########################### TEST CREATE H1 w/ CLASS LIST AND TEXT ###########################
export const content = document.querySelector("#content")
content.appendChild(create_element("h1",['introduction','title'],"Hello"))

import {createToDo, dueDate} from "./components/create-todo";
import project from "./components/create-project";

let task1 = createToDo("Task1","Task1Desc", dueDate(2020,1,30), "high")
let task2 = createToDo("Task2","Task2Desc", dueDate(2020,1,31), "high")
let task3 = createToDo("Task3","Task3Desc", dueDate(2020,1,31), "high")

let defaultProj = new project("default")

defaultProj.addTask(task1)
defaultProj.addTask(task2)
defaultProj.addTask(task3)

defaultProj.complete(task2)

task1.changePrio("low")

console.log(defaultProj)

defaultProj.incomplete(task2)

console.log(defaultProj)

let completeProj = new project("completed")
