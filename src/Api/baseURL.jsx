import axios from 'axios'

const baseUrl = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  // timeout: 2000,
  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
});


export default baseUrl
