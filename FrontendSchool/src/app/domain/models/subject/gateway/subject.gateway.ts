import { Observable } from "rxjs"
import { ISubjectModel } from "../subject.models"


export abstract class CreateSubjectGateway{
    abstract createSubject (params : {id:number,name:string}) : Observable<ISubjectModel>
}