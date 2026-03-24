const BASE_URL = 'http://localhost:5000';

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const text = await res.text();
  console.log("RAW RESPONSE:", text);

  return JSON.parse(text);
};

export const login = async (data: { email: string; password: string }) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return res.json();
};
