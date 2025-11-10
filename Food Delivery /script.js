const Cart = document.getElementById('Cart-icon');
const CartMenu = document.querySelector('.Cart');

Cart.addEventListener( 'click' ,(e) =>{
  CartMenu.style.right = '0';
});
const HideMenu = document.getElementById('Close-icon');
HideMenu.addEventListener( 'click' , (e)=>{
  CartMenu.style.right = '-350px'
})