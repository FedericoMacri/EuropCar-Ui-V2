import { Component, Input } from '@angular/core';
import { EditIconComponent } from "../../icons/edit-icon/edit-icon.component";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'ecar-edit-button',
  standalone: true,
  imports: [EditIconComponent],
  templateUrl: './edit-button.component.html',
  styleUrl: './edit-button.component.css'
})
export class EditButtonComponent {


  @Input()
  iconHeight = 30;
  
  @Input()
  iconWidth = 30 
  
  @Input()
  iconColor = "#ffffff"

  @Input()
  testo = 'Modifica'

  @Input()
  isIconEnabled!:boolean;

  @Input()
  isButtonDisabled:boolean = false;


}
