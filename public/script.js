const title = document.getElementById("title");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

async function getTasks() {
    const response = await fetch("/tasks");
    const tasks = await response.json();

    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");

        li.innerText = task.title;

        if (task.completed) {
            li.classList.add("completed");
        }

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";

        editBtn.onclick = async () => {
            const newTitle = prompt("Enter new task name", task.title);

            if (newTitle === null || newTitle.trim() === "") {
                return;
            }

            const response = await fetch(`/tasks/${task.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: newTitle.trim()
                })
            });

            if (!response.ok) {
                alert("Task is not updated");
                return;
            }

            getTasks();
        };

        // Complete button
        const completeBtn = document.createElement("button");
        completeBtn.innerText = task.completed ? "Undo" : "Complete";

        completeBtn.onclick = async () => {
            const response = await fetch(`/tasks/${task.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    completed: !task.completed
                })
            });

            if (!response.ok) {
                alert("Task is not updated");
                return;
            }

            getTasks();
        };

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.onclick = async () => {
            const confirmDelete = confirm("Are you sure to delete this task ?");

            if (!confirmDelete) {
                return;
            }

            const response = await fetch(`/tasks/${task.id}`, {
                method: "DELETE"
            });

            if (!response.ok) {
                alert("Task is not deleted");
                return;
            }

            getTasks();
        };

        li.appendChild(editBtn);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

// Add task
addBtn.onclick = async () => {
    const taskTitle = title.value.trim();

    if (taskTitle === "") {
        alert("Enter task title");
        return;
    }

    const response = await fetch("/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: taskTitle
        })
    });

    if (!response.ok) {
        alert("Task is not added");
        return;
    }

    title.value = "";

    getTasks();
};

// Show tasks when page opens
getTasks();