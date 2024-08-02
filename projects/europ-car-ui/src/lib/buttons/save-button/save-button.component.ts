import { Component, Input } from '@angular/core';
import { SaveIconComponent } from "../../icons/save-icon/save-icon.component";

@Component({
  selector: 'SIbuttons-save-button',
  standalone: true,
  imports: [SaveIconComponent],
  templateUrl: './save-button.component.html',
  styleUrl: './save-button.component.css'
})
export class SaveButtonComponent {

@Input()
iconHeight = 30;

@Input()
iconWidth = 30;

@Input()
iconColor = "#ffffff";

@Input()
testo = "Salva" 

@Input()
isIconEnabled:boolean = true;
}
