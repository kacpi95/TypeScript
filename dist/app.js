import { render } from './helpers/render-tasks-helper.js';
import { renderCategory } from './helpers/render-categories-helper.js';
const tasksContainerElement = document.querySelector('.tasks');
const btn = document.querySelector('.btn');
const input = document.querySelector('#name');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
const categories = ['general', 'work', 'gym', 'hobby'];
const tasks = [
    { name: 'Wyrzucić śmeici', done: false },
    { name: 'Pójść na siłkę', done: true, category: 'gym' },
    { name: 'Nakarmić koty', done: false },
];
const addTask = (task) => {
    tasks.push(task);
    input.value = '';
};
btn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask({ name: input.value, done: false, category: selectedCategory });
    render(tasks, tasksContainerElement);
});
addTask({ name: 'zrobić zakupy', done: true, category: 'hobby' });
renderCategory(categories, selectedCategory, categoriesContainerElement);
render(tasks, tasksContainerElement);
