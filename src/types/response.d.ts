/**
 * @template T
 * @parma {T} [any] T 
 * @description 响应体
 */
export interface IResponseDataType<T = any> {
    code: number
    data: T
    message: string
}