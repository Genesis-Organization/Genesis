import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL || '/api',
})

export default instance
