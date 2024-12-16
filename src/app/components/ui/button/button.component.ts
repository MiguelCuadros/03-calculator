import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button 
      (click)="onClick()"
      class="w-full h-full"
    >
      {{ label }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {

  @Input() label: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }

}
