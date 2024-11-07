export type MainVideo = {
    id?: Number;
    comment?: Comment[];
    mainVideoPath?: string;
    title?:string,
    description?: string
    dateTime?:Date;
}

export type Comment = {
    comment:string,
    dateTime:Date
}