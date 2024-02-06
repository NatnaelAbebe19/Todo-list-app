const form = document.forms["add"];
const inputBox = form.querySelector("input");
const submitBtn = form.querySelector('button[type="submit"]');
const clearBtn = form.querySelector('button[type="button"]');
let lists = document.getElementById("lists");
let list = lists.querySelectorAll("li");
const deleteBTN = document.querySelectorAll(".delete");
const doneBTN = document.querySelectorAll(".done");
const task = document.querySelectorAll(".name");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let value = inputBox.value;

  if (value == "" || value == null) {
    alert("invalid input");
    return;
  }

  let li = document.createElement("li");
  let nameBox = document.createElement("span");
  let encloser = document.createElement("span");
  let deleteBtn = document.createElement("span");
  let doneBtn = document.createElement("span");

  nameBox.classList.add("name");
  deleteBtn.classList.add("delete");
  doneBtn.classList.add("done");

  nameBox.textContent = value;
  deleteBtn.textContent = "Delete";
  doneBtn.textContent = "Done";

  li.appendChild(nameBox);
  li.appendChild(encloser);
  encloser.appendChild(doneBtn);
  encloser.appendChild(deleteBtn);
  lists.appendChild(li);

  inputBox.value = "";
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  lists.innerHTML = "";
});
doneBTN.forEach((done) => {
  done.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.querySelector(
      ".name"
    ).innerHTML.style.textDecoration = line - through;
  });
});

lists.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className === "done") {
    let li1 =
      e.target.parentElement.parentElement.querySelector(":first-child");
    li1.style.textDecoration = "line-through";
    console.log("done");
  }
  if (e.target.className === "delete") {
    const lis = e.target.parentElement.parentElement;
    lists.removeChild(lis);
    console.log("deleted");
  }
});
