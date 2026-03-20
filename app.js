const taskInput  = document.getElementById("task-input");
const addBtn     = document.getElementById("add-btn");
const taskList   = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");
const taskCount  = document.getElementById("task-count");
const hintMsg    = document.getElementById("hint-msg");
const clearBtn   = document.getElementById("clear-btn");

function createTaskElement(task) {
    const li = document.createElement("li");
    li.classList.add("task-item");
    if (task.done) li.classList.add("done");

    const textSpan = document.createElement("span");
    textSpan.classList.add("task-text");
    textSpan.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "x";

    li.append(textSpan, deleteBtn);

    textSpan.addEventListener("click", () => {
        toggleTask(task.id);
        li.classList.toggle("done");
        updateUI();
    });

    deleteBtn.addEventListener("click", () => {
        deleteTask(task.id);
        li.remove();
        updateUI();
    });

    return li;
}

function renderList() {
    taskList.innerHTML = "";
    getAll().forEach(task => taskList.appendChild(createTaskElement(task)));
}

function updateUI() {
    taskCount.textContent = getActiveCount();
    emptyState.classList.toggle("visible", getTotalCount() === 0);
    taskList.classList.toggle("has-items", getTotalCount() > 0);
    clearBtn.classList.toggle("visible", getAll().some(t => t.done));
}

let hintTimer = null;
function showHint(message, type) {
    hintMsg.textContent = message;
    hintMsg.className = "hint " + type;
    clearTimeout(hintTimer);
    hintTimer = setTimeout(() => hintMsg.className = "hint", 2500);
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
        showHint("Kérlek írj be egy teendőt!", "error");
        return;
    }
    createTask(text);
    const li = createTaskElement(getAll().at(-1));
    li.classList.add("entering");
    taskList.prepend(li);
    taskInput.value = "";
    taskInput.focus();
    showHint("Feladat hozzáadva!", "success");
    updateUI();
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", e => { if (e.key === "Enter") addTask(); });
taskInput.addEventListener("focus", () => taskInput.parentElement.classList.add("focused"));
taskInput.addEventListener("blur", () => taskInput.parentElement.classList.remove("focused"));
clearBtn.addEventListener("click", () => { clearDone(); renderList(); updateUI(); });

updateUI();