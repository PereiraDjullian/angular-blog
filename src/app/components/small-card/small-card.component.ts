import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = "Se você tem tempo para pensar em um belo final, então viva o suficiente para encontrar um."
  @Input()
  id:string = "0"

}
