const tasksContainerElement: HTMLElement = document.querySelector('.tasks');

const tasks: string[] = ['Wyrzucić śmeici', 'Pójść na siłkę', 'Nakarmić koty'];

const render = () => {
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement('li');
    taskElement.innerHTML = task;
    tasksContainerElement.appendChild(taskElement);
  });
};

render()