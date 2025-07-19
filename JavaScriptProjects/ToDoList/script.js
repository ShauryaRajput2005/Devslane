
let addbtn = document.querySelector("#add");
let content = document.querySelector("#task");
let container = document.getElementById("task-container");
const input = document.getElementById("task");
const addButton = document.getElementById("add");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addButton.click();
  }
});


addbtn.addEventListener("click", function () {
    let task = document.createElement('div');
    task.classList.add('task');


    let li = document.createElement('li');
    li.innerText = `${content.value}`;
    li.classList.add('item');

    task.appendChild(li);

    let check = document.createElement("button");
    check.innerHTML = "<i class='fa-solid fa-check'></i>";
    check.innerText = "✅"
    check.classList.add('check-task');
    task.appendChild(check);


    let del = document.createElement("button");
    del.innerHTML = "<i class='fa-solid fa-trash'></i>";
    del.classList.add('delete-task');
    del.innerText = "⛔"
    task.appendChild(del);

    if (content.value === "") {
        alert("Please Enter a task")
    } else {
        container.appendChild(task);
    }

    content.value = "";

    del.addEventListener("click", function () {
        container.removeChild(task);
    })
});