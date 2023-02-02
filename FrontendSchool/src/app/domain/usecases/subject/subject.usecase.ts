import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SubjectGateway } from "../../models/subject/gateway/subject.gateway";
import { ISubjectModel } from "../../models/subject/subject.models";
import { catchError } from 'rxjs/operators'

@Injectable()
export class SubjectUseCase{
    constructor(private subjectGateway : SubjectGateway) {}

    createSubject(params : {id : number, name : string}) : Observable<ISubjectModel> {
        return this.subjectGateway.createSubject(params).pipe(
            catchError ( (err)=> {
                return of (err.error);
            })
        )
    }
    deleteSubject(id : number) : Observable <ISubjectModel> {
        return this.subjectGateway.deleteSubject(id).pipe(
            catchError ( (err)=> {
                return of (err.error);
            })
        )
    }

}