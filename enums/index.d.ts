/**
 * 项目环境
 */
export enum project_ENV {
    local = 'localhost',
    dev = 'development',
    uat = 'uat',
    production = 'production'
}

/**
 * 页面操作状态
 */
export enum EnumPageAction {
    new = 1,
    edit = 2
}

/**
 * 上传结果
 */
export enum EnumUploadResult {
    normal = 0,
    uploading = 1,
    success = 2,
    error = 3
}

/**
 * 文件上传状态
 */
export enum EnumUploadFileStatus {
    error = 'error',
    success = 'success',
    done = 'done',
    uploading = 'uploading',
    removed = 'removed'
}

/**
 * 通过规则，判断api接口返回的成功状态
 */
export enum EnumServiceResultStatus {
    success = 0,
    failed = 1,
    error = 2
}

/**
 * 服务器特殊错误码
 */
export enum EnumResponseErrorCode{
    tokenNotBe = '1001', //token不存在
    loginOther = '1003', //重复登录
    tokenNotSame = '1004', //token不一致
}

export enum EnumHttpMethod {
    get = 'GET',
    post = 'POST',
    put = 'PUT',
    delete = 'DELETE',
    option = 'OPTION'
}

export enum EnumHttpHeadersKey {
    contentType = 'Content-type'
}

export enum EnumContentTypeValue {
    json = 'application/json;charset=UTF-8',
    formData = 'application/x-www-form-urlencoded;charset=utf-8',
    file = 'multipart/form-data;charset=utf-8'
}

export enum EnumGiftTypeCode {
    ledou = 2000,
    youhuiquan = 3000
}

export enum EnumClientType{
    pc = '1',
    mobile = '2',
    wx = '3',
    mini = '4',
    app = '5'
}

export enum EnumH5Runtime {
    ios = 1,
    h5 = 2,
    wx = 3,
    mini = 4,
    android = 5
}

//1:小程序首页,2:福利中心,3:乐豆专区,4:活动中心,5:积分商城爆品
export enum EnumInterestType{
    miniIndex = 1,
    fuli = 2,
    ledou = 3,
    huodong = 4,
    baopin = 5,
    choujiang=6
}

// 奖品状态
export enum EnumGiftState {
    get = 30,   //已领取
    noget = 10,   //未发放
    nouse = 20,  //已发放
    used = 40, // 已使用
    expires = 50, // 已过期
}

// 是否实物(0:虚拟,1:实物)
export enum EnumIsphysical {
    noGift = 0,
    gift = 1
}

// 是否激活(0:未激活,1:激活)
export enum  EnumInformationState {
    noJiHuo = 0,
    jiHuo = 1
}

// 奖品实物类型(0:虚拟；1：实物； 2：乐豆； 3：谢谢参与)
export enum EnumIsphysicalType {
    xuni = 0,
    shiwu = 1,
    ledou = 2,
    xiexiecanyu = 3,
}

//福利中心是否领取过
export enum EnumIsReceive  {
    lingqu = 1,
    nolingqu = 0
}

//领取优惠卷类型 （ 1乐豆   2优惠卷 ）
export enum EnumBonusType {
   ledou = 1,
   youhuijuana = 2
}

//领取是否消耗乐豆（0否  1是 ）
export enum EnumisCostLeDou {
    no = 0,
    yes = 1
}
//埋点(0:弹窗,1:分类,2:banner)
export enum EnumMaiDianType {
    quanyi = 0,
    classify = 1,
    banner = 2
}
//广告类型(1:图片,2:视频)
export enum EnumMediaType {
    img = 1,
    video = 2
}
