import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://hex-byte.up.railway.app/loja',
    headers:{
        Authorization: "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnYWJyaWVsIiwiaWF0IjoxNjg2MzU3Njc0LCJleHAiOjE2ODY0NDQwNzR9.dtTqxwiUSglYEf7nKg5sYZJvpSDzg7zlIvdM5Wq9VHVi5qk_ucZYwBGYTRQLvE5H"
    }
})
