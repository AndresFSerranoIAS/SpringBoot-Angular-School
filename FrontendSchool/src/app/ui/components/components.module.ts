import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubjectGateway } from 'src/app/domain/models/subject/gateway/subject.gateway';
import { SubjectUseCase } from 'src/app/domain/usecases/subject/subject.usecase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomainModule } from 'src/app/domain/domain.module';
import { HttpClientModule } from '@angular/common/http';
import { SubjectService } from 'src/app/infrastructure/driver-adapter/subject/subject.service';
import { HomeComponent } from './home/home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StudentGateway } from 'src/app/domain/models/student/gateway/student.gateway';
import { StudentUseCase } from 'src/app/domain/usecases/student/student.usecase';
import { StudentService } from 'src/app/infrastructure/driver-adapter/student/student.service';



const subjectCreaterUseCaseFactory = (subjectGateway: SubjectGateway) => new SubjectUseCase(subjectGateway);
export const subjectCreaterUseCaseProvider = {
  provide: SubjectGateway,
  useFactory: subjectCreaterUseCaseFactory,
  deps: [SubjectGateway],
}

const studentCreaterUseCaseFactory = (studentGateway: StudentGateway) => new StudentUseCase(studentGateway);
export const studentCreaterUseCaseProvider = {
  provide: StudentGateway,
  useFactory: studentCreaterUseCaseFactory,
  deps: [StudentGateway],
}

@NgModule({
  declarations: [
    SubjectComponent,
    StudentComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DomainModule,
    AppRoutingModule
  ],
  providers: [subjectCreaterUseCaseProvider,
    { provide: SubjectGateway, useClass: SubjectService },studentCreaterUseCaseProvider,{provide : StudentGateway, useClass : StudentService}],
  exports: [SubjectComponent,
    StudentComponent,
    NavbarComponent]
})
export class ComponentsModule { }
