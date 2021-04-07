import axios from 'axios';
import API_URL from './index';


export const login = async (username, password) => {
    let res = await axios.post(`${API_URL}/users/login`, {
        "username": username,
        "password": password
    })
    
    if(res.data.access_token) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
}

export const logout = () => {
    localStorage.removeItem("user");
};
  
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};