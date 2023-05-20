import axios from 'axios'

const baseUrl = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  // timeout: 2000,
  // headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDVmYmUyNjMyMmVhZGY5MzhhODg0NjUiLCJpYXQiOjE2ODQ1ODg3MjMsImV4cCI6MTY5MjM2NDcyM30.dbWMwJt3WOIsYLyNVL6x25Bcpd3MGyZky7UlQTsSYh0` }
});


export default baseUrl
