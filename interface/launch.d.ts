import { EnumActivityUrlFormat} from "../enums/activity";
import {EnumBindState, EnumDeviceType} from "../enums/launch";

export interface IwechatCodeVo {
    errcode: number,
    errmsg: string,
    openid: string,
    sessionKey: string,
    unionid: string
}
export interface  IGetUserInfo {
    birthday: string,
    createBy: string,
    createTime: string,
    email: string,
    gender: string,
    name: string,
    openid: string,
    phone: number,
    shopCode: string,
    tenantId: string,
    uid: string,
    unionid: string,
    updateBy: string,
    updateTime: string,
    wxCardCode: string,
    wxCardId: string
}
export interface ILoginRegister {
    cookie: string,
    birthday: string,
    createBy: string,
    createTime: string,
    email: string,
    gender: string,
    name: string,
    openid: string,
    phone: number,
    shopCode: string,
    tenantId: string,
    uid: string,
    unionid: string,
    updateBy: string,
    updateTime: string,
    wxCardCode: string,
    wxCardId: string,
    serviceToken: string,
    userWxSubmsgResponses?: {state: number, templateId: string}[]
}

/**
 * userinfo中的加密信息
 */
export interface IEncryData {
    encryptedData: string,
    rawData: string,
    signature: string,
    iv: string,
    [key: string]: string
}

/**
 * 通过userInfo授权获得的解密信息
 */
export interface IEncryUnionId {
    avatarUrl: string, //用户头像图片的 URL,
    city: string, //用户所在城市,
    country: string, //用户所在国家,
    gender: number,
    nickName: string, //用户昵称,
    openid: string,
    province: string, //用户所在省份,
    serviceToken: string, //用户token,
    unionid: string
}

/*首页图文类型*/
export interface IAdsCard {
    id: number,
    appId: string,
    pic: string,
    name: string,
    url: string,
    urlFormat: number,
    itemList?: IAdsCard[],
    mediaType?: 1 | 2,
    popupState: 0 | 1,
    urlExternal?: 0 | 1
}

/*活动公告*/
export interface INotice {
    appId: string,
    categoryId: number,
    id: number,
    itemOrder: number,
    name: string,
    pic: string,
    url: string,
    urlExternal: number,
    urlFormat: number
}

/*快捷通道*/
export interface IQuickLink {
    name: string,
    icon: string,
    url: string,
    urlFormat: EnumActivityUrlFormat,
    description?: string,
    tips?: string,
    status?: boolean
}

/*设备*/
export interface IDevice {
    bindState: EnumBindState,
    deviceSn: string,
    deviceType: EnumDeviceType,
    lenovoId: string,
    productName: string,
    productNo: string,
    productPic: string,
    productSeries: string,
    guaranteeDays: number
}

export interface ITryOut {
    activityPeriods: number,
    wapPicPath: string,
    wapActivityUrl: string,
    productName: string,
    proDesc: string,
    basePrice: string,
    proCount: number,
    jsApply: number,
    receiveReportEndTimeStr: string,
    goodsWapUrl: string,
    currentStatus: number
}

export interface IRecommend {
    id: string,
    name: string,
    pic: string,
    url: string,
    urlFormat: EnumActivityUrlFormat,
    urlExternal: number,
    appId: string,
    categoryId: string,
    itemOrder: number
}

export interface IRecommendList {
    appId: string,
    categoryOrder: number,
    id: number,
    itemList: IRecommend[],
    name: string,
    pic: string,
    url: string,
    urlFormat: EnumActivityUrlFormat,
    urlExternal: number,
}

export interface IWelfareCenterItem {
    activityid: number,
    claimType: number,  //领取形式(1:需要手工领取,2:发放完直接已领取)
    code: string,
    description: string,
    giftFormat: 1 | 2,  //券形式(1:兑换码,2:直接跳转)
    giftTypeOrder: number,
    isEfficacy: 0 | 1,  //是否已经失效(0:未失效 1：失效)
    isReceive: 0 | 1,   //是否已经领取(1:领取 0：未领取)
    isphysical: 0 | 1,  //是否实物(0:虚拟,1:实物)
    ledouCostType: 0 | 1,   //是否消耗乐豆(0:不需要 1：需要)
    ledouCostValue: number, //消耗乐豆数
    name: string,
    pic: string,
    presetType: 0 | 1,  //预置类型(0:非预置,1:预置)
    rule: string,
    typeCode: number,
    url: string,
    value: number
}

export interface IWelfareCenterList extends IWelfareCenterItem{
    name: string,
    pic: string,
    messageList: IWelfareCenterItem[]
}

export interface ILoopNotice {
    ledouNum: number,
    userLogo: string,
    userName: string,
    taskTime: number,
    userid: string,
    playStatus?: number
}

export interface IUnfinishTaskItem {
    id: string,
    name: string
}

export interface IUnfinishTask {
    ledouCount: number,
    taskCount: number,
    userTaskList: IUnfinishTaskItem[]
}
