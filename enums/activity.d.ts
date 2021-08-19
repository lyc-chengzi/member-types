/*
* 活动状态
*/
export enum EnumActivityState {
    now = 20,  //进行中
    finish = 30,  //结束
    noStart = 10  //未开始
}

// 预约状态
export enum EnumApppointmentStatus{
    no = 1,
    yes = 2
}

// 签到状态
export enum EnumCheckinStatus{
    no = 1,
    yes = 2
}

// url链接类型
export enum EnumActivityUrlFormat {
    memberH5 = 1,//内部h5
    mini = 2, //外部小程序
    lenovoH5 = 3,//官网h5
    otherH5 = 4,//第三方h5
    memberMini = 6, // 会员小程序
    tryout = 11//0元试用
}
