import { Component, ContentChildren, forwardRef, Input, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomRadioButtonComponent } from '../custom-radio-button/custom-radio-button.component';

@Component({
  selector: 'ecar-radio-button-group',
  standalone: true,
  imports: [],
  templateUrl: './custom-radio-button-group.component.html',
  styleUrl: './custom-radio-button-group.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomRadioButtonGroupComponent),
      multi: true
    }
  ]
})
export class CustomRadioButtonGroupComponent {

  //Nome del gruppo
  @Input() name!: string;  

  @ContentChildren(CustomRadioButtonComponent) radios!: QueryList<CustomRadioButtonComponent>;

  //immagazinare il valore 
  private value: any = null;  
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.updateCheckedState();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  ngAfterContentInit(): void {
    this.radios.forEach((radio) => {
      radio.name = this.name;
      radio.checked = radio.value === this.value;

      radio.change.subscribe((value: any) => {
        this.onRadioChange(value);
      });
    });
  }

  onRadioChange(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
    this.updateCheckedState();
  }

  private updateCheckedState(): void {
    if (this.radios) {
      this.radios.forEach((radio) => {
        radio.checked = radio.value === this.value;
      });
    }
  }

}
