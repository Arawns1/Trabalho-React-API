import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://hex-byte.up.railway.app/loja',
    headers:{
        Authorization: "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnYWJyaWVsIiwiaWF0IjoxNjg2MzU1NzM0LCJleHAiOjE2ODY0NDIxMzR9.sVOalMvk6Sb7q3Js-KlQ1DRa4DkFgZ2j1MWQVdXdlXMM36jMYcL2MXo8Ml_xJXfL"
    }
})
