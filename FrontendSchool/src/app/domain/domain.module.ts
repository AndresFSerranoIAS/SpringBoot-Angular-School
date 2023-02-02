import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectUseCase } from './usecases/subject/subject.usecase';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SubjectUseCase
  ]
})
export class DomainModule { }
