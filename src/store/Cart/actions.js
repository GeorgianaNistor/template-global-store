export function addToCart(products) {
  return {
    type: "ADD_PRODUCTS",
    payload: products
  };
}

