document.querySelectorAll(".product__quantity-controls").forEach((controls) => {
  const dec = controls.querySelector(".product__quantity-control_dec");
  const inc = controls.querySelector(".product__quantity-control_inc");
  let valueElem = controls.querySelector(".product__quantity-value");

  dec.addEventListener("click", () => {
    let value = valueElem.textContent;
    console.log(value);
    if (value > "1") {
      value--;
      valueElem.textContent = value;
    }
  });

  inc.addEventListener("click", () => {
    let value = valueElem.textContent;
    console.log(value);
    value++;
    valueElem.textContent = value;
  });
});

document.querySelectorAll(".product__add").forEach((button) => {
  button.addEventListener("click", (e) => {
    const product = e.target.closest(".product");
    const productId = product.dataset.id;
    const productImage = product.querySelector(".product__image").src;
    const quantity = parseInt(
      product.querySelector(".product__quantity-value").textContent
    );
    addCard(productId, productImage, quantity);
  });
});

function addCard(productId, productImage, quantity) {
  const cardProducts = document.querySelector(".cart__products");
  let cardProduct = cardProducts.querySelector(
    `.cart__product[data-id="${productId}"]`
  );

  if (cardProduct) {
    const count = cardProduct.querySelector(".cart__product-count");
    count.textContent = parseInt(count.textContent) + quantity;
  } else {
    cardProduct = document.createElement("div");
    cardProduct.classList.add("cart__product");
    cardProduct.dataset.id = productId;
    cardProduct.innerHTML = `
        <img class="cart__product-image" src="${productImage}">
        <div class="cart__product-count">${quantity}</div>
      `;
    cardProducts.appendChild(cardProduct);
  }
}
