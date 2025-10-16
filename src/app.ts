import { Task, Category } from './types/types';
import  render  from './helpers/render-tasks-helper.js';
import { renderCategory } from './helpers/render-categories-helper.js';

const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const btn: HTMLButtonElement = document.querySelector('.btn');
const input: HTMLInputElement = document.querySelector('#name');
const categoriesContainerElement: HTMLElement =
  document.querySelector('.categories');

let selectedCategory: Category;

const categories: Category[] = ['general', 'work', 'gym', 'hobby'];

const tasks: Task[] = [
  { name: 'Wyrzucić śmeici', done: false },
  { name: 'Pójść na siłkę', done: true, category: 'gym' },
  { name: 'Nakarmić koty', done: false },
];

const addTask = (task: Task) => {
  tasks.push(task);
  input.value = '';
};

btn.addEventListener('click', (e: Event) => {
  e.preventDefault();

  addTask({ name: input.value, done: false, category: selectedCategory });
  render(tasks, tasksContainerElement);
});
addTask({ name: 'zrobić zakupy', done: true, category: 'hobby' });
renderCategory(categories, selectedCategory, categoriesContainerElement);
render(tasks, tasksContainerElement);
