import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://hex-byte.up.railway.app/loja'
})
