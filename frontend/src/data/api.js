const API_URL = "https://yourdeintistcomplete.onrender.com/api";

export async function bookAppointment(data) {
  const response = await fetch(`${API_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to book appointment");
  }

  return result;
}