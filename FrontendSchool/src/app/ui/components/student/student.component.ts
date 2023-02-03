import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentUseCase } from 'src/app/domain/usecases/student/student.usecase';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentCreateForm : FormGroup;
  constructor(private formBuilder : FormBuilder, private StudentUseCase : StudentUseCase) {
    this.studentCreateForm = this.formBuilder.group({
      studentId : ["",Validators.required],
      studentName : ["",Validators.required],
      studentEmail : ["",Validators.required],
      studentPhone : ["",Validators.required],
      idSubject : ["",Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submitCreateStudent(){
    this.validationCreateStudent();
  }

  validationCreateStudent(){
    this.StudentUseCase.createStudent({
      id : this.studentCreateForm.value.studentId,
      name : this.studentCreateForm.value.studentName,
      phone : this.studentCreateForm.value.studentPhone,
      email : this.studentCreateForm.value.studentEmail,
      idSubject : this.studentCreateForm.value.idSubject
    }).subscribe( result => {
        console.log(result);
    })
  }

}
