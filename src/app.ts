const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const btn: HTMLButtonElement = document.querySelector('.btn');
const input: HTMLInputElement = document.querySelector('#name');

const tasks: { name: string; done: boolean }[] = [
  { name: 'Wyrzucić śmeici', done: false },
  { name: 'Pójść na siłkę', done: true },
  { name: 'Nakarmić koty', done: false },
];

const render = () => {
  tasksContainerElement.innerHTML = '';
  tasks.forEach((task, index) => {
    const id: string = `task-${index}`;
    const taskElement: HTMLElement = document.createElement('li');
    const labelElement: HTMLLabelElement = document.createElement('label');

    labelElement.innerText = task.name;
    labelElement.setAttribute('for', id);

    const checkboxElement: HTMLInputElement = document.createElement('input');
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

const addTask = (taskName: string) => {
  tasks.push({ name: taskName, done: false });
  input.value = '';
};

btn.addEventListener('click', (e: Event) => {
  e.preventDefault();
  addTask(input.value);
  render();
});
render();
