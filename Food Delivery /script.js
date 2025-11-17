const Cart = document.getElementById('Cart-icon');
const CartMenu = document.querySelector('.Cart');
const HideMenu = document.getElementById('Close-icon');
const AddtoCart = document.querySelectorAll('.Add-to-Cart');
const ItemsCount = document.getElementById('item-Count');
const cartContainer = document.querySelector('.Cart'); // main cart container

let count = 0;

Cart.addEventListener('click', () => {
  CartMenu.style.right = '0';
});

HideMenu.addEventListener('click', () => { 
  CartMenu.style.right = '-350px';
});

AddtoCart.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    ItemsCount.innerText = count;

    const ProductMain = button.closest('.Sub-product');

    const image = ProductMain.querySelector('.img').src;
    const ProductName = ProductMain.querySelector('#PRoducts-text').innerText;
    const ProductPrice = ProductMain.querySelector('#ProductPrice').innerText;

  });
});
