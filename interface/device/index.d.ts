export interface ICategory {
    title: string,
    value: number,
}

export interface IDeviceTabs extends ICategory{
    tip: string,
    SN: string
}

export interface IDeviceSubmit {
    deviceType: number,
    flag: number,
    operaType: number,
    sn: string,
    [key: string]: any;
}

