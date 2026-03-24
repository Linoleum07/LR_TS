import { fetchProducts } from './services/api';

export const renderApp = async () => {
  const app = document.getElementById('app');
  if (!app) return;

  try {
    const products = await fetchProducts();
    console.log("Products:", products);

    app.innerHTML = `<h1>Check console</h1>`;
  } catch (error) {
    console.error("API error:", error);
  }
};