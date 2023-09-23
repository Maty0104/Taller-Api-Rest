export interface RespuestaCabezera{
    status: string;
    data:Data[];
}

export interface Data{
    date: string;
    title:string;
    type:string;
    inaliable: boolean;
    extra:string;
}
