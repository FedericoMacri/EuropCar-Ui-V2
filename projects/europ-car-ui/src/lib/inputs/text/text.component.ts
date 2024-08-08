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

public onTouched = () => {};
 registerOnTouched(onTouched : any): void {
  this.onTouched = onTouched;
}

public onChange = (value:any) => { } ;
registerOnChange(onChange:any): void {
 
  this.onChange = onChange
}


 setDisabledState(isDisabled: boolean): void {
  this.isDisabled = isDisabled;
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

setValue(valoreIn:string){
  this.value = valoreIn;
  this.onChange(this.value);
}


}
