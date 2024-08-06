import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecar-add-icon',
  standalone: true,
  imports: [],
  templateUrl: './add-icon.component.html',
  styleUrl: './add-icon.component.css'
})
export class AddIconComponent {

  @Input()
  Height = 30;
  
  @Input()
  Width = 30;
  
  @Input()
  Color = "#ffffff";
  
  @Input()
  isEnabled:boolean = true;
}
