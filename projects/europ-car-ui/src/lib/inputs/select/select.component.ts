import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OptionComponent } from "../option/option.component";


@Component({
  selector: 'ecar-select',
  standalone :true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: SelectComponent
    }
    

  ]

})
export class SelectComponent implements ControlValueAccessor {

  
  
   

  @Input()
  value:any = '';

  @Output() valueChange:EventEmitter<any> = new EventEmitter<any>();

  @Input()
  placeHolder:string ="Scegli"
  
  isDisabled = false;
  isDropdownActive = false;

  @Input()
  selectedOption!:string;

    

  writeValue(inputValue:string): void {
    this.value = inputValue;

   
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

  @Input()
  setValue(valoreIn:any){
    this.value = valoreIn;
    this.valueChange.emit(this.value);
    this.onChange(this.value);
    
  }
 

 

}
