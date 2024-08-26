import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../text/text.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from '../select/select.component';
import { OptionComponent } from '../option/option.component';




@NgModule({
  declarations: [],
  imports: [
    
    TextComponent,
    FormsModule,
    SelectComponent,
    OptionComponent
    
  ],
  exports:[
    TextComponent,
    SelectComponent,
    OptionComponent

  ]
  
})
export class ecarinputmodule { }
