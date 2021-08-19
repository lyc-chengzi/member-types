// 抽奖返回的
import {EnumActivityUrlFormat} from "../../enums/activity";

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
    message:string
}

// 初始化接口返回
interface IActivity {
    dailyLimit: null,
    endTime: string,
    id: string,
    ledouCost: number
    name: string,
    nowDate: string
    rule: string,
    shareBonusType: null
    shareBonusValue: null
    sharePic: string,
    shareTitle: string,
    shareText: string
    shareUrl: string
    shareUrlFormat: string
    startTime: string,
    totalLimit: null,
    shareDailyLimit: number,
    exchangeDailyLimit: number,
    url: string,
    wheelid: null,
    participantsState:number,
    participantsNo:number,
    islimit:number,
    ledouBonusLimit: number // 乐豆最大奖励限制
}

export interface IActivityInit {
    activity: IActivity
    userActivity: IUserActivity
    giftRemaindNum: number
    giftTotalNum: number
    ledouNum: number
    shareState: number,
    state: string
}

export interface IUserActivity {
    activityCost: number,
    activityDailyLimit: number,
    activityEndTime: string,
    activityLimit: number,
    activityName: string,
    activityStartTime: string,
    activityid: number,
    id: number,
    resultMsg: string,
    tenantId: number,
    userTimes: number,
    userid: number,
    userDailyTimes: number,
    userDailyResidueTimes:number|null,
    userResidueTimes:number|null,
    activityIslimit:number,
    playCount: number,
    userDailyInitResidueTimes: number, // 用户每日剩余初始次数
    userDailyShareResidueTimes: number, // 用户每日剩余分享次数
    userDailyExchangeResidueTimes: number //用户每日剩余兑换次
}

export interface IActivityOxYear {
    id: number,
    prizeName: string,
    prizeImageBefore: string, // 图片url 想家 想牛
    prizeVideo: 1 | 2, // 图片或者视频类型  1: pic 2: video
    prizeImageBackground: string, // 图片或者视频url
    prizeBackUpField: string, // 媒体下面的文案
    prizeUrl: string,
    shareTitle: string,
    shareImgUrl: string,
    buttonText: string,
    date?: string,
    lenovoId?: string,
    urlFormat: EnumActivityUrlFormat
}
