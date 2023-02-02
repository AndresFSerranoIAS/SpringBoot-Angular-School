import { Injectable } from '@angular/core';
import { CreateSubjectGateway } from 'src/app/domain/models/subject/gateway/subject.gateway';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService extends CreateSubjectGateway {
  API : string = 'http://localhost:8080/'
  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"});

  constructor(public http : HttpClient) {
    super();
   }
   
   createSubject(params : any) : Observable<any>{
    return this.http.post<any>(this.API, params,{headers : this.httpHeaders});
   }
}
