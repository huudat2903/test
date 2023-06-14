import axiosClient from "./AxiosClient";
import queryString from "query-string"
const url = "/oauth/token";
const loginAPI = {
    login:(username : string, password : string) => {
        let data = {
            username: username,
            password: password,
            grant_type: "password",
            client_id: "koFeApp",
            donvi: "ca49e2ad-644e-462e-aab1-d3d353488041",
        };
        return axiosClient.post(url, queryString.stringify(data));
    },
}
export default loginAPI;