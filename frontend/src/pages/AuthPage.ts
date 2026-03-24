export const AuthPage = (): string => {
  return `
    <div class="auth-container">
      <h2>Login / Registration</h2>

      <form data-registration class="auth-form">
        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  `;
};