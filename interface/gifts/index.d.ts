import {EnumClientType} from "../../enums";
import {EnumGiftFormat, EnumGiftPhysical, EnumGiftState} from "../../enums/gifts";

export interface IGiftAdd {
    code: string,
    clientid: EnumClientType,
    name: string,
    giftDesc: string,
    rule: string,
    pic: string,
    url: string,
    giftFormat: EnumGiftFormat,
    state: EnumGiftState,
}

export interface IGiftList extends IGiftAdd{
    activityid: string,
    createBy: string,
    createTime: string,
    isphysical: EnumGiftPhysical,
    tenantId: number,
    thirdTypeCode: string,
    thirdTypeName: string,
    updateBy: string,
    updateTime: string,
    value: number
}
