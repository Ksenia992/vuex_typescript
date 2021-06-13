import axios from 'axios'

export const BASE_URL = 'https://api-shark.herokuapp.com';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: { Authorization: `Bearer *token*` }
})

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
    //   AuthStore.logOut()
    console.log('auth');
    }
    return Promise.reject(error)
  }
)

export default instance