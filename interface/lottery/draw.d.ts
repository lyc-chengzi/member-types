import {EnumGiftState,} from "../../enums/gifts";
import {EnumDrawResultStatus, EnumDrawStatus} from "../../enums/lottery";
import {EnumActivityUrlFormat} from "../../enums/activity";

/*首页图文类型*/
export interface IAdsCard {
    id: number,
    appId: string,
    pic: string,
    name: string,
    url: string,
    urlFormat: number,
    itemList?: IAdsCard[],
    popupState: 0 | 1
}

export interface IDrawGiftList {
    level: string,
    giftTypeCode?: string,
    giftTypeName: string,
    giftValue: number,
    giftName: string,
    totalLimit: number
}

export interface IDrawList {
    id: string,
    name?: string,
    startTimestamp: number,// 开始时间
    serverTimestamp: number,// 服务器时间
    pic: string, // 图片
    lotteryActivityGiftResponseVos: IDrawGiftList[], // 奖品列表
    rule?: string, // 规则
    activityTotalLimit: number, //开奖需要的次数
    currentTotalLimit: number, // 当前总参与次数
    description?: string, // 描述
    activityStatus: EnumDrawStatus, // 状态
    ledouCost: number // 每次消耗乐豆数
    lotteryResult: EnumDrawResultStatus // 抽奖结果
    participantsCount?: number // 参与次数
    participantsRate?: number // 超过多少用户
    participantsLevel?: 1 | 2 | 3 //中奖概率高低
    playerLevelPic?: string // 抽奖按钮图片
    rate?: number // 中奖率
    userLedou?: number // 用户乐豆数
    lotterId?: string,
    giftTypeName?: string, // 用户中奖的奖品
    giftValue: number | '',
    sharePic: string,
    shareTitle: string,
    shareUrl: string,
    showInfo: IDrawAdShowInfo,
    subScribeState: EnumGiftState
}

export interface IDrawAdShowInfo {
    appId: string,
    id: number,
    name: string,
    state: EnumGiftState,
    subName: string,
    url: string,
    urlFormat: EnumActivityUrlFormat
}

// 抽奖视图层数据模型
export interface IDrawListViewModel {
    id: string,
    name: string,
    description?: string, // 描述
    isShowTimes?: boolean,
    times?: string,
    isShowStatus?: boolean,
    statusClass?: string,
    status: EnumDrawStatus,
    statusText?: string,
    pic: string,
    gifts: IDrawGiftList[],
    rule: string,
    activityTotalLimit: number, //开奖需要的次数
    currentTotalLimit: number, // 当前总参与次数
    isShowBtnDraw?: boolean,
    drawButtonText?: string,
    subScribeState: EnumGiftState,
    startTimestamp: number,// 开始时间
    serverTimestamp: number,// 服务器时间
}

export interface IDrawDetailViewModel extends IDrawListViewModel{
    isShowLucky?: boolean, // 是否显示用户中奖
    isShowNoLucky?: boolean, // 是否显示用户未中奖
    isShowPalyBox?: boolean, // 是否显示参与抽奖模块
    canPlay?: boolean, // 是否可以点击参与抽奖
    isShowResultStatus?: boolean // 是否显示已开奖
    isShowProbability?: boolean, // 是否显示中奖概率
    isShowWinnerList?: boolean, // 是否显示获奖者列表

    giftTypeName?: string // 用户中奖的奖品
    giftValue: number | '',
    limitText: string, // 剩余开奖次数文案
    limitProcess: number,

    resultStatus: EnumDrawResultStatus, // 抽奖结果
    resultStatusText?: string, // 抽奖结果文案

    userLedou: number, // 用户乐豆余额
    joinCount: number, // 用户参与次数
    ledouCost: number // 每次消耗乐豆数

    probability: number, // 中奖概率
    participantsLevel?: number //中奖概率高低
    probabilityDes: string, // 概率表述，较低、较高
    playBoxClassName: string,
    playBtnClassName: string,
    sharePic: string, // 分享图片
    shareTitle: string //分享标题
    shareUrl: string //分享url,
    showInfo: IDrawAdShowInfo

}

export interface IDrawPalyerList {
    userid: string,
    userName: string,
    userLogo: string
}

export interface IDrawWinnerLevelList {
    typeCode: string,
    typeName: string,
    titleClassName: string,
    giftValue: number,
    giftTypeName: string,
    level: string,
    users: IDrawPalyerList[]
}

export interface IDrawWinnerList extends IDrawPalyerList{
    typeName: string,
    level: string,
}
