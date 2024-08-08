import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../text/text.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TextComponent,
    FormsModule
    
  ],
  exports:[
    TextComponent

  ]
  
})
export class ecarinputmodule { }
