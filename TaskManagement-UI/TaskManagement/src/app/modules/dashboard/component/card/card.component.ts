import { Component } from '@angular/core';

@Component({
  selector: 'TaskManagement-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cardItems = [
    { title: 'Total Tasks', value: 24, icon: 'circle' },
    { title: 'Completed', value: 16, icon: 'check_circle' },
    { title: 'In Progress', value: 8, icon: 'timelapse' },
    { title: 'Overdue', value: 2, icon: 'notifications' }
  ];
}
