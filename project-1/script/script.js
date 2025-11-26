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
        let ageEl = document.createElement("p");
        let talentEl = document.createElement("p");

        nameEl.textContent = user.name;
        ageEl.textContent = "Age: " + user.age;
        talentEl.textContent = "Talent: " + user.talent;

        resultEl.appendChild(nameEl);
        resultEl.appendChild(ageEl);
        resultEl.appendChild(talentEl);

    } else {
        let notFoundEl = document.createElement("h3");
        notFoundEl.textContent = "Not Found";
        resultEl.appendChild(notFoundEl);
    }
});
