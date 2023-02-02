import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CreateSubjectGateway } from "../../models/subject/gateway/subject.gateway";
import { ISubjectModel } from "../../models/subject/subject.models";
import { catchError } from 'rxjs/operators'

@Injectable()
export class PostCreateSubjectUseCase{
    constructor(private createSubjectGateway : CreateSubjectGateway) {}

    invoke(params : {id : number, name : string}) : Observable<ISubjectModel|null> {
        return this.createSubjectGateway.createSubject(params).pipe(
            catchError ( ()=> {
                return of (null);
            })
        )
    }
}