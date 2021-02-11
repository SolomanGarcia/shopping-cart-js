import items from "./items.json";
import formatCurrency from "./util/formatCurrency.js";

const cartButton = document.querySelector("[data-cart-button]");
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");
let shoppingCart = [];
const IMAGE_URL = "https://dummyimage.com/210x130";
const cartItemTemplate = document.querySelector("#cart-item-template");
const cartItemContainer = document.querySelector("[data-cart-items]");

export function setupShoppingCart() {}

cartButton.addEventListener("click", () => {
  cartItemsWrapper.classList.toggle("invisible");
});

export function addToCart(id) {
  shoppingCart.push({ id: id, quantity: 1 });
  renderCart();
}

function renderCart() {
  cartItemContainer.innerHTML = "";
  shoppingCart.forEach((entry) => {
    const item = items.find((i) => entry.id === i.id);
    const cartItem = cartItemTemplate.content.cloneNode(true);

    const container = cartItem.querySelector("[data-item]");
    container.dataset.itemId = item.id;

    const name = cartItem.querySelector("[data-name]");
    name.innerText = item.name;

    const image = cartItem.querySelector("[data-image]");
    image.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`;

    const quantity = cartItem.querySelector("[data-quantity]");
    quantity.innerText = `x${entry.quantity}`;

    const price = cartItem.querySelector("[data-price]");
    price.innerText = formatCurrency((item.priceCents * entry.quantity) / 100);

    cartItemContainer.appendChild(cartItem);
  });
}
