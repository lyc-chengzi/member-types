import {ILoginResult} from "../power";
import {IgetGiftMsg} from "./welfareCenter";

export interface IActivityPicInfo {
    activityId: number,
    picType: string,
    picUrl: string
}

export interface IActivityInfo {
    activityState: number,
    name: string,
    rule: string,
    lotterySettingResponseVo: IActivityPicInfo[]
}

export interface IPrizeReceive {
    isJoin: number,
    loginSuccessResponseVo: ILoginResult,
    giftInfoResponseVos: IgetGiftMsg[]
}