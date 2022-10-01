import axios from 'axios';
const BASEURL = 'https://treasurehunt.eu.pythonanywhere.com/treasurehunt/';

export const loginAction = async data => {
  return await axios
    .post(`${BASEURL}login/`, data, {
      auth: {
        username: 'admin',
        password: 'admin',
      },
    })
    .then(response => {
      return response.data;
    });
};
export const getCode = async data => {
  return await axios
    .get(`${BASEURL}code/${data}`, {
      headers: {
        Authorization: 'Token ' + getToken(),
      },
    })
    .then(response => {
      return response.data;
    });
};
export const getUser = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (user) return user;
  else return null;
};
// remove the token and user from the session storage
export const removeUser = () => {
  return localStorage.removeItem('currentUser');
};
// set the token and user from the session storage
export const setUser = data => {
  return localStorage.setItem('currentUser', JSON.stringify(data));
};

export const getToken = () => {
  const user = JSON.parse(localStorage.getItem('token'));
  if (user) return user;
  else return null;
};
export const setToken = data => {
  return localStorage.setItem('token', JSON.stringify(data));
};

export const removeToken = () => {
  return localStorage.removeItem('token');
};
