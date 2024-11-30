import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFilterPipe } from './pipe/task-filter.pipe';



@NgModule({
  declarations: [
    TaskFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    TaskFilterPipe
  ]
})
export class HelperModule { }
