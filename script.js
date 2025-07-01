const taskInput = document.getElementById("input_field");

const listContainer = document.getElementById("list_container");

function addTask() {
    if (taskInput.value === '') {
        alert('You must write something!');
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = taskInput.value;
        console.log(taskInput.value);
        listContainer.appendChild(li);
        
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = "";
    saveData();
}


listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false)



function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}


function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();