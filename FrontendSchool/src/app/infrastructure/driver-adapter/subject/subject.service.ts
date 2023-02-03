import { Injectable } from '@angular/core';
import { SubjectGateway } from 'src/app/domain/models/subject/gateway/subject.gateway';
import {HttpClient, HttpHeaders, HttpInterceptor} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectService extends SubjectGateway { 
  SUBJECT_POST : string = 'http://localhost:8080/subject/new'
  SUBJECT_DELETE : string = 'http://localhost:8080/subject/delete/'
  SUBJECT_PUT : string = 'http://localhost:8080/subject/'
  SUBJECT_GET : string = 'http://localhost:8080/subject/'
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  });


  constructor(public http : HttpClient) {
    super();
   }
   
   createSubject(params : {id : number, name : string}) : Observable<any>{
    return this.http.post<any>(this.SUBJECT_POST, params,{headers : this.httpHeaders});
   }

   deleteSubject(id : number): Observable<any> { 
    return this.http.delete(this.SUBJECT_DELETE + id,{headers : this.httpHeaders});
  }
  updateSubject(params : {id : number, name : string}): Observable<any> { 
    return this.http.put(this.SUBJECT_PUT + params.id,params,{headers : this.httpHeaders});
  }

  getSubjects(): Observable<any> { 
    return this.http.get(this.SUBJECT_GET,{headers : this.httpHeaders});
  }
}
