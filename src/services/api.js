import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://631db0fdcc652771a489a163.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  console.log(data);
  return data;
};

export const add = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const remove = async id => {
  const { data: result } = await instance.delete(`/${id}`);
  return result;
};

