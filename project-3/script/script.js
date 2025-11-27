document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "Text changed successfully!";
});


document.getElementById("changeColorBtn").addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("box").style.background = randomColor;
});


document.getElementById("addItemBtn").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("myList").appendChild(li);
});


document.getElementById("toggleBoxBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.style.display = box.style.display === "none" ? "block" : "none";
});
