const Cart = document.getElementById('Cart-icon');
const CartMenu = document.querySelector('.Cart');
const HideMenu = document.getElementById('Close-icon');
const AddtoCart = document.querySelectorAll('.Add-to-Cart');
const ItemsCount = document.getElementById('item-Count');
const cartContainer = document.querySelector('.Cart'); // main cart container

Cart.addEventListener('click', () => {
  CartMenu.style.right = '0';
});

HideMenu.addEventListener('click', () => { 
  CartMenu.style.right = '-350px';
});

let count = 0;
let Cartitem = [];

AddtoCart.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    let totalocount = ItemsCount.innerText = count;

    let item = button.closest('.Product-details');
    const Images = item.querySelector('.img');
    const Name = item.querySelector('.PRoducts-text').innerText;
    const Price = item.querySelector('.ProductPrice').innerText;

    const CartItems = {
      images: Images,
      Name: Name,
      Price: Price
    }

    const NewItem = document.createElement('div');
    NewItem.innerHTML = 
    `<div class="item">
            <div class="item-image"><img src="${Images.src}" alt=""></div>
            <div class="item-details">
                <h5>${Name}</h5>
                <p>${Price}</p>
                <div class="rem-add">
                    <div class="Decrese" style="color: gray;">-</div>
                    <div class="count">1</div>
                    <div class="Increse">+</div>
                </div>
            </div>
            <div class="Delete"><svg class = "Delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></g></svg></div>
        </div>
    `;
    const Cart = document.querySelector('.Cart-item'); 
    Cart.appendChild(NewItem);

    // add all the prices
    let Amount  = Number(Price.replace('$',' '));
    let TotalAmount = 0;
    TotalAmount += Amount;
    document.getElementById('Total-Amount').innerText = TotalAmount;
    
  });
});