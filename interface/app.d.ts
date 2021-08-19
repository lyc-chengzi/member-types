import {IAccessInfo, IApiLoginParams} from "./power";
import {EnumLoginMode} from "../enums/app";
import {EnumH5Runtime} from "../enums";

export interface IAppContext {
    showLogin: (mode?: EnumLoginMode) => void,
    hideLogin: () => void,
    accessInfo: IAccessInfo,
    isLogin: boolean,
    logout: ()=>void,
    runtime: EnumH5Runtime,
    apiLogin: (info: IApiLoginParams, isLogin: boolean) => void
}

export interface IPassport {
    isLogin: ()=>boolean,
    cookie: any | undefined,
    show: ()=>void,
    pullCookie: (cookieValue: string) => void,
    init: (callback: any) => void
}

export interface IAndroidApi {
    share: (title: string, content: string, imgUrl: string, url: string, callback: string) => void
    getJPushRegistrationId: () => string
}

export interface IGlobalWindow extends Window{
    passport?: IPassport,
    membership?: IAndroidApi,
    JSEncrypt: any,
    /*提供给android端app的分享方法成功回调函数*/
    androidShareCallback?: () => void
}

export interface ICookieOptions {
    isEncodeURIComponent?: boolean,
    expires?: any,
    json?: boolean,
    path?: string,
    domain?: string,
    sameSite: boolean,
    secure?: boolean
}
