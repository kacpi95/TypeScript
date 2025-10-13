const btn = document.querySelector('#button');
const calculate = (originalPrice, hasDiscount) => {
    return hasDiscount ? originalPrice * 0.8 : originalPrice;
};
btn.addEventListener('click', () => {
    const originalPrice = 50;
    const hasDiscount = new URLSearchParams(window.location.search).get('discount') === 'true';
    console.log(calculate(originalPrice, hasDiscount));
});
