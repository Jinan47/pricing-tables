const toggle = document.getElementById('billingToggle');
const price_one = document.getElementById('price-1');
const price_two = document.getElementById('price-2');
const price_three = document.getElementById('price-3');

toggle.addEventListener('change', function () {
    if (this.checked) {
        price_one.textContent = '$12.99';
        price_two.textContent = '$24.99';
        price_three.textContent = '$39.99';
    } else {
        price_one.textContent = '$9.99';
        price_two.textContent = '$19.99';
        price_three.textContent = '$29.99';
    }
});