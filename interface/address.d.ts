export interface IAreaData {
    value: string,
    label: string,
    children?: IAreaData[]
}

export interface IAddressEdit {
    userid: string,
    phone: string,
    receiverName: string,
    receiverPhone: string,
    receiverProvinceCode: string,
    receiverProvinceName: string,
    receiverCityCode: string,
    receiverCityName: string,
    receiverDistrictCode: string,
    receiverDistrictName: string,
    tag: string,
    receiverDetailAddress:string,
    tenantId:string
}
