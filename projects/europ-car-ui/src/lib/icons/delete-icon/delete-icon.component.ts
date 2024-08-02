import { Component, Input } from '@angular/core';

@Component({
  selector: 'SIbuttons-delete-icon',
  standalone: true,
  imports: [],
  templateUrl: './delete-icon.component.html',
  styleUrl: './delete-icon.component.css'
})
export class DeleteIconComponent {

@Input()
height = 30;

@Input()
width=30;

@Input()
color='#ffffff'

@Input()
isEnabled:boolean = true;

}
