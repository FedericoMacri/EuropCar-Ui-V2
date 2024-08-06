import { Component, Input } from '@angular/core';

@Component({
  selector: 'Ecar-save-icon',
  standalone: true,
  imports: [],
  templateUrl: './save-icon.component.html',
  styleUrl: './save-icon.component.css'
})
export class SaveIconComponent {
  
@Input()
height = 30;

@Input()
width = 30;

@Input()
color= '#ffffff'

@Input()
isEnabled:boolean = true;


}
