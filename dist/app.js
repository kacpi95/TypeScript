const tasksContainerElement = document.querySelector('.tasks');
const btn = document.querySelector('.btn');
const input = document.querySelector('#name');
const tasks = ['Wyrzucić śmeici', 'Pójść na siłkę', 'Nakarmić koty'];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (e) => {
    e.preventDefault();
    const text = input.value;
    tasks.push(text);
    input.value = '';
};
btn.addEventListener('click', (e) => {
    addTask(e);
    render();
});
render();
