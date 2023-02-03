export interface ISubjectModel{
    message: string;
    status: string;
}


export interface ISubjectList {
    data : [{id:number,name:string}];
    message: string;
    status: string;
}