import {IprofileInformationList} from "../activity/profile";

export interface ISetAccessInfo {
    serviceToken?: string | null,
    lenovoCookie?: string | null,
    lenovoId?: string | null,
    unionId?: string | null,
    userInfo?: IprofileInformationList | null, // 官网会员信息
    loginId?: string | null,
    loginInfo?: IUser | null, // 会员用户信息
    lineUserType?: '0' | '1' | null
}

/**
 * 子页面通过接口重新登录后，通知App.tsx做登录操作的接口
 */
export interface IApiLoginParams {
    lenovoCookie: string,
    serviceToken: string,
    lenovoId: string,
    loginInfo: IUser
}

export interface ILoginResponseVo{
    cerpregPassport: string,
    lenovoId: string,
    message: string,
    status: string,
    tgt: string
}
export interface IUser {
    birthday: string,
    clientid: string,
    createBy: string,
    createTime: string,
    email: string,
    gender: string,
    name: string,
    openid: string,
    phone: string,
    regTime: string,
    retryTimes: number,
    shopCode: string,
    statusCode: string,
    tenantId: string,
    uid: string,
    unionid: string,
    updateBy: string,
    updateTime: string,
    wxCardCode: string,
    wxCardId: string,
    nickName: string,
    imgUrl: string,
    lineUserType: '0' | '1',
    regDays: number
}
export interface ILoginResult {
    loginResponseVo: ILoginResponseVo,
    user: IUser,
    serviceToken: string
}

export interface IAccessInfo {
    serviceToken: string,
    lenovoCookie: string,
    lenovoId: string,
    unionId: string,
    userInfo: IprofileInformationList,
    loginInfo: IUser,
    loginId: string,
    lineUserType: '0' | '1'
}
