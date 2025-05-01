"use strict";

// defines the elements that will be used 
let btn = document.getElementById('submit')
let taskList = document.getElementById('taskList')
let taskLog = []
let completedTasks = document.getElementById('completedTasks')
let whiteSpace = document.createElement('p') 
let done = document.createElement('p')
done.textContent = 'Finished Task?'

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
    var x = new Task(taskText.value , taskType.value , isItImportant.checked)
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
    doneBox.setAttribute('label', "Done")
    
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
        newTask.setAttribute('style' , 'background-color:red')
    }
    else {
        newTask.setAttribute('style' , 'color:black')
    }

    // adds the output to the div
    taskList.appendChild(newTask)
    taskList.appendChild(done)
    taskList.appendChild(doneBox)
    taskList.appendChild(whiteSpace) 
    taskList.appendChild(deleteButton)



    console.log("Added item: Current log")
    console.log(taskLog)
}

function taskDelete() {
    // deletes the task AFTER the press of the deleteButton  

    taskList.removeChild(newTask)
    taskList.removeChild(doneBox)
    taskList.removeChild(deleteButton)

    taskLog.pop()

    console.log("Deleted Item: ")
    console.log(taskLog)
    

}

function taskDone() {

    // Prevents the done box from being unclicked and still being added to TaskDone repeatedly 
    if (doneBox.checked == true) {
    let strike = document.createElement('s')
    strike.textContent = newTask.textContent
    completedTasks.appendChild(strike)
    completedTasks.appendChild(whiteSpace)
    }
    else {
        console.log("Doing nothing")
    }
}
