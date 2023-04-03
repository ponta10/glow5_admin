import Axios from 'axios';
import { STATUS_UN_AUTHORIZED } from '../utils/const';
const axios = Axios.create();

axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === STATUS_UN_AUTHORIZED) {
      localStorage.setItem('access_token', '');
      window.location.assign(window.location.origin);
    }
    return Promise.reject(error);
  },
);

const apiClient = axios.create({
  baseURL: 'http://localhost/api',
});

const token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
  apiClient.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}

let accessToken = '';

export const setApiToken = (token) => {
  accessToken = token;
};

export const getApi = async (url, params) => {
  console.log(url, params);

  const res = await axios.get(url, {
    // ここに「params」というキー名でセットし、クエリパラメータを指定する
    params,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log('api response', res);

  return res;
};

export const putApi = async (url, params) => {
  console.log(url, params);

  const res = await axios.put(
    url,
    // ここに「params」というキー名でセットし、クエリパラメータを指定する
    params,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  console.log('api response', res);

  return res;
};

export const postApi = (url, params) => {
  console.log(url, params);

  const res = axios.post(
    url,
    params,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  console.log('api response', res);

  return res;
};


export const deleteApi = (url, params) => {
    console.log(url, params);
  
    const res = axios.delete(
      url,
      params,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  
    console.log('api response', res);
  
    return res;
  };

export default axios;
