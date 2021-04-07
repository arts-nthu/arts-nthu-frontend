let API_URL;
let API_VERSION = "/api/v1"

if (process.env.NODE_ENV == "development") {
    API_URL = `http://localhost:8080${API_VERSION}`
}
else if (process.env.NODE_ENV == "production") {
    API_URL = `https://arts.nthu.edu.tw${API_VERSION}`
}

export default API_URL;