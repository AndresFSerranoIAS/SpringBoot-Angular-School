import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentGateway } from 'src/app/domain/models/student/gateway/student.gateway';
import { IStudentModel } from 'src/app/domain/models/student/student.models';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends StudentGateway {
  STUDENT_POST : string = 'http://localhost:8080/student/new'
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  });

  constructor(public http : HttpClient) { 
    super();
  }
  createStudent(params : {id:number
    ,name:string,
    phone:string,
    email:string,
    idSubject:number}) : Observable<any>{
      return this.http.post(this.STUDENT_POST,params,{headers : this.httpHeaders});
    }
}

