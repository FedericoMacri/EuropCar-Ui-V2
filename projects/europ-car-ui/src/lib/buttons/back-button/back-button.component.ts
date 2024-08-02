import { Component, Input } from '@angular/core';
import { BackIconComponent } from "../../icons/back-icon/back-icon.component";

@Component({
  selector: 'ECarUi-back-button',
  standalone: true,
  imports: [BackIconComponent],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.css'
})
export class BackButtonComponent {


@Input()
iconHeight = 30;

@Input()
iconWidth = 30 

@Input()
iconColor = "#ffffff"

@Input()
testo = 'Torna indietro'
 
@Input()
isIconEnabled:boolean = true;
}