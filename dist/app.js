const tasksContainerElement = document.querySelector('.tasks');
const btn = document.querySelector('.btn');
const input = document.querySelector('#name');
const tasks = [
    { name: 'Wyrzucić śmeici', done: false },
    { name: 'Pójść na siłkę', done: true },
    { name: 'Nakarmić koty', done: false },
];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const id = `task-${index}`;
        const taskElement = document.createElement('li');
        const labelElement = document.createElement('label');
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
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
    input.value = '';
};
btn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask(input.value);
    render();
});
render();
