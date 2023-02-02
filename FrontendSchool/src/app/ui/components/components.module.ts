import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateSubjectGateway } from 'src/app/domain/models/subject/gateway/subject.gateway';
import { PostCreateSubjectUseCase } from 'src/app/domain/usecases/user/user.usecase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomainModule } from 'src/app/domain/domain.module';
import { HttpClientModule } from '@angular/common/http';
import { SubjectService } from 'src/app/infrastructure/driver-adapter/subject/subject.service';


const subjectCreaterUseCaseFactory = (subjectGateway : CreateSubjectGateway) => new PostCreateSubjectUseCase(subjectGateway);
export const subjectCreaterUseCaseProvider = {
  provide : CreateSubjectGateway,
  useFactory : subjectCreaterUseCaseFactory,
  deps : [CreateSubjectGateway],
}

@NgModule({
  declarations: [
    SubjectComponent,
    StudentComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DomainModule
  ],
  providers:[subjectCreaterUseCaseProvider,
  {provide : CreateSubjectGateway,useClass : SubjectService}],
  exports: [    SubjectComponent,
    StudentComponent,
    NavbarComponent]
})
export class ComponentsModule { }
