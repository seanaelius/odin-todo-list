import "./styles.css"

import create_element from "./components/create-element"
import create_project from "./components/create-project"
import create_todo from "./components/create-todo"

//########################### TEST CREATE H1 w/ CLASS LIST AND TEXT ###########################
export const content = document.querySelector("#content")
content.appendChild(create_element("h1",['introduction','title'],"Hello"))