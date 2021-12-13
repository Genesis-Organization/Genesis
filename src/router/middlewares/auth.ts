import axios from '@/config/axios'
import { AxiosResponse } from 'axios'

const auth = {
  Logout: (): Promise<AxiosResponse> => axios.get('/api/auth/logout'),
}

export default auth
