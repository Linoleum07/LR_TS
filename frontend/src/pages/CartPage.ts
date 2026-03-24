import { CartItem } from '../components/CartItem';

type CartItemType = {
  productId: string;
  quantity: number;
};

export const CartPage = (items: CartItemType[]): string => {
  return `
    <div class="cart-container">
      <h2>Cart</h2>
      ${items.map(CartItem).join('')}
    </div>
  `;
};