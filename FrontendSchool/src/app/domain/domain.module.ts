import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateSubjectUseCase } from './usecases/user/user.usecase';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PostCreateSubjectUseCase
  ]
})
export class DomainModule { }
