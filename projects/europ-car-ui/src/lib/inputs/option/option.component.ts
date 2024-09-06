import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'ecar-option',
  standalone: true,
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent  {


 
  

  @Input()
  select!:SelectComponent;
  

  @Input()
  testo:string ="";

  @Input()
  optionValue:any ="";


 

  selezione(input:any,name:string){
    
    
    this.select.setValue(input);
    this.select.isDropdownActive=false;
    this.select.selectedOption= name;
    
  }


}
