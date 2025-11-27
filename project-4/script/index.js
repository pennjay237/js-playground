const taskTitleInput = document.getElementById("taskTitle");
const taskCategoryInput = document.getElementById("taskCategory");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterCategory = document.getElementById("filterCategory");
const searchTaskInput = document.getElementById("searchTask");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
