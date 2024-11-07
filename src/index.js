import "./styles.css"
import create_element from "./components/create-element"

//########################### TEST CREATE H1 w/ CLASS LIST AND TEXT ###########################
export const content = document.querySelector("#content")
content.appendChild(create_element("h1",['introduction','title'],"Hello"))

import {createToDo, dueDate} from "./components/create-todo";
import project from "./components/create-project";
import createProject from "./components/create-project";

let defaultProj = createProject("default")
let completeProj = createProject("complete")

/*
LEGACY TESTING
let task1 = createToDo("Task1","Task1Desc", dueDate(2020,1,29), "high")
let task2 = createToDo("Task2","Task2Desc", dueDate(2020,1,31), "med")
let task3 = createToDo("Task3","Task3Desc", dueDate(2020,1,31), "low")

defaultProj.addTask(task1)
defaultProj.addTask(task2)
defaultProj.addTask(task3)

defaultProj.complete(task2)

task1.changePrio("low")

console.log(defaultProj)

defaultProj.incomplete(task2)
console.log(defaultProj)
*/