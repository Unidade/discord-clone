import axios from 'axios'
import { LoginData, RegisterData } from '../types/AuthData'

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:5002/api'

//'http://localhost:5002/api'
const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 1000,
})

export const login = async (data: LoginData) => {
  try {
    return await apiClient.post('/auth/login', data)
  } catch (exception) {
    return {
      error: true,
      exception,
    }
  }
}

export const register = async (data: RegisterData) => {
  try {
    return await apiClient.post('/auth/register', data)
  } catch (exception) {
    return {
      error: true,
      exception,
    }
  }
}
