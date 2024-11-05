import "./styles.css"

import { create_element } from "./components/create-element"

//########################### TEST CREATE H1 w/ CLASS LIST AND TEXT ###########################
const content = document.querySelector("#content")
content.appendChild(create_element("h1",['introduction','title'],"Hello"))