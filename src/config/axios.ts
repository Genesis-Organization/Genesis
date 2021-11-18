import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:2224/api',
})

export default instance
