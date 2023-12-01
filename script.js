let welcoming = document.getElementById("welcoming");
let addBtn = document.getElementById("addBtn");
let inputField = document.getElementById("inputField");
let ol =document.getElementById("ol");
let completed = `<span class="completed">Done</span>`;
let deleted = `<span class="deleted">X</span>`;
let dataId = 1;
// Add Task Functionality
window.addEventListener("load", ()=> {
    welcoming.textContent = "Welcome to To-Do-List"
    setTimeout(()=> {
        welcoming.textContent = 'To-Do-List App';
    }, 3000)
})

addBtn.addEventListener("click", ()=> {

    if(inputField.value != '' && inputField.value != "You have to add a task!"){
        taskList.innerHTML += `<li class="allList" data-id="${dataId++}">${inputField.value} <div>${deleted} ${completed}</div></li>`;
        inputField.value='';

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

completed.addEventListener('click', ()=> {
    
})