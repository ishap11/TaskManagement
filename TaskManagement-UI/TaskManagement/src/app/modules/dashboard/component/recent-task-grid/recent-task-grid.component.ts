import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'TaskManagement-recent-task-grid',
  templateUrl: './recent-task-grid.component.html',
  styleUrl: './recent-task-grid.component.scss'
})
export class RecentTaskGridComponent {

}
