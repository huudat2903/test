import axiosClient from "./AxiosClient";

const commonAPI = {
    getAll: (url: string,params: any) => {
        return axiosClient.get(`${process.env.REACT_APP_API}${url}`,{params});
    },
    getById: (url: string,id: any) => {
        return axiosClient.get(`${process.env.REACT_APP_API}${url}/${id}`);
    },
    delete: (url: string,id: any) => {
        return axiosClient.delete(`${url}/${id}`);
    },
    deleteMany: (url: string,param: string,ids: any) => {
        return axiosClient.delete(`${url}?${param}=${ids}`);
    },
    create: (url: string,params: any) => {
        return axiosClient.post(url,{params});
    },
    update: (url: string,params: any) => {
        return axiosClient.put(url,{params});
    }
}
export default commonAPI;
