import axios from 'axios';

const API_URL = 'http://localhost:5500';

export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}

export async function createLogEntry(entry) {
  const response = await fetch(`${API_URL}/api/logs`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(entry),
  });

  return response.json();
}

export async function removeEntry(id) {
  const response = await fetch(`${API_URL}/api/logs/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}

export function userLogin(data) {
  const { email, password } = data;

  axios
    .post(`${API_URL}/api/user/login`, {
      email,
      password,
    })
    .then((res) => {
      console.log('res is ', res);
      return res;
    })
    .catch((error) => {
      console.log('Server erroe', error.response);
    });
}

export const userRegister = (data) => {
  const { email, password } = data;

  axios
    .post(`${API_URL}/api/user/register`, {
      email,
      password,
    })
    .then((res) => {
      console.log('response try api', res);
      return res;
    })
    .catch((error) => {
      console.log('ERRRR:: ', error.response);
    });
};
