import { Task } from '../types/types';

export const render = (tasks: Task[], tasksContainerElement: HTMLElement) => {
  tasksContainerElement.innerHTML = '';
  tasks.forEach((task, index) => {
    const id: string = `task-${index}`;
    const taskElement: HTMLElement = document.createElement('li');
    const labelElement: HTMLLabelElement = document.createElement('label');
    if (task.category) {
      taskElement.classList.add(task.category);
    }

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
