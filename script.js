"use strict";

// defines the elements that will be used 
let btn = document.getElementById('submit')
let taskList = document.getElementById('taskList')
let taskLog = []
let completedTasks = document.getElementById('completedTasks')

console.log(Date())

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
    var x = new Task(taskText.value , "placehold" , isItImportant.value)
    var y = JSON.stringify(x)
    taskLog.push(y)
    console.log(taskLog)

    console.log(taskType.value)
    
    // creates where the output will be displayed 
    var newTask = document.createElement('p')
    var deleteButton = document.createElement('button')
    var doneBox = document.createElement('input')
    let date = Date() 

    // sets the IDS of the output displays 
    newTask.setAttribute('id' , 'newTask')
    deleteButton.setAttribute('id' , 'deleteButton')
    doneBox.setAttribute('id' , 'doneBox')
    
    // makes obj string to be outputted 
    newTask.textContent = 'Task: ' +" " + `${taskText.value}` + " ---------------- " + 'Priority: ' + " " + `${taskType.value}` + " ---------------- " +'Date Added: ' + `'${date}'`
    // console.log(JSON.stringify(x))

    // Clarification on what button does 
    deleteButton.textContent = "Delete"
    doneBox.textContent = "Done"

    // Defines the type of the deleteButton, and adds an onclick attribute to the button that allows taskDelete to work. 
    deleteButton.setAttribute('type' , 'submit')
    deleteButton.setAttribute('onclick' , 'taskDelete(newTask=document.getElementById("newTask"), doneBox=document.getElementById("doneBox"), deleteButton=document.getElementById("deleteButton"))')
    
    // Defines the type of doneBox, and adds an onclick attribute to the box that allows taskDone to work. 
    doneBox.setAttribute('type' , 'checkbox')
    doneBox.setAttribute('onclick' , 'taskDone()')

    // if isImportant is checked: color will be red; else; color will be black 
    //console.log(isItImportant.value)
    //console.log(isItImportant.checked)
    if (isItImportant.checked == true) {
        console.log("last true")
        newTask.setAttribute('style' , 'color:red')
    }
    else {
        console.log("last false")
        newTask.setAttribute('style' , 'color:black')
    }

    // adds the output to the div
    taskList.appendChild(newTask)
    taskList.appendChild(doneBox)
    taskList.appendChild(deleteButton)



    console.log("Added item: Current log")
    console.log(taskLog)
}

function taskDelete() {
    // deletes the task AFTER the press of the deleteButton  

    taskList.removeChild(newTask)
    taskList.removeChild(doneBox)
    taskList.removeChild(deleteButton)
    

}

function taskDone() {
    let strike = document.createElement('s')
    strike.textContent = newTask.textContent
    completedTasks.appendChild(strike)
}

