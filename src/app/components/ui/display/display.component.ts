import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  template: `
    <input
      type="text"
      class="w-full bg-gray-800 text-white text-3xl text-right p-4 rounded-lg shadow-inner focus:outline-none"
      readonly
      [value]="value"
      placeholder="0"
    />
  `,
  styles: ``
})
export class DisplayComponent {

  @Input() value: string = '';

}
