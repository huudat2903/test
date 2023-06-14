import axiosClient from "./AxiosClient";
const url = "/Product";
const productAPI = {
    getAll:() => {
        return axiosClient.get(url);
    },
    getById: (id: any) => {
        return axiosClient.get(`${url}/${id}`);
    },
    delete: (id: any) => {
        return axiosClient.delete(`${url}/${id}`);
    },
    create: (params: any) => {
        return axiosClient.post(url,params);
    },
    update: (params: any) => {
        return axiosClient.put(url,params);
    }
}
export default productAPI;