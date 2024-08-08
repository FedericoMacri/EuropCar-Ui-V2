import { Component, ElementRef, EventEmitter, forwardRef, Input, NgModule, OnChanges, output, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ecar-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextComponent,
      multi: true,
    }
  ]
})
export class TextComponent implements ControlValueAccessor {

 writeValue(value: any): void {
 this.value= value;

 if(this.valore){
  this.valore.nativeElement.value = this.value;
 }

 console.log(value);
}


 registerOnTouched(fn: () => void): void {
  console.log('touched');
}

registerOnChange(fn: (_: any) => {}): void {
  console.log('change');
}

 setDisabledState(isDisabled: boolean): void {
  console.log(isDisabled);
}

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




}
