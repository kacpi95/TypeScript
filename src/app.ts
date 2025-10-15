const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const btn: HTMLButtonElement = document.querySelector('.btn');
const input: HTMLInputElement = document.querySelector('#name');
const categoriesContainerElement: HTMLElement =
  document.querySelector('.categories');

let selectedCategory: Category;

type Category = 'general' | 'work' | 'gym' | 'hobby';
interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

const categories: Category[] = ['general', 'work', 'gym', 'hobby'];

const tasks: Task[] = [
  { name: 'Wyrzucić śmeici', done: false },
  { name: 'Pójść na siłkę', done: true, category: 'gym' },
  { name: 'Nakarmić koty', done: false },
];

const render = () => {
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
const renderCategory = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement('li');
    const radioInputElement: HTMLInputElement = document.createElement('input');

    radioInputElement.type = 'radio';
    radioInputElement.name = 'category';
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener('change', () => {
      selectedCategory = category;
    });

    const labelElement: HTMLLabelElement = document.createElement('label');
    labelElement.setAttribute('for', `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);
    categoriesContainerElement.appendChild(categoryElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
  input.value = '';
};

btn.addEventListener('click', (e: Event) => {
  e.preventDefault();

  addTask({ name: input.value, done: false, category: selectedCategory });
  render();
});
addTask({ name: 'zrobić zakupy', done: true, category: 'hobby' });
renderCategory();
render();
