import axios from 'axios';

let API_URL;
let API_VERSION = "/api/v1"

if (process.env.NODE_ENV == "development") {
    API_URL = `http://localhost:8080${API_VERSION}`
}
else if (process.env.NODE_ENV == "production") {
    API_URL = `https://arts.nthu.edu.tw${API_VERSION}`
}

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