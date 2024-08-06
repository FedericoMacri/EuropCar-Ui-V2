import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecar-edit-icon',
  standalone: true,
  imports: [],
  templateUrl: './edit-icon.component.html',
  styleUrl: './edit-icon.component.css'
})
export class EditIconComponent {

@Input()
height = 30;

@Input()
width=30;

@Input()
color='#ffffff'

@Input()
isEnabled:boolean = true;
}
