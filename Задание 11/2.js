const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  { id: "1138465078062", completed: false, text: "Выполнить тест после урока" },
  { id: "1138465078063", completed: false, text: "Выполнить ДЗ после урока" },
];

const tasksList = document.querySelector(".tasks-list");

const renderTasks = () => {
  tasks.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.setAttribute("data-task-id", task.id);

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("task-item＿main-container");

    const mainContent = document.createElement("div");
    mainContent.classList.add("task-item＿main-content");

    const form = document.createElement("form");
    form.classList.add("checkbox-form");

    const checkbox = document.createElement("input");
    checkbox.classList.add("checkbox-form＿checkbox");
    checkbox.type = "checkbox";
    checkbox.id = `task-${task.id}`;

    const label = document.createElement("label");
    label.htmlFor = `task-${task.id}`;

    const text = document.createElement("span");
    text.classList.add("task-item＿text");
    text.textContent = task.text;

    form.appendChild(checkbox);
    form.appendChild(label);
    mainContent.appendChild(form);
    mainContent.appendChild(text);
    mainContainer.appendChild(mainContent);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
      "task-iten＿delete-button",
      "default-button",
      "delete-button"
    );
    deleteButton.setAttribute("data-delete-task-id", task.id);
    deleteButton.textContent = "Удалить";

    taskItem.appendChild(mainContainer);
    taskItem.appendChild(deleteButton);

    tasksList.appendChild(taskItem);
  });
};

renderTasks();
