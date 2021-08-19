// 任务分类
export enum EnumTaskType{
    authPhone = 1, // 授权手机号
    addFavoriteMini = 2, // 收藏小程序
    authSubscribe = 3, // 授权订阅消息
    viewPage = 4, // 浏览页面
    shareMiniToGroup = 5, //分享小程序到群
    finishProfile = 6, // 完善个人信息
    wenjuan = 7, // 问卷调查
    bindDevice = 8, // 绑定设备
    setPhoto = 9, // 设置头像昵称
    lottery = 10, // 抽奖任务
}

// 任务类别
export enum EnumTaskCategory{
    new = 1, // 新手
    everyDay = 2, // 每日,日常
    xianshi = 3, // 限时
    duobao = 4, // 夺宝
}

// 任务完成类型
export enum EnumTaskFinishedStatus {
    weiwancheng = 0,
    weilingqu = 1,
    lingqu = 2,
    yiwancheng = 3
}

// 任务奖励类型
export enum EnumBonusType {
    xuni = 0,
    shiwu = 1,
    ledou = 2,
}
