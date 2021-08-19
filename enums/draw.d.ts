
/*
* 活动图片类别
*/
export enum EnumDrawActivityImgType{
    bg = '1',
    waiquan = '2',
    neiquan = '3',
    jiugongge = '4',
    guatuceng = '5',
    jindantu = '6',
    chuizitu = '7',
    zakaixiaoguo = '8',
    jiqitu = '9',
    myPrizeBtn = '10',
    rule = '11',
    choujiangBtn = '12',
    tankaungBtn = '13',
    banner = '14',
    lijilingqi = '15',
    qulingqu = '16',
    qushiyong = '17',
    shareBtn = '18'
}

/*
* 参与人数状态
*  participantsState  0隐藏 1显式
*/
export enum EnumDrawParticipantsState{
    show = 1,
    hide = 0
}

/*
* 次数限制状态
*  activityIslimit  0隐藏 1显式
*/
export enum EnumDrawActivityIslimitState{
    show = 1,
    hide = 0
}

/*
* 奖品typeCode
*  typeCode 1000谢谢参与
*/
export enum EnumDrawActivityTypeCodeValue{
    xiexiecanyu = "1000"
}

/**
 * 抽奖分享奖励类型（1：乐豆；2：抽奖次数）
 */
export enum EnumDrawShareBonusType{
    ledou = 1,
    count = 2
}

