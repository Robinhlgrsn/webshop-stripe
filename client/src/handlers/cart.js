function calcTotalAmount(cart) {
  let totalPriceItem;
  let pricesArray = [];
  cart.forEach((item) => {
    totalPriceItem = item.quantity * item.price;
    pricesArray.push(totalPriceItem);
  });
  let totalAmount = pricesArray.reduce((a, b) => a + b, 0);
  return totalAmount;
}

function updateProductQuantity(cart, index) {
  let products = [...cart.items]
  let product = products[index]
  product.quantity++
  return products
}

function cartQuantity(cart) {
  let quantity = [0];
  cart.forEach(product => {
    quantity.push(product.quantity)
  });
  let totalQuantity = quantity.reduce((a, b) => a + b)
  return totalQuantity
}

 export {
  calcTotalAmount,
  updateProductQuantity,
  cartQuantity
}