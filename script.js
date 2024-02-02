const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskList = document.getElementById("Task-list");
function addTask() {
  const taskValue = inputBox.value;
  if (inputBox.value === "") {
    alert("you must write something");
    return;
  } else {
    const task = document.createElement("div");
    task.classList.add("task");
    const taskContent = document.createElement("div");
    taskContent.classList.add("content");

    task.appendChild(taskContent);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("task-display");
    task_input_el.type = "text";
    task_input_el.value = taskValue;
    task_input_el.setAttribute("readonly", "readonly");
    taskContent.appendChild(task_input_el);

    const taskButons = document.createElement("div");
    taskButons.classList.add("buttons");

    const task_edit_el = document.createElement("button");
    task_edit_el.innerHTML = "Edit";
    task_edit_el.classList.add("Edit");

    const task_delete_el = document.createElement("button");
    task_delete_el.innerHTML = "Delete";
    task_delete_el.classList.add("Delete");

    taskButons.appendChild(task_edit_el);
    taskButons.appendChild(task_delete_el);

    task.appendChild(taskButons);

    taskList.appendChild(task);

    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText == "Edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    });

    task_delete_el.addEventListener("click", () => {
      taskList.removeChild(task);
    });
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },

  false
);
