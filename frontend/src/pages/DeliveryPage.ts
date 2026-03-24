export const DeliveryPage = (): string => {
  return `
    <div class="delivery-container">
      <h2>Delivery</h2>

      <form data-delivery class="delivery-form">
        <input placeholder="Address" required />
        <input placeholder="Phone" required />
        <input placeholder="Email" required />

        <button type="submit">Order</button>
      </form>
    </div>
  `;
};