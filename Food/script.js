// Add event listener to 'Add to Cart' buttons
var addToCartButtons = document.querySelectorAll('.food-item button');
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

// Cart items array
var cartItems = [];

function addToCart(event) {
  var foodItem = event.target.parentElement;
  var priceText = foodItem.querySelector('p').textContent;
  var price = parseFloat(priceText.match(/\d+\.\d+/)); // Extract the price as a floating-point number

  var item = {
    name: foodItem.querySelector('h3').textContent,
    price: parseFloat(priceText.split('$')[1]), // Extract the price as a floating-point number
  };
  cartItems.push(item);
  updateCart();
}

// Function to update cart
function updateCart() {
  var cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  var totalPrice = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerText = cartItems[i].name;

    // Add an element to display the price for each item
    var priceElement = document.createElement('span');
    priceElement.innerText = '  -$' + cartItems[i].price.toFixed(2); // Format price to two decimal places
    listItem.appendChild(priceElement);

    cartList.appendChild(listItem);

    totalPrice += cartItems[i].price;
  }

  // Display the total price
  document.getElementById('total-price').innerText = 'Total-Price$' + totalPrice.toFixed(2);
}

// Add event listener to 'Cart' emoji
document.querySelector('.cart-emoji').addEventListener('click', toggleCart);

// Function to show/hide cart
function toggleCart() {
  var cartContainer = document.getElementById('cart-container');
  cartContainer.classList.toggle('show-cart');
  cartContainer.classList.toggle('hidden-cart'); // Toggle the hidden cart class
}

// Add event listener to 'Place Order' button
document.getElementById('place-order-button').addEventListener('click', placeOrder);

function placeOrder() {
  var name = prompt('Please enter your full name:');
  var address = prompt('Please enter your address:');
  var phone = prompt('Please enter your phone number:');
  
  if (name && address && phone) {
    // Proceed with placing the order
    alert('Order placed successfully!\nName: ' + name + '\nAddress: ' + address + '\nPhone: ' + phone);
    cartItems = []; // Clear the cart after placing the order
    updateCart();
  } else {
    alert('Please fill in all the required information before placing the order.');
  }
}

// Initialize cart
updateCart();
