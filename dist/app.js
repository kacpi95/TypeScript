const tasksContainerElement = document.querySelector('.tasks');
const tasks = ['Wyrzucić śmeici', 'Pójść na siłkę', 'Nakarmić koty'];
const render = () => {
    tasks.forEach((task) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
render();
