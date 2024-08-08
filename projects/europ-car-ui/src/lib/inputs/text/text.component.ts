import { Component, ElementRef, EventEmitter, Input, NgModule, OnChanges, output, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ecar-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent   {

@ViewChild('valore') valore!: ElementRef<HTMLInputElement>

@Input()
value:string ="";

@Output() valueChange = new EventEmitter<string>();
  


@Input()
placeHolder:string = "...";

@Input()
preview:string = "Insert your preview"


@Input()
isDisabled:boolean = false;

@Input()
size:number = 30;


onChange() {
  this.valueChange.emit();
}

}
