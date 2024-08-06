import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecar-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {

value!:string;

@Input()
placeHolder:string = "Placeholder";

@Input()
preview:string = "Insert your preview"

}
