import { EK_AXIOS_INSTANCE } from "./axiosInstance";

interface RequestConfig {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  }

export const requestHandler = async({
    url,
    method,
}:RequestConfig) => {
    try{
        const response = await EK_AXIOS_INSTANCE({
            url,
            method
        })
        return response
    }catch(error) {
        throw error
    }
}
