import { API_URL } from '../config';

export async function sendContactMessage(email: string, message: string) {

  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, message }),
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
}