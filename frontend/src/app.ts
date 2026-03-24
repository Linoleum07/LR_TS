import { router } from './router/router';
import { AuthPage } from './pages/AuthPage';
import { CartPage } from './pages/CartPage';
import { DeliveryPage } from './pages/DeliveryPage';

export const renderApp = () => {
  const app = document.getElementById('app');
  if (!app) return;

  const view = router();

  if (view === 'auth') {
    app.innerHTML = AuthPage();
  } else if (view === 'cart') {
    app.innerHTML = CartPage([]);
  } else if (view === 'delivery') {
    app.innerHTML = DeliveryPage();
  } else {
    app.innerHTML = `<h1>Home (пока пусто)</h1>`;
  }
};