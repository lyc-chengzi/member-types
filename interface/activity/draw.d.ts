import {ILoginResult} from "../power";
import {IgetGiftMsg} from "./welfareCenter";
import {EnumIsphysicalType} from "../../enums";
import {EnumDrawShareBonusType} from "../../enums/draw";

export interface ISearchMaterials {
    activityId: string
    clientId: string
    id: string
    picType: string
    picUrl: string
}

export interface IDrawActivityDetail {
    activityState: number,
    name: string,
    rule: string,
    participantsNo:number,
    participantsState:number,
    ledouCost:number,
    lotterySettingResponseVo: ISearchMaterials[],
    shareBonusType: EnumDrawShareBonusType,
    shareBonusValue: number,
    shareTitle: string,
    sharePic: string,
    shareText: string
}

export interface IPrizeReceive {
    isJoin: number,
    loginSuccessResponseVo: ILoginResult,
    giftInfoResponseVos: IgetGiftMsg[]
}

/*
 *九宫格图片对应state
 */
export interface IJiuGongGePicState {
    bgPic?: string,
    bannerPic?: string,
    jiugonggePic?: string,
    myPrizeBtnPic?: string,
    tankaungBtnPic?: string,
    rulePic?: string,
}

/*
 *活动配置页抽奖信息
 */
export interface IInitActivityData{
    ledouNum:number,  // 乐豆数量
    dailyLimit:number | null, // 每日抽奖次数
    totalLimit:number | null,  // 总抽奖次数
    userDailyResidueTimes:number | null, // 每日剩余抽奖次数
    userResidueTimes:number | null,  // 总剩余抽奖次数
    ledouCost:number, // 每次消耗多少乐豆
    participantsState:number,  // 是否显示有多少人参与
    participantsNo:number, // 已有多少人参与
}

/*
 *抽奖返回奖品信息
 */
export interface IDrawReturnInfo {
    prizeName: string, // 奖品名称
    prizeCode: string, // 奖品Code
    message: string, // 中奖提示,
    isphysical: EnumIsphysicalType, // 奖品类型
}
