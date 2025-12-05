const taskTitleInput = document.getElementById("taskTitle");
const taskCategoryInput = document.getElementById("taskCategory");
const addTaskBtn = document.getElementById("addTaskBtn");
const filterCategory = document.getElementById("filterCategory");
const searchTaskInput = document.getElementById("searchTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  let filtered = tasks;

  if (filterCategory.value !== "All") {
    filtered = filtered.filter(task => task.category === filterCategory.value);
  }

  const searchText = searchTaskInput.value.toLowerCase();
  if (searchText) {
    filtered = filtered.filter(task =>
      task.title.toLowerCase().includes(searchText)
    );
  }

  filtered.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = `[${task.category}] ${task.title}`;
    span.style.textDecoration = task.completed ? "line-through" : "none";

    span.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addTaskBtn.addEventListener("click", () => {
  const title = taskTitleInput.value.trim();
  const category = taskCategoryInput.value;

  if (!title) {
    alert("Please enter a task title.");
    return;
  }

  tasks.push({ title, category, completed: false });
  saveTasks();
  renderTasks();
  taskTitleInput.value = "";
});
filterCategory.addEventListener("change", renderTasks);

searchTaskInput.addEventListener("input", renderTasks);

renderTasks();
