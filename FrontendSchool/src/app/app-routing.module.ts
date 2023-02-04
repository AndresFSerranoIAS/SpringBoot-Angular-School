import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './ui/components/home/home/home.component';
import { StudentComponent } from './ui/components/student/student.component';
import { SubjectComponent } from './ui/components/subject/subject.component';

const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'student', component: StudentComponent},
  {path: '**' , redirectTo : '/home'}]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }