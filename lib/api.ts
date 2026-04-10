export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

export async function getCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");
  return res.json();
}
