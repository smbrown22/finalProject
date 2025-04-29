"use strict"; 
let btn = document.getElementById('submit')

// Constructs the class 'Task', which will be where objects are underneath  

class Task {
    constructor(taskGiven, priority, isImportant) {
        this.taskGiven = taskGiven
        this.priority = priority
        this.isImportant = isImportant 
    }
}

function taskAdd() {
    // creates task for user by taking inputs 
    let x = new Task(window.prompt("What's your task?") , window.prompt("What's the priority") , window.confirm("Is it important?"))
    
    // creates where the output will be displayed 
    let newTask = document.createElement('p')
    let deleteButton = document.createElement('button')
    // makes obj string to be outputted 
    newTask.textContent = JSON.stringify(x)
    deleteButton.textContent = "Delete"
    // if isImportant is checked: color will be red 
    if (x.taskGiven = true) {
        console.log("true")
    }
    document.body.appendChild(newTask)
}

