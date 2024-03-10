function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            this.parentElement.classList.add("completed");
        } else {
            this.parentElement.classList.remove("completed");
        }
    });

    var textNode = document.createTextNode(taskInput.value);
    li.appendChild(checkbox);
    li.appendChild(textNode);

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Apply styling to create space between checkbox and delete button
    deleteBtn.style.marginLeft = '10px'; // Adjust the value as needed

    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}
