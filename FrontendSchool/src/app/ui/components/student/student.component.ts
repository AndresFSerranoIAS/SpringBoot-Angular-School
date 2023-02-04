import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { StudentUseCase } from 'src/app/domain/usecases/student/student.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentCreateForm : FormGroup;
  constructor(private formBuilder : FormBuilder, private StudentUseCase : StudentUseCase, private titulo:Title) {
    titulo.setTitle('Students')

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
      if (result?.status == '201') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: result?.message,
          showConfirmButton: false,
          timer: 2000
        })
        this.studentCreateForm.reset();
      }

      if (result?.status == '500') {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: result?.message,
          showConfirmButton: false,
          timer: 2000
        })
      }
    })
  }

}
