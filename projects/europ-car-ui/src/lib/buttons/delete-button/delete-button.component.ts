import { Component, Input } from '@angular/core';
import { DeleteIconComponent } from "../../icons/delete-icon/delete-icon.component";

@Component({
  selector: 'ECar-delete-button',
  standalone: true,
  imports: [DeleteIconComponent],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css'
})
export class DeleteButtonComponent {

  @Input()
  iconHeight = 30;
  
  @Input()
  iconWidth = 30 
  
  @Input()
  iconColor = "#ffffff"

  @Input()
  testo = 'Elimina'

  @Input()
  isIconEnabled!:boolean;

  @Input()
  isButtonDisabled:boolean = false;

}
