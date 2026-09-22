import axios from 'axios'
import runtimeEnv from '@/runtimeEnv'

const api = axios.create({
  baseURL: runtimeEnv.VITE_GROUP_MANAGER_API_URL,
})

export default api
