"use strict";

// defines the 
let btn = document.getElementById('submit')
let taskList = document.getElementById('taskList')
let taskLog = []

let taskText = document.getElementById('taskText')
let taskType = document.getElementById('taskType')
let isItImportant = document.getElementById('isImportant')

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
    var x = new Task(taskText.value , taskType.value , isItImportant.value)
    // taskLog = taskLog.push(JSON.stringify(x))
    // console.log(taskLog)
    
    // creates where the output will be displayed 
    var newTask = document.createElement('p')
    var deleteButton = document.createElement('button')
    var doneBox = document.createElement('input') 

    // sets the IDS of the output displays 
    newTask.setAttribute('id' , 'newTask')
    deleteButton.setAttribute('id' , 'deleteButton')
    doneBox.setAttribute('id' , 'doneBox')
    
    // makes obj string to be outputted 
    newTask.textContent = 'Task: ' +" " + `${taskText.value}` + " ---------------- " + 'Priority: ' + " " + `${taskType.value}` + " ---------------- " +'Date Added: '
    console.log(JSON.stringify(x))

    // Clarification on what button does 
    deleteButton.textContent = "Delete"
    doneBox.textContent = "Done"

    // Defines the type of the deleteButton, and adds an onclick attribute to the button that allows taskDelete to work. 
    deleteButton.setAttribute('type' , 'submit')
    deleteButton.setAttribute('onclick' , 'taskDelete()')
    
    // Defines the type of doneBox, and adds an onclick attribute to the box that allows taskDone to work. 
    doneBox.setAttribute('type' , 'checkbox')

    // if isImportant is checked: color will be red; else; color will be black 
    console.log(isItImportant.value)
    if (x.isImportant == 'on') {
        console.log("true")
        newTask.setAttribute('style' , 'color:red')
    }
    else {
        console.log(false)
        newTask.setAttribute('style' , 'color:black')
    }

    // adds the output to the div
    taskList.appendChild(newTask)
    taskList.appendChild(doneBox)
    taskList.appendChild(deleteButton)
}

function taskDelete() {
    // deletes the corresponding task AFTER the press of the deleteButton  
    let newTask = document.getElementById('newTask')
    let deleteButton = document.getElementById('deleteButton')
    let doneBox = document.getElementById('doneBox')
    taskList.removeChild(newTask)
    taskList.removeChild(doneBox)
    taskList.removeChild(deleteButton)
    // console.log("Deleted Task: " , taskLog)
}

