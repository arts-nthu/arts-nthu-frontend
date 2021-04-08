let API_URL;
let API_VERSION = "/api/v1"

if (process.env.NODE_ENV == "development") {
    API_URL = `http://localhost:8080${API_VERSION}`;
}
else if (process.env.NODE_ENV == "production") {
    API_URL = `https://arts.nthu.edu.tw${API_VERSION}`;
}

API_URL = "http://140.114.182.1:8080/api/v1";

export default API_URL;