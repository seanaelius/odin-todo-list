export {createToDo, dueDate}
import { compareAsc, format } from "date-fns";

class ToDo {

    constructor(title, desc, date, prio, proj = "default"){
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.prio = prio;
        this.proj = proj;
    }

    changePrio(prio) {
        this.prio = prio
    }

}

function createToDo(name, desc, due, prio) {
    let task = new ToDo(`${name}`,`${desc}`,due,`${prio}`)
    return task
}

function dueDate(year, month, day){  
    let date = format(new Date(year,month,day), "yyyy-MM-dd")
    return date
}

/*
To-Do's will be created as objects, for this to work we need an object constructor.

A to-do will have the following parameters:
title
description
dueDate
priority

Nice to have:
notes
checklist

We now need to create a class/object constructor that when called will create an object and console.log it to test, and create another class/object constructor that
will manipulate the DOM.

*/