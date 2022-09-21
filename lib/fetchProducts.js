export default async function loadProducts() {
  const response = await fetch('api/products/');
  const data = await response.json();

  return data;
}
