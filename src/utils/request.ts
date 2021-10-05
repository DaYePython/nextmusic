import { IResponseDataType } from '@/types/response';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Notify } from 'vant';

const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://119.29.69.2:3000/'
})


service.interceptors.request.use((config: AxiosRequestConfig) => {
    // cookie 注入 config
    return config;
})

const request = async <T = any>(config: AxiosRequestConfig): Promise<IResponseDataType<T>> => {
    try {
        const { data } = await service.request<IResponseDataType>(config)
        // 消息提示
        data.code === 0
            ? data.message && Notify({ message: data.message, type: "success" })
            : Notify({ message: data.message, type: "danger" }) // 请求失败应当有消息提示
        return data
    } catch (err: any) {
        const msg = err.message || '请求失败'
        console.error(msg)
        return {
            code: -1,
            message: msg,
            data: null as any // 仅用于通过类型校验，请求失败的情况下不应使用对象中的data属性
        }
    }
}


export default request