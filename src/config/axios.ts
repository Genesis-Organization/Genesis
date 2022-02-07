import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL || 'http://localhost:2224/api',
  headers: {
    Authorization: Cookies.get('jwt') ? `token ${Cookies.get('jwt')}` : '',
  },
})

export default instance
