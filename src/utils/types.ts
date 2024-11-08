export type MainVideo = {
    id?: Number;
    comment?: Comment[];
    mainVideoPath?: string;
    title?:string | null,
    description?: string | null,
    dateTime?:Date;
}

export type Comment = {
    comment:string,
    dateTime:Date
}