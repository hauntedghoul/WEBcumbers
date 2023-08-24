document.addEventListener("DOMContentLoaded", function() {
  const pugInput = document.getElementById("pugInput");
  const addButton = document.getElementById("addButton");
  const pugList = document.getElementById("pugList");

  addButton.addEventListener("click", function() {
    const pugName = pugInput.value.trim();

    if (pugName !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = pugName;
      pugList.appendChild(listItem);
      pugInput.value = "";
    }
  });
});