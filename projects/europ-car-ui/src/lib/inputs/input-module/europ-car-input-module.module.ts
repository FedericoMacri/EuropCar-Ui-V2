import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../text/text.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TextComponent
  ],
  exports:[
    TextComponent
  ]
})
export class ecarinputmodule { }
