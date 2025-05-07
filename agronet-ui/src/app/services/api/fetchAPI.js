import axiosClient from './axiosClient';

export const fetchAPI = async ({
  url,
  params = null,
  method = 'GET',
  data = null,
}) => {
  const response = await axiosClient({ url, method, params, data });
  return response.data;
};
export const fetchAPIWithAuthAndHeaders = async ({
  url,
  params = null,
  method = 'GET',
  data = null,
  headers = {},
}) => {
  const token = localStorage.getItem('token');
  const response = await axiosClient({
    url,
    method,
    params,
    data,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
