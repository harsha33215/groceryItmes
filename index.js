let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery Items";
bgContainerEl.appendChild(headingEl);

let groceryItemsContainer = document.createElement("ul");
groceryItemsContainer.classList.add("list-items");
bgContainerEl.appendChild(groceryItemsContainer);

let groceryItems = [
  "milk",
  "Peanut Butter",
  "Choco Chips",
  "Tomato Sauce",
  "Cup Cakes",
  "Noodles",
];

for (let groceryItem of groceryItems) {
  let listItemsEl = document.createElement("li");
  listItemsEl.textContent = groceryItem;
  groceryItemsContainer.appendChild(listItemsEl);
}

let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "myCheckbox";
bgContainerEl.appendChild(inputEl);

let labelText = document.createElement("label");
labelText.setAttribute("for", "myCheckbox");
labelText.classList.add("label-text");
labelText.textContent = "Need Home Delivery";
bgContainerEl.appendChild(labelText);

let breakEl = document.createElement("br");
bgContainerEl.appendChild(breakEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-primary");
buttonEl.textContent = "Proceed to Pay";
bgContainerEl.appendChild(buttonEl);
