let jsonData;

window.addEventListener("load", () => {
    fetch("data.json")
    .then(res => res.json())
    .then(data => jsonData = data)
    .catch(err => console.log(err));
});

let inputEl = document.querySelector("input");
let buttonEl = document.querySelector("button");
let resultEl = document.querySelector("#result");

buttonEl.addEventListener("click", () => {
    let id = Number(inputEl.value); 

    let user = jsonData.find(item => item.id === id);

    resultEl.replaceChildren();

    if (user) {
        let nameEl = document.createElement("h2");

        nameEl.textContent = user.name;

        resultEl.appendChild(nameEl);

    } else {
        let notFoundEl = document.createElement("h3");
        notFoundEl.textContent = "Not Found";
        resultEl.appendChild(notFoundEl);
    }
});
