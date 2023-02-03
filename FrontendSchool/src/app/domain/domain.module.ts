import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectUseCase } from './usecases/subject/subject.usecase';
import { StudentUseCase } from './usecases/student/student.usecase';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SubjectUseCase,
    StudentUseCase
  ]
})
export class DomainModule { }
