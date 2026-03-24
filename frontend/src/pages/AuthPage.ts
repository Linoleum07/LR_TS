export const AuthPage = (): string => {
  return `
    <div class="card">
      <h2>Authorization</h2>

      <form data-registration class="form">
        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  `;
};