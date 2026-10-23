
let tasks = [];
let nextId = 1;

export const getTasks = (req, res) => {
    res.json(tasks);
};

export const createTask = (req, res) => {
    const { title } = req.body;

    if (typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
            error: "Task title is required"
        });
    }

    const task = {
        id: nextId++,
        title: title.trim(),
        completed: false
    };

    tasks.push(task);

    res.status(201).json(task);
};

export const updateTask = (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
        if (typeof title !== "string" || !title.trim()) {
            return res.status(400).json({
                error: "Title must be a non-empty string"
            });
        }

        task.title = title.trim();
    }

    if (completed !== undefined) {
        if (typeof completed !== "boolean") {
            return res.status(400).json({
                error: "Completed must be true or false"
            });
        }

        task.completed = completed;
    }

    res.json(task);
};

export const deleteTask = (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    tasks.splice(index, 1);

    res.json({ message: "Task deleted successfully" });
};
