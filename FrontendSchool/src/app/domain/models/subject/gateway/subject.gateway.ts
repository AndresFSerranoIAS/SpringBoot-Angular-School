import { Observable } from "rxjs"
import { ISubjectList, ISubjectModel } from "../subject.models"


export abstract class SubjectGateway{
    abstract createSubject(params : {id:number,name:string}) : Observable<ISubjectModel>;
    abstract deleteSubject(id : number) : Observable <ISubjectModel>;
    abstract updateSubject(params : {id: number, name : string}) : Observable<ISubjectModel>;
    abstract getSubjects() : Observable<ISubjectList>
}

