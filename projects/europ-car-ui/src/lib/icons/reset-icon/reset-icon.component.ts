import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecar-reset-icon',
  standalone: true,
  imports: [],
  templateUrl: './reset-icon.component.html',
  styleUrl: './reset-icon.component.css'
})
export class ResetIconComponent {
  
  @Input()
  height = 30;
  
  @Input()
  width=30;
  
  @Input()
  color='#ffffff';
  
  @Input()
  isEnabled:boolean = true;
}
