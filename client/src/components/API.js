const API_URL = 'http://localhost:5500';

export async function listLogEntries () {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}

export async function createLogEntry (entry) {

  const response = await fetch(`${API_URL}/api/logs`, { 
    method: 'POST',
    headers: 
    {'content-type': 'application/json'},
    body: JSON.stringify(entry)
  });

  return response.json();
}

export async function removeEntry (id) {
  const response = await fetch(`${API_URL}/api/logs/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}

export async function userLogin(data) {

  console.log('---api userLogin')
  console.log(data)
  const response = await fetch(`${API_URL}/api/user/login`, {
    method: 'POST',
    header: {'content-type': 'application/json'},
    body: JSON.stringify(data)
  })
  console.log(response)
  return response.json();
}

export async function userRegister (data) {
  const response = await fetch(`${API_URL}/api/user/register`, {
    method: 'POST',
    header: {'content-type': 'application/json'},
    body: JSON.stringify(data)
  })
}
