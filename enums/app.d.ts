export enum EnumSelectedTab {
    index = 'AppIndex',
    fuliCenter = 'AppFuliCenter',
    integralMall = 'integralMall',
    mine = 'AppMine',
    taskCenter = 'AppTaskCenter',
    drawCenter = 'AppDrawCenter',
}

export enum EnumSettingRuleKey{
    //乐豆规则
    ledou = '1',
    //帮助与反馈
    help = '2',
    //关于联想会员中心,
    about = '3',
    //使用条款
    use = '4',
    //隐私政策
    secret = '5'
}

// 登录类型
export enum EnumLoginMode{
    change = 'change',
    reload = 'reload'
}


/**
 * 用于区分在官网不同环境的lvtag标记   for example: url?lvtag=lios
 */
export enum EnumRuntimeTag{
    lenovoIOS = 'lios',
    lenovoAndroid = 'landroid',
    lenovoMobileH5 = 'lwapmain',
    lenovoLvcha = 'lc',
    memberApp = 'app'//会员app
}
