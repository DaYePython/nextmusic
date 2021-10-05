import { IBanner } from '@/types/app';
import { IResponseDataType } from '@/types/response';
import request from "@/utils/request";


export function getBannerList(): Promise<IBanner[]> {
    return request<Array<IBanner>>({
        method: "GET",
        url: "banner",
        params: { type: 1 }
    }).then(data => {
        console.log(data.banners)
        return data.banners
    })
}