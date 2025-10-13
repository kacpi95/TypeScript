const inputOne = document.querySelector('#input1');
const inputTwo = document.querySelector('#input2');
const btn = document.querySelector('#buttonAdd');
btn.addEventListener('click', () => {
    let one = Number(inputOne.value);
    let two = Number(inputTwo.value);
    console.log(one + two);
});
