const cartButton = document.querySelector("[data-cart-button]");
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");
let shoppingCart = [];

export function setupShoppingCart() {}

// remove items from cart
// show/hide the cart button when it has no items or when it goes from 0 to 1 item
// Persist accross multiple pages

// show/hide the cart when clicked
cartButton.addEventListener("click", () => {
  cartItemsWrapper.classList.toggle("invisible");
});

export function addToCart(id) {
  shoppingCart.push({ id: id, quantity: 1 });
}

// Add items from cart
// handle click event for adding
// Handle multiple or the same item in the cart
// Calculate an accurate total
