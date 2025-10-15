export const render = (tasks, tasksContainerElement) => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const id = `task-${index}`;
        const taskElement = document.createElement('li');
        const labelElement = document.createElement('label');
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        labelElement.innerText = task.name;
        labelElement.setAttribute('for', id);
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener('change', () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
