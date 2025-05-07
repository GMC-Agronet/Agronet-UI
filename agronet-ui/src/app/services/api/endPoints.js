export const BASE_URL = 'http://localhost:3001';
export const API_ENDPOINTS = {
  USERS: {
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
  },
  FARMER_REGISTER: {
    url: `${BASE_URL}/api/farmer/register`,
    method: 'POST',
  },
  CREATE_USER: {
    url: '/users',
    method: 'POST',
  },
  PRODUCTS: {
    url: '/products',
    method: 'GET',
  },
  ORDERS: {
    url: '/orders',
    method: 'POST',
  },
};
