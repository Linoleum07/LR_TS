import { router } from './router/router';
import { AuthPage } from './pages/AuthPage';
import { CartPage } from './pages/CartPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { Navbar } from './components/Navbar';

export const renderApp = () => {
  const app = document.getElementById('app');
  if (!app) return;

  const view = router();

  let content = '';

  if (view === 'auth') content = AuthPage();
  else if (view === 'cart') content = CartPage([]);
  else if (view === 'delivery') content = DeliveryPage();
  else content = `<h1 class="home-title">Music Store</h1>`;

  app.innerHTML = `
    ${Navbar()}
    <div class="container">
      ${content}
    </div>
  `;

  setupLinks();
};

const setupLinks = () => {
  const links = document.querySelectorAll('[data-link]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = (e.target as HTMLAnchorElement).getAttribute('href');
      if (!href) return;

      window.history.pushState({}, '', href);
      renderApp();
    });
  });
};