const API_URL = 'http://localhost:5500';

export async function listLogEntries () {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}