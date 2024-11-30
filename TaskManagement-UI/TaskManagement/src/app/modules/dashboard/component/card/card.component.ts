import { Component } from '@angular/core';

@Component({
  selector: 'TaskManagement-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cardItems = [
    { title: 'Shiba Inu', subtitle: 'Small' },
    { title: 'Shiba Inu', subtitle: 'Medium' },
    { title: 'Shiba Inu', subtitle: 'Large' },
    { title: 'Shiba Inu', subtitle: 'Extra Large' }
  ];
}
