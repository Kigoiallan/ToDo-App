const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
    }else {
        alert("Please put in a Task");
    }
}
