import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent, AddIconComponent, BackButtonComponent, BackIconComponent, DeleteButtonComponent, DeleteIconComponent, EditButtonComponent, EditIconComponent, ResetButtonComponent, ResetIconComponent, SaveButtonComponent, SaveIconComponent, TableComponent } from '../public-api';




@NgModule({
  declarations: [ 



  ],
  imports: [
    CommonModule,
    BackIconComponent,
    BackButtonComponent, 
    SaveButtonComponent,
    SaveIconComponent,
    DeleteButtonComponent,
    DeleteIconComponent,
    EditButtonComponent,
    AddButtonComponent,
    AddIconComponent,
    EditIconComponent,
    ResetButtonComponent,
    ResetIconComponent,
    TableComponent
    
  
    
 
  ],

  exports:[
  
    BackButtonComponent,
    BackIconComponent,
    SaveButtonComponent,
    SaveIconComponent,
    DeleteButtonComponent,
    DeleteIconComponent,
    EditButtonComponent,
    AddButtonComponent,
    AddIconComponent,
    EditIconComponent,
    ResetButtonComponent,
    ResetIconComponent,
    TableComponent

  ]
})
export class EuropCarModule { }
