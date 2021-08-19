export interface IShareObject {
    title: string,
    desc: string,
    link: string,
    imgUrl?: string,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
}
