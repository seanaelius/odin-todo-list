import "./styles.css"
import { compareAsc, format } from "date-fns";

import create_element from "./components/create-element"
import create_project from "./components/create-project"
import create_todo from "./components/create-todo"

//########################### TEST CREATE H1 w/ CLASS LIST AND TEXT ###########################
export const content = document.querySelector("#content")
content.appendChild(create_element("h1",['introduction','title'],"Hello"))


import ToDo from "./components/create-todo"

let task1 = new ToDo("Task1","Task1Desc", format(new Date(2020,1,12), "yyyy-MM-dd"), "high")
let task2 = new ToDo("Task2","Task2Desc", format(new Date(2020,1,12), "yyyy-MM-dd"), "high")
let task3 = new ToDo("Task3","Task3Desc",format(new Date(2020,3,3),"yyyy-MM-dd'"), "high", "Proj1")

console.log(task1)
console.log(task2)
console.log(task3)