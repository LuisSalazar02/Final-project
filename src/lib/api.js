export function getProducts() {
  return fetch("https://mallory-furniture-admin.now.sh/api/v1/products").then(
    response => response.json()
  );
}

export function getCategory(category) {
  return fetch(
    `https://mallory-furniture-admin.now.sh/api/v1/products?category=${category}`
  ).then(response => response.json());
}

export function getProductById(productId) {
  return fetch(
    `https://mallory-furniture-admin.now.sh/api/v1/products/${productId}`
  ).then(response => response.json());
}
