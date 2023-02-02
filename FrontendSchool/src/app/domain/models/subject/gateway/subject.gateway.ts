import { Observable } from "rxjs"
import { ISubjectModel } from "../subject.models"


export abstract class SubjectGateway{
    abstract createSubject(params : {id:number,name:string}) : Observable<ISubjectModel>;
    abstract deleteSubject(id : number) : Observable <ISubjectModel>;
}

