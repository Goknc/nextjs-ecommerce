export async function getProducts() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  return res.json();

}

export async function getCategories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  return res.json();
}