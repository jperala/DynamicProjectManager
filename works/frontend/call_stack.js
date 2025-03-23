
let taskStack = [];
function addTask()
{
const taskInput = document.getElementById('data').value;
if (taskInput) {
    taskStack.push(taskInput);
    document.getElementById('taskInput').value = '';
    updateTaskDisplay();
}

}

function undoTask() {
    if (taskStack.length > 0) {
        taskStack.pop();
        updateTaskDisplay();
    }
}

function displayStack() {
    const stackDisplay = document.getElementById('stackDisplay');
    stackDisplay.textContent = 'Current Pipeline: ' + taskStack.join(', ');
}