//Menu Items:
const burger1 = ['Hamburger', 10, 'img/hamburger.jpg']
const burger2 = ['cheese burger', 12, 'img/cheeseburger.jpg'];
const friesSmall = ['small fries', 8, 'img/fries.jpg'];
const bigFries = ['Big fries', 10, 'img/fries.jpg'];
const soda = ['soda', 5, 'img/cola.jpg'];

//Cart:
let cart = []; 

function AddItem(MenuItems){
    
    let card = document.createElement('div');
    card.className = 'card';

    let container = document.createElement('div');
    container.className = 'container';

    let img = document.createElement('img');
    img.src = MenuItems[2]; 
    img.alt = MenuItems[0]; 

    container.appendChild(img);

    let details = document.createElement('p');
    details.textContent = MenuItems[0] + ' - $' + MenuItems[1]; 

    container.appendChild(details);

    let addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.addEventListener('click', function() {
        let cartItems = [MenuItems[0], MenuItems[1]];
        cart.push(cartItems);
        console.log('Item added to cart:', MenuItems[0]);
        console.log('Items in cart:', cartItems);
        priceSum();
    });
    container.appendChild(addToCartBtn);

    card.appendChild(container);
    document.body.appendChild(card);
}

// Call the function to add items
AddItem(burger1);
AddItem(burger2);
AddItem(friesSmall);
AddItem(bigFries);
AddItem(soda);

function priceSum() {
    let total = 0;
    for (let i = 0; i <cartItems.length; i++){
        total += cartItems[i][1];
    }
    console.log('Total:', total)
}