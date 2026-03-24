import { CartItem } from '../components/CartItem';

type CartItemType = {
  productId: string;
  quantity: number;
};

export const CartPage = (items: CartItemType[]): string => {
  return `
    <div class="card">
      <h2>Your Cart</h2>
      <div class="cart-list">
        ${items.length ? items.map(CartItem).join('') : '<p>Cart is empty</p>'}
      </div>
    </div>
  `;
};