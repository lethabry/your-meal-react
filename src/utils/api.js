import { BASE_URL } from './constants';
import { convertObjToQueryString } from './functions';

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

export const getProductByCategory = (categoryName) => {
  const data = { category: categoryName };
  return fetch(`${BASE_URL}/products?${convertObjToQueryString(data)}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(checkResponse);
};

export const getNavigationLinks = () => {
  return fetch(`${BASE_URL}/category`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(checkResponse);
};

export const getShoppingCart = () => {
  return fetch(`${BASE_URL}/shopping-cart`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(checkResponse);
};

export const addProductToShoppingCart = (product) => {
  const { name, image, price, weight, structure, category, description } = product;
  return fetch(`${BASE_URL}/shopping-cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ name, image, price, weight, structure, category, description }),
  }).then(checkResponse);
};

export const changeProductAmountInShoppingCart = (productId, amount) => {
  return fetch(`${BASE_URL}/shopping-cart/${productId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ amount }),
  }).then(checkResponse);
};

export const deleteProductFromShoppingCart = (productId) => {
  return fetch(`${BASE_URL}/shopping-cart/${productId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(checkResponse);
};

export const cleanShoppingCart = () => {
  return fetch(`${BASE_URL}/shopping-cart`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(checkResponse);
};
