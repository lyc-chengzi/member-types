import {
    EnumBonusType,
    EnumTaskCategory,
    EnumTaskFinishedStatus,
    EnumTaskType
} from "../../enums/task";
import {EnumActivityUrlFormat} from "../../enums/activity";

export interface ITaskChenkInInit {
    flag: 0 | 1, // 1今天已签到，0今天未签到
    checkInDataList: ITaskCheckInDateList[]
}

export interface ITaskCheckInDateList {
    day: number,
    today?: 0 | 1,
    special: 0 | 1, // 1是特殊奖励,
    specialText: string,
    state: 0 | 1, // 1已签到，0未签到
    dateTime: string,
    ledouBonus: number,
    bonusType: EnumBonusType,
    giftTypeName: string
}

export interface ITaskList {
    id: string,
    name: string,
    category: EnumTaskCategory,
    dailyLimit: number, // 当日完成次数限制
    description: string,
    icon: string,
    bonusType: EnumBonusType,
    bonusValue: number,  // 奖励数
    type: EnumTaskType,
    url: string, // 任务链接
    urlFormat: EnumActivityUrlFormat,
    userDailyTimes: number, // 用户当日完成次数
    buttonText: string,
    specialText: string,
    finished: EnumTaskFinishedStatus
}

export interface IRankingList {
    totalLedou: number,
    totalTaskNumber: number,
    userLogo: string,
    userName: string
}

export interface IWeatherInfo {
    adcode: string,
    city: string,
    humidity: string,
    province: string,
    reporttime: string,
    temperature: string,
    weather: string,
    winddirection: string,
    windpower: string
}

export interface IGiftsGetMsg{
    giftName: string,
    giftTime: string,
    notice: string,
    userLogo: string,
    userName: string,
    userid: string
}

export interface ILeshuLevelList {
    leshuImg: string,
    leshuLevel: string,
    leshuValue: number
}

export interface IUserLeshuList{
    createTime: string,
    display: 0 | 1,
    leshuImg: string,
    leshuLedou: number,
    leshuName: string,
    leshuType: string,
    levelList: ILeshuLevelList[],
    totalLedou: number,
    updateTime: string
}

export interface IMyTrees {
    totalLedou: number,
    userTaskLedouResponseVos: IUserLeshuList[]
}