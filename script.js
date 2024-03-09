
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
    taskList.appendChild(li);
    taskInput.value = "";
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }
  