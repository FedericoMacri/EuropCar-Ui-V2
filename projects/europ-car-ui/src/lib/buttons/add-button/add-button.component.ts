import { Component, Input } from '@angular/core';
import { AddIconComponent } from "../../icons/add-icon/add-icon.component";

@Component({
  selector: 'ecar-add-button',
  standalone: true,
  imports: [AddIconComponent],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {

@Input()
  iconHeight = 30;
  
  @Input()
  iconWidth = 30 
  
  @Input()
  iconColor = "#ffffff"

  @Input()
  testo = 'Aggiungi'

  @Input()
  isIconEnabled!:boolean;

  @Input()
  isButtonDisabled:boolean = false;

}
