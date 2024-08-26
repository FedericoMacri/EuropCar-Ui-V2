import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OptionComponent } from "../option/option.component";


@Component({
  selector: 'ecar-select',
  standalone: true,
  imports: [CommonModule, OptionComponent],
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
export class SelectComponent implements ControlValueAccessor,OnInit {


  @ViewChild('valore') valore!: ElementRef<HTMLInputElement>

  @Input()
  value:string = '';

  @Output() valueChange = new EventEmitter<string>();

  @Input()
  placeHolder:string = "Seleziona una opzione"
  
  isDisabled = false;
  isDropdownActive = false;
  selectedOption:any;

  @Input()
  options = [
    {}
  ]

  @Input()
  testoOpzione:string ="''";

  @Input()
  valueOpzione:string ="''";
    

  writeValue(inputValue:string): void {
    this.value = inputValue;

    if(this.valore){
      this.valore.nativeElement.value = this.value;
     }
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

  setValue(valoreIn:string){
    this.value = valoreIn;
    this.onChange(this.value);
  }
 
  ngOnInit(): void {
    this.valore.nativeElement.value = '';
  }
   

}
