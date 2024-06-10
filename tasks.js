const fs = require('fs');
const filePath = "tasks.json";

// Placeholder for task list
var taskList = [];

// Placeholder for adding a task
function addTask(task) {
    taskList = loadTasks();
    taskList.push(task);
    saveTasks(taskList);
    console.log(`Task added: ${task}`);
}

// Placeholder for viewing tasks
function viewTasks() {
    // TODO: Implement viewing tasks
    console.log('Viewing all tasks');
}

// Placeholder for removing a task
function removeTask(index) {
    // TODO: Implement removing a task
    console.log(`Task removed at index: ${index}`);
}

// Placeholder for marking a task complete
function markTaskComplete(index) {
    // TODO: Implement marking a task complete
    console.log(`Task marked complete at index: ${index}`);
}


function loadTasks() {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

// Helper function to save tasks to the file
function saveTasks(tasks) {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}

module.exports = {
    addTask,
    viewTasks,
    removeTask,
    markTaskComplete,
};
