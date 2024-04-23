import axios from 'axios';
import {BASE_URL} from './api';

export const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASE_URL;
