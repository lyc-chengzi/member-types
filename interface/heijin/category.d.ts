import { EnumActivityUrlFormat } from "../../enums/activity";
import { EnumHeijinCategoryType } from "../../enums/heijin";

export interface IHeijinCategory {
    id: number;
    displayOrder: number;
    name: string;
    subName: string;
    type: EnumHeijinCategoryType;
    childList?: IHeijinCategory[];
    itemList?: IHeijinCategory[];
    startTime?: string;
    endTime?: string;
    pic: string;
    url: string;
    urlFormat: EnumActivityUrlFormat;
}