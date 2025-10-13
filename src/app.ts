const btn = document.querySelector('#button');

const calculate = (originalPrice: number, hasDiscount: boolean) => {
  return hasDiscount ? originalPrice * 0.8 : originalPrice;
};
btn.addEventListener('click', () => {
  const originalPrice: number = 50;
  const hasDiscount: boolean =
    new URLSearchParams(window.location.search).get('discount') === 'true';
  console.log(calculate(originalPrice, hasDiscount));
});
