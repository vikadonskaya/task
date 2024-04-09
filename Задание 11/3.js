const form = document.querySelector(".create-task-block");
const tasksList = document.querySelector(".tasks-list");
const input = document.querySelector(".create-task-block_input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText !== "") {
    const id = Date.now();
    const newTask = {
      id: id,
      text: taskText,
    };
    tasks.push(newTask);

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.setAttribute("data-id", id);
    taskElement.textContent = taskText;

    tasksList.appendChild(taskElement);

    input.value = "";
  }
});
