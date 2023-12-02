// Add Task Functionality
window.addEventListener("load", ()=> {
    welcoming.textContent = "Welcome to To-Do-List"
    welcoming.style.transform = "scale(1.0)"
    setTimeout(()=> {
        welcoming.textContent = 'To-Do-List App';
    }, 3000)
})

//Welcoming text
let welcoming = document.getElementById("welcoming");

// +Write a task button
let addBtn = document.getElementById("addBtn");

//The field you have to enter your desired task
let inputField = document.getElementById("inputField");

//the section which holds your choosen tasks
let section =document.getElementById("taskSection");
let id = 0;
let items = document.getElementsByClassName("items");

let doneElement = `<button class="doneElement" data-id="${id}" onclick="funcDone(${id})">Done</button>`;
let doneBtn = document.getElementsByClassName("doneElement");
let deleteElement = `<button class="deleteElement" data-id="${id}" onclick="funcDelete(${id})">X</button>`;
let deleteBtn = document.getElementsByClassName("deleteElement");

addBtn.addEventListener("click", ()=> { 

    if(inputField.value != '' && inputField.value != "You have to add a task!"){
        id += 1;
        section.innerHTML += `<div class="items" data-id="${id}">${inputField.value} <div>${deleteElement} ${doneElement}</div></div>`;
        inputField.value='';
    } else if (inputField.value == 'You have to add a task!'){
        id += 0;
    }else{
        inputField.value = "You have to add a task!";
        inputField.style.color ="red";
        inputField.setAttribute("readonly", true)
        inputField.style.fontSize = "12px";
        setTimeout(()=> {
            inputField.value = '';
            inputField.style.color ="initial"
            inputField.style.fontSize = "initial"
            inputField.removeAttribute("readonly")
        }, 2000)
        }
})

function funcDone(e) {
    for (let i = 0; i < doneBtn.length; i++) {
        doneBtn[i].addEventListener("click", ()=> {
            doneBtn[i].style.display = "none";
            doneBtn[i].parentElement.parentElement.style.textDecoration = "line-through";
            doneBtn[i].parentElement.parentElement.style.color = "green";
        })

    }
}

function funcDelete(e) {
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", ()=> {
            deleteBtn[i].parentElement.parentElement.style.display = "none";
        })

    }
}
