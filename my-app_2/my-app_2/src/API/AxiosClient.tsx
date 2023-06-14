import axios from  "axios";
import queryString from "query-string" //npm install query-string

const axiosClient = axios.create(
    {
        baseURL: process.env.REACT_APP_API,
        headers : {
            /* "Content-Type": "application/x-www-form-urlencoded", */
            "Content-Type": "application/json; charset=utf-8"
        },
        paramsSerializer : param => queryString.stringify(param),
    }
);

axiosClient.interceptors.request.use(async (config) => {
    //lấy token
    // var token = getAccessToken();
    // //kiểm tra token hết hạn hay chưa
    // if (token) {
    //     if (new Date(token['.expires']) <= new Date() && token.refresh_token) {
    //         refreshToken(token.refresh_token);
    //     }
    // }
    // config.headers.Authorization = `Bearer ${token.access_token}`;
    return config;
});

const getAccessToken = () => {
    let token = sessionStorage.getItem("_accessToken") ; 
    return JSON.parse(token ? token : "" );
};
const setAccessToken = (token : any) => {
    sessionStorage.setItem("_accessToken", JSON.stringify(token));
};

const refreshToken =(refreshToken : string) => {
    setAccessToken("");
    let data = {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: "koFeApp"
    };
    return axiosClient.post("/oauth/token", queryString.stringify(data)).then(
        (token) => {
            setAccessToken(token);
        }
    );
}

axiosClient.interceptors.response.use((response) => {
        if (response && response.data) {
            return response;
        }
    },
    (error) =>{
        throw error;
    }
);
export default axiosClient;
