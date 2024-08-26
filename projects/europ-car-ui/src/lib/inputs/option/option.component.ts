import { Component, Input } from '@angular/core';
import { ecarinputmodule } from "../input-module/europ-car-input-module.module";
import { SelectComponent } from "../select/select.component";

@Component({
  selector: 'ecar-option',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {

  @Input()
  testo:string ="";

  @Input()
  value:string ="";

}
