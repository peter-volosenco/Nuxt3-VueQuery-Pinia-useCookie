// import axios from "axios";

// const defaultHeaders = {
//     "Content-type": "application/json"
// }

// var API_URL;
// if(config.VUE_APP_VERSION == "Development") {
//     API_URL = config.VUE_APP_API_BASE_URL;
// } else {
//     API_URL = window.location.origin;
// }

// API_URL += "/api";

// class APIServices {
//     updateAxiosToken(token) {
//         if(config.VUE_APP_VERSION == "Development") {
//             axios.default.headers.common['Authorization'] = `${token}`
//         } else {
//             axios.default.headers.common['Authorization'] = `ey....`
//         }
//     }

//     getSettings(userId) {
//         return axios.get(`${API_URL}/md/settings/${userId}`)
//     }
// }

// export default new APIServices();
