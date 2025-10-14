const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const btn: HTMLButtonElement = document.querySelector('.btn');
const input: HTMLInputElement = document.querySelector('#name');

const tasks: string[] = ['Wyrzucić śmeici', 'Pójść na siłkę', 'Nakarmić koty'];

const render = () => {
  tasksContainerElement.innerHTML = '';
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement('li');
    taskElement.innerHTML = task;
    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask = (e: Event) => {
  e.preventDefault();
  const text = input.value;
  tasks.push(text);
  input.value = '';
};

btn.addEventListener('click', (e: Event) => {
  addTask(e);
  render();
});
render();
