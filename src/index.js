import "./styles.css"
import { compareAsc, format } from "date-fns";

import create_element from "./components/create-element"

//########################### TEST CREATE H1 w/ CLASS LIST AND TEXT ###########################
export const content = document.querySelector("#content")
content.appendChild(create_element("h1",['introduction','title'],"Hello"))


import ToDo from "./components/create-todo"

let task1 = new ToDo("Task1","Task1Desc", format(new Date(2020,1,12), "yyyy-MM-dd"), "high")
let task2 = new ToDo("Task2","Task2Desc", format(new Date(2020,1,12), "yyyy-MM-dd"), "high")
let task3 = new ToDo("Task3","Task3Desc",format(new Date(2020,3,3),"yyyy-MM-dd'"), "high", "Proj1")

/*
A "project" will be an empty array that will store the "ToDos" that pertain to that specific project.
*/


function createToDo(name, desc, due, prio) {
    let task = new ToDo(`${name}`,`${desc}`,due,`${prio}`)
}

function dueDate(year, month, day){  
    let date = format(new Date(year,month,day), "yyyy-MM-dd")
    return date
}

import project from "./components/create-project";

let Proj1 = new project("Proj1")

Proj1.addTask(task1)
Proj1.addTask(task2)
console.log(Proj1.title)
console.log(Proj1.displayList())