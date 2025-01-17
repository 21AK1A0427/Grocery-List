const groceryInput = document.getElementById("groceryInput");
const addButton = document.getElementById("addButton");
const groceryList = document.getElementById("groceryList");

addButton.addEventListener("click", addGroceryItem);

function addGroceryItem() {
  const itemText = groceryInput.value.trim();

  if (itemText === "") {
    alert("Please enter a grocery item!");
    return;
  }

  const listItem = document.createElement("li");

  // Create item text
  const span = document.createElement("span");
  span.textContent = itemText;

  // Create action buttons
  const actionButtons = document.createElement("div");
  actionButtons.classList.add("action-buttons");

  const completeButton = document.createElement("button");
  completeButton.innerHTML = "✔";
  completeButton.classList.add("complete");
  completeButton.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "✖";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", () => {
    listItem.remove(); // Correctly removes the item from the list
  });

  actionButtons.appendChild(completeButton);
  actionButtons.appendChild(deleteButton);

  listItem.appendChild(span);
  listItem.appendChild(actionButtons);

  groceryList.appendChild(listItem);

  // Clear input field
  groceryInput.value = "";
}

// Optional: Focus on the input field after adding an item
groceryInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addGroceryItem();
  }
});
