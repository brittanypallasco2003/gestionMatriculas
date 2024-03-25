import axios from "axios";

 export const API = "http://localhost:3000/api";

export const registerRequest = (user) => axios.post(`${API}/registro`, user);

export const loginRequest = (user) => axios.post(`${API}/login`, user);
