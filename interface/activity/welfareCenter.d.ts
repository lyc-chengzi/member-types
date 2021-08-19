import {EnumisCostLeDou} from "../../enums";

export interface ProductData {
    isphysical: number;
    name:string,
    giftDesc:string,
    isReceive:number,  //1是领过了
    pic:string,
    code:string,
    activityid:number,
    typeCode:number
}
export interface IGetLeDou {
    coupon: number,
    ledou: number,
    tenantId: string,
    userid: string
}

export interface IGetHypermarketList {
    activityid: string,
    clientid: string,
    description:string,
    id: string,
    name: string,
    pic:string,
    picOrder: string,
    tenantId: string,
    url: string,
    isphysical:number,
    isReceive:number,
    code:string,
    typeCode:number,
    giftFormat:string
}
interface IGetHypermarketActivity {
    description: string,
    id: string,
    name: string,
    pic: string,
    state: number,
    tenantId: string,
    type: number,
    url: string
}
export interface IGetHypermarket {
    activity: IGetHypermarketActivity,
    messageList: IGetHypermarketList[]
}
export interface IgetGift {
    activityid: string,
    code: string,
    isphysical: number,
    phone: number,
    state: number,
    tenantId: string,
    thirdTypeCode: string,
    thirdTypeName: string,
    typeCode: number,
    typeDesc: string,
    typeName: string,
    unionid: string,
    userid: string,
    value: number,
    ledouCostType: number,
    ledouCostValue: number,
    giftFormat: number,
    url: string
}

export interface IgetGiftMsg {
    activityid: string,
    angle: number,
    code: string,
    grid: number,
    isphysical: number,
    openId: string,
    phone: number,
    receiverCityCode: string,
    receiverCityName: string,
    receiverDetailAddress: string,
    receiverDistrictCode: string,
    receiverDistrictName: string,
    receiverName: string,
    receiverPhone: string,
    receiverProvinceCode: string,
    receiverProvinceName: string,
    receiverZipcode: number,
    rule: string,
    state: number,
    tenantId: string,
    thirdTypeCode: string,
    thirdTypeName: string,
    typeCode: string,
    typeDesc: string,
    typeName: string,
    typePic: string,
    unionid: string,
    updateTime: string,
    url: string,
    useDesc: string,
    userid: string,
    value: number,
    giftFormat:number,
    ledouCostType: EnumisCostLeDou,
    ledouCostValue: number,
}

export interface IGetCouponList{
    activityid: number,
    claimType: number,
    clientid: number,
    code: string,
    description: string,
    giftFormat: number,
    giftTypeOrder: number,
    isEfficacy: number,
    isReceive: number,
    isphysical: number,
    name: string,
    pic: string,
    presetType: number,
    rule: null,
    tenantId: number,
    typeCode: number,
    url: string,
    value: null
}

export interface IGetWalferBanner {
    bannerid: number,
    clientId: number,
    giftTypeCode: number,
    giftTypeName: string,
    id: number,
    itemOrder: number,
    materialId: number | null
    pic: string,
    url?:string,
    isReceive:number | string,
    code:number| null
}

export interface IGetWalferCategory {
    name:string,
    messageList:IWalferCategoryMessageList[],
    pic:string
}

export interface IWalferCategoryMessageList{
    activityid: number,
    claimType: number,
    clientid: number
    code: null | string,
    description: string | null
    giftFormat: number,
    giftTypeOrder: number,
    isEfficacy: number,
    isReceive: number,
    isphysical: number,
    name: string,
    pic: string,
    presetType: number,
    rule: string,
    tenantId: number,
    typeCode: number
    url: string,
    ledouCostType: 0 | 1,
    ledouCostValue: number,
    value: number | null
}
