const inputOne: HTMLInputElement = document.querySelector('#input1');
const inputTwo: HTMLInputElement = document.querySelector('#input2');
const btn = document.querySelector('#buttonAdd');

btn.addEventListener('click', () => {
  let one: number = Number(inputOne.value);
  let two: number = Number(inputTwo.value);
  console.log(one + two);
});
