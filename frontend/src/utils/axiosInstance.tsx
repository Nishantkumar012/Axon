import axios from 'axios'


  const url = 'http://localhost:3000/api'

export const axiosInstance = axios.create({

    
    baseURL: url
}
)