import { Component, Input } from '@angular/core';

@Component({
  selector: 'SIbuttons-back-icon',
  standalone: true,
  imports: [],
  templateUrl: './back-icon.component.html',
  styleUrl: './back-icon.component.css'
})
export class BackIconComponent {

@Input()
height:number = 30;

@Input()
width:number = 30

@Input()
color:string = "#ffffff"

@Input()
isEnabled:boolean = true;

}
