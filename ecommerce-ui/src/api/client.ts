import axios from "axios";

//api url tanımladık
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//jwtyi alacağımız için 
//Authorize olmuş kullanıcının token bilgisini aldık
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});


