import {EnumServiceResultStatus} from "../enums";

export interface IServerResponse<DATA> {
    code: string | number,
    data: DATA,
    msg: string
}
export interface IFetchAsyncResult<DATA = any> extends IBaseAsyncResult<IServerResponse<DATA>>{

}
export interface IBaseAsyncResult<BODY = any> {
    success: boolean,
    httpStatus: number, /*http状态码*/
    msg: string,
    body: BODY,
    headers: any,
    error?: Error & {response: any}
}
export interface IFetchOptions{
    method: string,
    postType?: 'form-data' | 'json',
    postData?: Object,
    /*是否需要校验登录超时，和sessionStorage中的loginTimeout配合使用*/
    requireCheck?: boolean,
    headers?: {
        [key in string]: any
    },
    body?: string | FormData
}

export interface IQueryList{
    pageNo?: number,
    page?: number,
    pageSize: number,
    [key: string]: any
}

export interface IServiceResult<DATA = any> {
    status: EnumServiceResultStatus,
    message: string,
    page?: number,
    pageSize?: number,
    total?: number,
    data: DATA,
    code?: number | string
}

export interface IPageList<T = any> {
    list: T[],
    total: number
}
