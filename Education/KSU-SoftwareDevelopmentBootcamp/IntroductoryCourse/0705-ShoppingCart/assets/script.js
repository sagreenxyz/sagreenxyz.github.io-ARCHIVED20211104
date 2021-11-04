// #TODO Add a second item to the shopping cart through the HTML/CSS. Write functionality to control the second item.

let debug = false;

let quantity;
let price;

let unitPrice = document.querySelector('.unit-price');
let btnCheckout = document.querySelector('.btn-checkout');
let subtotalBefore = document.querySelector('.subtotal-before-tax');
let productQuantity = document.querySelector('.total-quantity');

let quantityDown = document.querySelector('#quantity-down');
quantityDown.addEventListener('click', function(){
    decQuantity();
})

let quantityUp = document.querySelector('#quantity-up');
quantityUp.addEventListener('click', function(){
    incQuantity();
})

function strQuantity(x){
    return 'Quantity: ' + x;
}

// Initializations
quantity = 0;
productQuantity.textContent = strQuantity(quantity);
price = Number(unitPrice.textContent.replace('$', '').replace(' each', ''));
subtotalBefore.textContent = 'Subtotal Before Tax: ' + strSubtotalPrice();

function strSubtotalPrice(){
    return '$' + (quantity * price).toFixed(2);
}

// Item Quantity Section
function incQuantity(){
    ++quantity;
    productQuantity.textContent = strQuantity(quantity);
    subtotalBefore.textContent = 'Subtotal Before Tax: ' + strSubtotalPrice();
}

function decQuantity(){
    --quantity
    if(quantity < 0){
        quantity = 0;
    }
    productQuantity.textContent = strQuantity(quantity);
    subtotalBefore.textContent = 'Subtotal Before Tax: ' + strSubtotalPrice();
}

let productImage = document.querySelector('.product-image');
let cartItemInfo = document.querySelector('.cart-item-info');

let remove = document.querySelector('.remove');
remove.addEventListener('click', function(){
    productImage.style.visibility = 'hidden';
    cartItemInfo.style.visibility = 'hidden';
    quantity = 0;
    price = 0;
})

btnCheckout.addEventListener('click', function(){
    window.alert('Checkout Button Clicked');
});


