import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { StudentGateway } from "../../models/student/gateway/student.gateway";
import { IStudentModel } from "../../models/student/student.models";
import { catchError } from 'rxjs/operators'



@Injectable()
export class StudentUseCase{
    constructor(private studentGateway : StudentGateway) {}

    createStudent(params : {id:number, name:string, phone:string, email:string, idSubject:number}) : Observable<IStudentModel>{
            return this.studentGateway.createStudent(params).pipe(
                catchError ( (err)=>{
                    return of (err.error)
                })
            )
        }

}