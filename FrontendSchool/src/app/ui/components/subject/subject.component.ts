import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectUseCase } from 'src/app/domain/usecases/subject/subject.usecase';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})

export class SubjectComponent implements OnInit {
  subjectCreateForm: FormGroup;
  subjectDeleteForm: FormGroup;
  subjectUpdateForm: FormGroup;
  subjectList: Array<{ id: number; name: string; }> = [];

  constructor(private formBuilder: FormBuilder, private SubjectUseCase: SubjectUseCase,) {
    this.subjectCreateForm = this.formBuilder.group({
      subjectId: [""],
      subjectName: ["", Validators.required],
    })
    this.subjectDeleteForm = this.formBuilder.group({
      subjectId: ["", Validators.required],
    })
    this.subjectUpdateForm = this.formBuilder.group({
      subjectId: ["", Validators.required],
      subjectName: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.getSubjects();
    setInterval(() => {
      this.getSubjects();
    }, 1000);
  }

  getSubjects(): void {
    this.SubjectUseCase.getSubjects().subscribe(result => {
      console.log(result);
      this.subjectList = result.data;
    });
  }

  submitCreateUser() {
    this.validationCreateSubject();
  }
  validationCreateSubject() {
    this.SubjectUseCase.createSubject({ id: this.subjectCreateForm.value.subjectId, name: this.subjectCreateForm.value.subjectName })
      .subscribe(result => {
        if (result?.status == '201') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: result?.message,
            showConfirmButton: false,
            timer: 2000
          })
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

  submitDeleteSubject() {
    this.validationDeleteSubject();
  }
  validationDeleteSubject() {
    const idDeleted = this.subjectDeleteForm.value.subjectId;
    this.SubjectUseCase.deleteSubject(idDeleted).subscribe(result => {

      if (result?.status == '200') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: result?.message,
          showConfirmButton: false,
          timer: 1500
        })
      }

      if (result?.status == '500') {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: result?.message,
          showConfirmButton: false,
          timer: 1500
        })
      }

    })
  }

  submitUpdateUser() {
    this.validationUpdateSubject();
  }

  validationUpdateSubject() {
    this.SubjectUseCase.updateSubject({ id: this.subjectUpdateForm.value.subjectId, name: this.subjectUpdateForm.value.subjectName })
      .subscribe(result => {
        console.log(result);

        if (result?.status == '201') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: result?.message,
            showConfirmButton: false,
            timer: 2000
          })
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

        if (result?.status == '404') {
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
