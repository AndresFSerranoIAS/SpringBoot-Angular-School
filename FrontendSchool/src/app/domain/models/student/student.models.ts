export interface IStudentModel{
    message: string;
    status: string;
}


export interface IStudentList {
    data : [{id:number
        ,name:string,
        phone:string,
        email:string,
        idSubject:number}];
    message: string;
    status: string;
}