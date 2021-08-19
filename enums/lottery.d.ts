// 抽奖状态
export enum EnumDrawStatus{
    notStart = 0, // 未开始
    inProgress = 1, // 进行中未参与
    closed = 2 //抽奖结束时间已到
    // joined = 3, // 进行中已参与
}

// 抽奖结果状态
export enum EnumDrawResultStatus{
    weikaijiang = 0, // 未开奖
    weizhong = 1,   // 未中奖
    zhongjiang = 2,  // 中奖
    shibai = 3,  // 开奖失败
    kaijiangzhong = 4, // 开奖中
    yikaijiang = 1
}
