import { Component, Input } from '@angular/core';
import { ResetIconComponent } from "../../icons/reset-icon/reset-icon.component";

@Component({
  selector: 'ecar-reset-button',
  standalone: true,
  imports: [ResetIconComponent],
  templateUrl: './reset-button.component.html',
  styleUrl: './reset-button.component.css'
})
export class ResetButtonComponent {

  @Input()
  iconHeight = 30;
  
  @Input()
  iconWidth = 30 
  
  @Input()
  iconColor = "#ffffff"

  @Input()
  testo = 'Ripristina'

  @Input()
  isIconEnabled!:boolean;

  @Input()
  isButtonDisabled:boolean = false;

}
