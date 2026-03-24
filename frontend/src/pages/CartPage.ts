type CartItemType = {
  productId: string;
  quantity: number;
};

export const CartPage = (items: CartItemType[]): string => {
  return `
    <div>
      <h2>Cart</h2>
      ${items.map(item => `<p>${item.productId}</p>`).join('')}
    </div>
  `;
};