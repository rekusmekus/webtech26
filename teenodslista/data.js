let tasks = [];
let nextId = 1;

function createTask(text) {
    tasks.push({ id: nextId++, text: text.trim(), done: false });
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) task.done = !task.done;
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
}

function clearDone() {
    tasks = tasks.filter(t => !t.done);
}

function getAll() { return tasks; }
function getActiveCount() { return tasks.filter(t => !t.done).length; }
function getTotalCount() { return tasks.length; }
