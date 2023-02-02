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



const subjectCreaterUseCaseFactory = (subjectGateway: SubjectGateway) => new SubjectUseCase(subjectGateway);
export const subjectCreaterUseCaseProvider = {
  provide: SubjectGateway,
  useFactory: subjectCreaterUseCaseFactory,
  deps: [SubjectGateway],
}

@NgModule({
  declarations: [
    SubjectComponent,
    StudentComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DomainModule,
  ],
  providers: [subjectCreaterUseCaseProvider,
    { provide: SubjectGateway, useClass: SubjectService }],
  exports: [SubjectComponent,
    StudentComponent,
    NavbarComponent]
})
export class ComponentsModule { }
