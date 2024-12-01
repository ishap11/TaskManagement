import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './component/project/project.component';
import { ActiveProjectComponent } from './component/active-project/active-project.component';
import { CompleteProjectComponent } from './component/complete-project/complete-project.component';
import { AllProjectComponent } from './component/all-project/all-project.component';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from '../../../blank-layout/blank-layout.component';


const Projectroutes:Routes=[{
  path:'all-project',
  component:BlankLayoutComponent,
  children:[{
    path:'', component:AllProjectComponent,
  }] 
}]


@NgModule({
  declarations: [
    ProjectComponent,
    ActiveProjectComponent,
    CompleteProjectComponent,
    AllProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Projectroutes),
  ],
  exports : [
    AllProjectComponent
  ]
})
export class ProjectModule { }
