export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products; // DummyJSON ürünleri products içinde döndürür
}

export async function getCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");
  return res.json();
}