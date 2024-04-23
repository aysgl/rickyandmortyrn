import {axiosClient} from './instance';

export const BASE_URL = 'https://rickandmortyapi.com/api';
export const CHARACTERS_URL = '/character';
export const LOCATIONS_URL = '/location';
export const EPISODES_URL = '/episode';

export async function getRequest(url, params) {
  const res = await axiosClient.get(`${url}`, {params: params});
  return res;
}

export async function postRequest(url, payload) {
  const res = await axiosClient.post(`${url}`, {payload});
  return res;
}

export async function patchRequest(url, payload) {
  const res = await axiosClient.patch(`${url}`, {payload});
  return res;
}

export async function deletetRequest(url) {
  const res = await axiosClient.delete(`${url}`);
  return res;
}
