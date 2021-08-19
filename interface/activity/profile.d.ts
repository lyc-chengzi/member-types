export interface IGetLeDou {
    redeemAmount: number,
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
    url: string
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

export interface IGetUserInfo {
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

export interface IPayMembershipVo {
    cardNumber: string;
    endTime: string;
    moneySaved: string;
    payMember: boolean;
}

export interface IprofileInformationList{
    ages: string,
    birthday: string,
    gender: string,
    imgurl: string,
    lenovoId: string,
    loginname: string,
    mobile: number,
    realname: string,
    residecity: string,
    residecommunity: string,
    regDays: number,
    resideprovince: string,
    username: string,
    zonecode: string,
    createTime: string,
    payMembershipVo?: IPayMembershipVo,
}
export interface IGetActivityInformation {
    activityOrder: number,
    createBy: string,
    createTime: string,
    dailyLimit: number,
    description: string,
    endTime: string,
    id: string,
    ledouBonusLimit: number,
    ledouCost:number,
    name: string,
    pic: string,
    startTime: string,
    state: number,
    tenantId: string,
    totalLimit: number,
    updateBy: string,
    updateTime: string,
    url: string,
    wheelid: string,
    activityState: number,
    participantsNo: number,
    urlExternal: number
}

export interface IgetcheckinChekinSetting {
    checkinLedouNum: number,
    checkinState: boolean,
    dayString: string,
    defaultLedouNum: number,
    toDays: number,
    day: number
}
interface IuserCheckinHis {
    activityid: string,
    checkinDate: string,
    continuousDays: number,
    createBy: string,
    createTime: string,
    giftCode: number,
    tenantId: string,
    userid: string
}

interface IuserCheckinHistory {
    day: string,
    userCheckinHistory: IuserCheckinHis | null,
    ledouNum: number
}

export interface IChekinWay {
    activityId: string,
    days: number,
    giftCode: string,
    giftName: string,
    lenovoId: string,
    material: InterfaceChekinWay
    tenantId: string,
    userLedou: number,
    value: number
}
interface InterfaceChekinWay {
    activityid: string,
    clientid: string,
    createBy: string,
    createTime: string,
    description: string,
    id: string,
    name: string,
    pic: string,
    picOrder: number,
    tenantId: string,
    updateBy: string,
    updateTime: string,
    url: string
}
