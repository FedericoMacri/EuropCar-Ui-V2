import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ecar-custom-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-radio-button.component.html',
  styleUrl: './custom-radio-button.component.css',
  animations: [
    trigger('pop', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('pressed', style({
        transform: 'scale(1.2)'
      })),
      transition('normal <=> pressed', [
        animate('150ms ease-out')
      ])
    ])
  ]
})
export class CustomRadioButtonComponent {
  @Input() name!: string;      
  @Input() value!: any;        
  @Input() checked = false;    

  isPressed = false;

  @Output() change = new EventEmitter<any>();

  onChange(): void { 
    this.change.emit(this.value);
    this.animatePop();
  }

  animatePop(): void {
    this.isPressed = true;
    setTimeout(() => {
      this.isPressed = false;  
    }, 200);
  }
}
