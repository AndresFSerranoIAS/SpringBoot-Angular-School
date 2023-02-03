import { Observable } from "rxjs";
import {IStudentModel} from '../student.models'

export abstract class StudentGateway{
    abstract createStudent(params : {id:number
        ,name:string,
        phone:string,
        email:string,
        idSubject:number}) : Observable<IStudentModel>
}